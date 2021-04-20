const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://admin:vamsikdml@tutorials.6dx9w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
    .then((result) => {
      console.log("Database Connected successfully");
      callback(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = mongoConnect;
