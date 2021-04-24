const getDB = require("../util/database").getDb;
const ObjectID = require("mongodb").ObjectID;

class User {
  constructor(username, email, cart) {
    this.name = username;
    this.email = email;
    this.cart = cart;
  }
  save() {
    const db = getDB();
    return db
      .collection("users")
      .insertOne(this)
      .then((result) => {
        console.log("User Created Successfully!");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  addToCart(product){

  }

  static findById(userId) {
    const db = getDB();
    return db.collection("users")
      .find({ _id: new ObjectID(userId) })
      .next()
      .then((user) => user)
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = User;