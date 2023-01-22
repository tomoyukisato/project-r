
const express = require('express');
// import express from "express";
const app = express();
// var request = require('request');
// import axios from "axios";
const fs = require('fs');
const  xml2js = require('xml2js');
const  cors = require('cors');
const  pdata = require('./project-data.js');
const  memo_data = require('./memo-data.js');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// restaurant tutorial
// const data = require("./restaurant-data.js");
// import xml2js from "xml2js";
// import request from "request";
// import fs from "fs";
// import xml2js from "xml2js";
// import cors from "cors";
// import * as data from "./restaurant-data.js";
// import * as pdata from "./project-data.js";
// import * as memo_data from "./memo-data.js";
const model = require('./models/index.js');

// import memos from "./models/memos.js";
// import { Restaurant, Review, sequelize, User } from "./models.js"
const port = 3000;
app.use(cors());

app.get('/user', (req, res) => {
  res.json([{
    id: 1,
    name: "Taroa"
  }, {
    id: 2,
    name: "Jiro"
  }]);
});

// get memo list
app.get("/memo", async(req, res) => {
  // res.json(memo_data.memod)
  await model.Memo.findAll(
    {
      attributes:['id', 'title','body']
    }).then(memo => {
    if(memo == null){
      console.log(memo)
      res.send(404)
    } else {
      res.json(memo);
    }
  })
})

// get memo by id
app.get("/memo/:id", async (req, res, next) => {
  await model.Memo.findByPk(req.params.id).then(memo => {
    if(memo == null){
      console.log(memo)
      res.send(404)
    } else {
      res.json(memo);
    }
  })
});

// register memo 
app.post("/memo/register", async (req, res) => {
  await model.Memo.create({
    title: req.body.title,
    body: req.body.body
  }).then(memo => {
    if(memo == null){
      res.send(404)
    } else {
      res.json(memo);
    }
  })
});

// modify memo
app.put("/memo/:id/edit", async(req, res) =>{
  console.log(res);
  await model.Memo.update(
    { title: req.body.title, body: req.body.body},
    { where: { id: req.params.id }}
  )
  .then(() => { return model.Memo.findByPk(req.params.id)})
  .then(memo => {
    if(memo == null){
      res.send(404)
    } else {
      res.json({"id": memo.id});
    }
  })
})
app.use(function(req, res, next) {
  res.status(404).send("ページが見つかりません");
});
  // const memo = await Memo.findAll();
  // console.log(memo);
  // const memo = memos.findByPk(1);
  // res.json(memo);
  // console.log(memo);
  // const memo = memo_data.memod.filter(item=> {
  //   if(item.id == req.params.id){
  //     return item;
  //   }
  // });
  // console.log(memo[0]);
  // res.json(memo[0])

app.get('/mock-project', (req, res)=>{
  res.json(pdata.projects)
})
// app.get('/test', (req, res) => {
//   axios.get('https://jsonplaceholder.typicode.com/posts', (response)=>{
//     console.log(response.statusCode)
//   }
//   // function (error, response, body) {
//   //   console.log(error);
//   //   if (!error && response.statusCode == 200) {
//   //     console.log(response) // Print the google web page.
//   //   }
//   //   // return res.json(JSON.parse(response));
//   )
// });

// app.get('/xml', (req, res) => {
//   var parser = new xml2js.Parser();
//   console.log(parser);
//   console.log(fs);
  // fs.readFile("http://radiko.jp/v3/program/today/JP13.xml", function(err, data) {
  //   console.log(data);
  // // parser.parseString(data, function (err, result) {
  // //     console.dir(result);
  // //     console.log('Done');
  // // });
  // }); 
  // axios.get('https://radiko.jp/v3/program/today/JP13.xml', 
  //   (response) => {
  //     console.log(response);
  //   }
  // function (error, response, body) {
  //   if (!error && response.statusCode == 200) {
      
  //     console.log("====") // Print the google web page.
  //     // console.log(response.body) // Print the google web page.
  //     var parser = new xml2js.Parser({explicitArray: false});
  //     console.log(parser);
  //     console.log(fs);
  //     // fs.readFile(response.body, function(err, data) {
  //       // console.log(data);
  //     let xml = parser.parseString(response.body, function (err, result) {
  //         console.dir(result);
          
  //         return res.json(result);
  //         // console.log(result.radiko.stations.station);
  //         // console.log(result.radiko.stations.station[0].progs.prog[0]);
  //         // console.log('Done');
  //     });
  //     // return res.json(xml);
  //     // });  
  //   }
  //   // return res.json(JSON.parse(response.body));
     
//   )
// });

// Restaurant Tutorial

app.get("/restaurants", async(req, res)=> {
  const limit = +req.query.limit || 5;
  const offset = +req.query.offset || 0;
  // const restaurants = data.restaurants;
  // res.json({
  //   rows: restaurants.slice(offset, offset+limit),
  //   count: data.restaurants.length,
  // });
  const restaurants = await Restaurant.findAndCountAll({
    attributes:{
      include: [
        [
          sequelize.literal(
            `(SELECT COUNT(*) FROM reviews AS r WHERE r.restaurant_id = restaurant.id)`,
          ),
          "review_count"
        ],
      ],
    },
    include: { model: Review, limit: 3, include: {model:User}},
    order: [[sequelize.literal("review_count"), "DESC"]],
    limit,
    offset,
  });
  res.json(restaurants)
});

app.get("/restaurants/:restaurantId", async(req, res)=> {
  const restaurantId = +req.params.restaurantId;
  // const restaurant = data.restaurants.find(
  //   (restaurant)=> restaurant.id === restaurantId
  // );
  const restaurant = await Restaurant.findByPk(restaurantId)
  if(!restaurant){
    res.status(404).send("not found");
    return;
  }
  res.json(restaurant);
});

app.get("/restaurants/:restaurantId/reviews", async (req, res) => {
  const restaurantId = +req.params.restaurantId;
  const limit = +req.query.limit || 5;
  const offset = +req.query.offset || 0;
  // const restaurant = data.restaurants.find(
  //   (restaurant) => restaurant.id === restaurantId
  // );
  const restaurant = await Restaurant.findByPk(restaurantId); 
  if (!restaurant) {
    res.status(404).send("not found");
    return;
  }
  // const reviews = data.reviews.filter(
  //   (review) => review.restaurantId === restaurantId
  // );

  // res.json({
  //   count: reviews.length,
  //   rows: reviews.slice(offset, offset + limit)
  // });
  const reviews = await Review.findAndCountAll({
    include: {model: User},
    where: {restaurantId},
    limit,
    offset
  });
  res.json(reviews);
});
app.listen(port, () => console.log(`Server running on port ${port}`));
