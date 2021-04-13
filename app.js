// //import http
// const http = require("http");

// const routes = require('./routes');


// //create Server
// const server = http.createServer(routes);

// //start listening on port
// server.listen(3000);

//import http

const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);

app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).send("<h1>Page Not found.</h1>");
});






//start listening on port
app.listen(3000);