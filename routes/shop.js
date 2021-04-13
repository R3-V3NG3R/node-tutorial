const express = require('express');
const router = express.Router();

const path = require('path');
const adminData = require('./admin');

router.get('/',(req, res, next)=>{
    const products = adminData.products;
    res.render('shop',{docTitle:"Shop",prods:products});
});

module.exports = router;