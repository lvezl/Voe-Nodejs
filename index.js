// const http = require('http');
// var randomWords = require('random-words');
// console.log(randomWords());


// const hostname = 'localhost';
// const port = 80;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end(randomWords() + '\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const express = require('express');
const app = express();
var cors = require('cors')
const port = 80;
app.use(express.json()); 
app.use(cors())

app.get('/sensor1', (req, res) => {
  res.send({ sensor1: 1311 });
});

app.post('/sensor2', (req, res) => {
    var d = req.body;
    console.log(req.body.suhu)
    res.send("Data Yang Terkirim Adalah " + req.body.suhu);
  });
  
app.listen(port, () => {
  console.log(`cli-nodejs-api listening at http://localhost:${port}`)
});