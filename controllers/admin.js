const Product = require('../models/product');

exports.getAddProducts = (req, res, next)=>{
    res.render('admin/add-product',{docTitle:'Add Product',path:'/admin/add-product'});
};

exports.getEditProduct = (req, res, next)=>{
    res.render('admin/edit-product',{docTitle:'Add Product',path:'/admin/edit-product'});
};

exports.getAdminProducts = (req, res, next)=>{
    res.render('admin/products',{docTitle:'Products List',path:'/admin/products'});
};

exports.postAddProduct = (req, res, next)=>{
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};