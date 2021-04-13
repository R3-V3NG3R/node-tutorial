const express = require('express');
const router = express.Router();

router.use('/add-products',(req, res, next)=>{
    console.log('First middle ware');
    res.send('<h1>Products page</h1><form action="products" method="POST"><input type="text" name="title"/><button type="submit">Add</button></form>');

});

router.post('/products',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;