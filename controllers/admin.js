const Product = require("../models/product");

exports.getAddProducts = (req, res, next) => {
  res.render("admin/edit-product", {
    docTitle: "Add Product",
    path: "/admin/add-product",
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageUrl = req.body.imageUrl;
  const product = new Product(null,title, imageUrl, description, price);
  product.save();
  res.redirect("/");
};

exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    if(! editMode){
        return res.redirect('/');
    }
    const prodId = req.params.productId;
    Product.findById(prodId,product=>{
        if(!product){
            return res.redirect('/');
        }
      res.render("admin/edit-product", {
        docTitle: "Add Product",
        path: "/admin/edit-product",
        editing: editMode,
        product: product,
      });
    });

};

exports.postEditProduct=(req,res,next)=>{
    const id = req.body.id;
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;
    const product = new Product(id,title, imageUrl, description, price);
    product.save();
    res.redirect("/");
    
};

exports.getAdminProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      docTitle: "Products List",
      prods: products,
      path: "/admin/products",
      hasProducts: products.length > 0,
    });
  });
};
