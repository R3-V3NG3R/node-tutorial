// //import http
// const http = require("http");

// const routes = require('./routes');

// //create Server
// const server = http.createServer(routes);

// //start listening on port
// server.listen(3000);

//import http
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");


app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { docTitle: "Page Not Found!" });
});

app.listen(3000);
