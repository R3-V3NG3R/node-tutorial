// //import http
// const http = require("http");

// const routes = require('./routes');


// //create Server
// const server = http.createServer(routes);

// //start listening on port
// server.listen(3000);

//import http

const express = require('express');

const app = express();

app.use('/products',(req, res, next)=>{
    console.log('First middle ware');
    res.send('<h1>Products page</h1>');

});
app.use('/',(req, res, next)=>{
    console.log('second middle ware');
    res.send("Welcome to Node.js"); 
});




//start listening on port
app.listen(3000);