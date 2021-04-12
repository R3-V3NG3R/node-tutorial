//import http
const http = require("http");

const routes = require('./routes');


//create Server
const server = http.createServer(routes);

//start listening on port
server.listen(3000);