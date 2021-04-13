// //import http
// const http = require("http");

// const routes = require('./routes');


// //create Server
// const server = http.createServer(routes);

// //start listening on port
// server.listen(3000);

//import http
const http = require("http");

const express = require('express');

const app = express();

app.use((req, res, next)=>{
    console.log('First middle ware');
    next();
});
app.use((req, res, next)=>{
    console.log('second middle ware');
});



//create Server
const server = http.createServer(app);

//start listening on port
server.listen(3000);