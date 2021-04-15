const { reset } = require('nodemon');
const Product = require('../models/product');
const Cart = require('../models/cart');

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

exports.getProduct = (req, res, next)=>{
    const prodId = req.params.productId;
    Product.findById(prodId,product=>{
        res.render('shop/product-detail', {product:product,docTitle:product.title,path:'/products'});
    });
};


exports.getCart = (req, res, next)=>{
    res.render('shop/cart',{docTitle:'Cart',path:'/cart'});
};

exports.postCart = (req, res, next)=>{
    const prodId = req.body.productId;
    Product.findById(prodId,(product)=>{
        Cart.addProduct(prodId, product.price);
    });
    res.redirect('/cart');
};


exports.getOrders = (req, res, next)=>{
    res.render('shop/orders',{docTitle:'Orders',path:'/orders'});
};

exports.getCheckout = (req, res, next)=>{
    res.render('shop/checkout',{docTitle:'Checkout',path:'/checkout'});
};

exports.getProductDetails = (req, res, next)=>{
    res.render('shop/product-detail',{docTitle:'Product Details',path:'/product-detail'});
};