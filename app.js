const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
const sequelize = require("./util/database");

const Product = require("./models/product");
const User = require("./models/user");
const Cart = require("./models/cart");
const CartItem = require("./models/cart-item");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findAll({
    where: { id: 1 },
  })
    .then(([user]) => {
      req.user = user;
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

sequelize
  // .sync({force:true}) 
  .sync()
  .then((res) => {
    return User.findAll({
      where: {
        id: 1,
      },
    });
  })
  .then((user) => {
    if (user.length == 08) {
      return User.create({
        name: "Vamsi",
        email: "vamsikrishnakdml@gmail.com",
      });
    }
    return user;
  })
  // .then((user) => {
  //   return user.add();
    
  //   // return user;
    
  // })
  .then(user=>{
    console.log("Server Created.");
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
