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

exports.getIndex = (req, res, next)=>{
    Product.fetchAll(products=>{
        res.render('shop/index',{docTitle:"Shop",prods:products,path:'/',hasProducts:products.length>0});
    });
    
};

exports.getProducts = (req, res, next)=>{
    Product.fetchAll(products=>{
        res.render('shop/product-list',{docTitle:"Products List",prods:products,path:'/products',hasProducts:products.length>0});
    });
    
};


exports.getCart = (req, res, next)=>{
    res.render('shop/cart',{docTitle:'Cart',path:'/cart'});
};

exports.getCheckout = (req, res, next)=>{
    res.render('shop/checkout',{docTitle:'Checkout',path:'/checkout'});
};

exports.getCheckout = (req, res, next)=>{
    res.render('shop/product-detail',{docTitle:'Product Details',path:'/product-detail'});
};