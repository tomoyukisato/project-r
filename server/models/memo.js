// 'use strict';

// const {Sequelize, DataTypes} = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');
const createModel = (sequelize, DataTypes) => {
  const Memo = sequelize.define(
    "Memo",
    {
      title: {
        allowNull: false,
        type: DataTypes.STRING
      },
      body: {
        allowNull: false,
        type: DataTypes.STRING
      }
    },
  );
  Memo.associate = function(models) {
    // associations can be defined here
  };
  return Memo;
}
module.exports = createModel;
// module.exports = (sequelize, DataTypes) => {
//   class Memo extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Memo.init({
//     title: {
//       allowNull: false,
//       type: DataTypes.STRING
//     },
//     body: {
//       allowNull: false,
//       type: DataTypes.STRING
//     }
//   }, {
//     sequelize,
//     modelName: 'Memo',
//   });
  // return Memo;
