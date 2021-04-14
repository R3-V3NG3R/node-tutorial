const fs = require("fs");
const path = require("path");

const getProductsFromFile = (cb) => {
  const p = path.join(
    path.dirname(process.mainModule.filename),
    "data",
    "products.json"
  );
  fs.readFile(p, (err, fileContents) => {
    if (!err) {
      cb(JSON.parse(fileContents));
    } else {
      cb([]);
    }
  });
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }
  
  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
