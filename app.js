//import http
const http = require("http");

//create Server
const server = http.createServer((req,res)=>{
    console.log("Server Started.");
});

//start listening on port
server.listen(3000);