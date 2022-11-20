const express = require('express');
const app = express();
const request = require('request');
const fs = require('fs');
const  xml2js = require('xml2js');

const port = 3000;

app.get('/user', (req, res) => {
  res.json([{
    id: 1,
    name: "Taroa"
  }, {
    id: 2,
    name: "Jiro"
  }]);
});
app.get('/test', (req, res) => {
  request('https://jsonplaceholder.typicode.com/posts', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(response) // Print the google web page.
    }
    return res.json(JSON.parse(response.body));
  })
});

app.get('/xml', (req, res) => {
  var parser = new xml2js.Parser();
  console.log(parser);
  console.log(fs);
  // fs.readFile("http://radiko.jp/v3/program/today/JP13.xml", function(err, data) {
  //   console.log(data);
  // // parser.parseString(data, function (err, result) {
  // //     console.dir(result);
  // //     console.log('Done');
  // // });
  // }); 
  request('http://radiko.jp/v3/program/today/JP13.xml', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      
      console.log("====") // Print the google web page.
      // console.log(response.body) // Print the google web page.
      var parser = new xml2js.Parser({explicitArray: false});
      console.log(parser);
      console.log(fs);
      // fs.readFile(response.body, function(err, data) {
        // console.log(data);
      let xml = parser.parseString(response.body, function (err, result) {
          console.dir(result);
          
          return res.json(result);
          // console.log(result.radiko.stations.station);
          // console.log(result.radiko.stations.station[0].progs.prog[0]);
          // console.log('Done');
      });
      // return res.json(xml);
      // });  
    }
    // return res.json(JSON.parse(response.body));
     
  })
});

app.listen(port, () => console.log(`Server running on port ${port}`));
