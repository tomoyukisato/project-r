const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

const Memo = require('./memo.js');

// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const require = createRequire(import.meta.url);
// const config = require('../config/config.json')[env];
// const config = dbConfig[env];
// const db = {};
let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
const db ={
  Memo: Memo(sequelize, Sequelize.DataTypes)
}
// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = sequelize.import(path.join(__dirname, file));
//     db[model.name] = model;
//   });

db.sequelize = sequelize;
db.Sequelize = Sequelize;
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
// console.log(db);
module.exports = db;
