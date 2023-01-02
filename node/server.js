// const express = require('express')
// var os = require("os");
// const app = express()

// let ejs = require('ejs') // => a powerful and simple templating engine.
// let fs = require('fs')

// const port = process.env.PORT
// // const port = 3000

// // what we need to send
// let objectSentFromServer = [
//   {
//     "id": 1,
//     "title": "Post 1"
//   },
//   {
//     "id": 2,
//     "title": "Post 2"
//   },
//   {
//     "id": 3,
//     "title": "Post 3"
//   }
// ] 

// app.get('/', (req, res) => {
//     fs.readFile(__dirname + '/index.html', 'utf-8', (err, html) => {
//       res.send(ejs.render(html, 
//         { 
//           objectSentFromServer: objectSentFromServer, 
//           port: port,
//           host: os.hostname()
//         }))
//     })
// })
// app.get('/',(req,res)=>{
// res._write('<h1>Inside About</h1>')
// })

// app.listen(2400, (req,res) => {
//   res.send('<p>some html</p>');
//   console.log(res,'here');
//   console.log(`Example app listening at http://localhost:2400`)
// })
// app.listen(2402, (req,res) => {
  
//   console.log(`Example app listening at http://localhost:2402`)
// })












// // Node.js program to demonstrate the
// // response.write() Method

// // Importing http module
// var http = require('http');

// // Setting up PORT
// const PORT = process.env.PORT || 3000;

// // Creating http Server
// var httpServer = http.createServer(function(request, response){

// // Writing string data
// response.write('')
// response.write("Heyy geeksforgeeks ", 'utf8', () => {
// 	console.log("Writing string Data...");
// });

// // Prints Output on the browser in response
// response.end(' ok');
// });

// // Listening to http Server
// httpServer.listen(PORT, () => {
// 	console.log("Server is running at port 3000...");
// });

// Ejecutar: node server.js


import callJio from './route/Jio.mjs'
const app = require('express')();
// const jio = require('express')();
const airtle_ = require('express')();
// const callJio=require('./route/Jio')
// API endpoint
app.get('/', (req,res)=>{
    res.send("Welcome to GeeksforGeeks !");
})
app.use(callJio)
const jioCap=200,Airtle=200,vi=100;
const totalSum=(jioCap+Airtle+vi);
const totalCap=300
const divider=totalSum/totalCap
const DataForJio=jioCap/divider,DataForAirtle=Airtle/divider, DataForVi=vi/divider;
console.log(divider,`DataForJio=${DataForJio}`,`DataForAirtle=${DataForAirtle}`,`DataForVi=${DataForVi}`);
  
// Launching application on several ports
app.listen(3000,(req,res)=>{
 console.log('App ');
});

jio.get('/',(req,res)=>{
  res.send(`<h1>Jio Data    ${DataForJio}</h1>`)
})

airtle_.get('/',(req,res)=>{
  res.send(` <h1> Inside Airtle  ${Airtle} </h1>`)
})
app.listen(3001);
// jio.listen(3002);
airtle_.listen(3003);