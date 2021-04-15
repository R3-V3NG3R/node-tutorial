const Product = require('../models/product');

exports.getAddProducts = (req, res, next)=>{
    res.render('admin/add-product',{docTitle:'Add Product',path:'/admin/add-product'});
};

exports.getEditProduct = (req, res, next)=>{
    res.render('admin/edit-product',{docTitle:'Add Product',path:'/admin/edit-product'});
};

exports.getAdminProducts = (req, res, next)=>{
    Product.fetchAll(products=>{
        res.render('admin/products',{docTitle:"Products List",prods:products,path:'/admin/products',hasProducts:products.length>0});
    });
    
};

exports.postAddProduct = (req, res, next)=>{
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;
    const product = new Product(title,imageUrl,description,price);
    product.save();
    res.redirect('/');
};