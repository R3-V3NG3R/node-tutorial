const express = require('express');
const router = express.Router();

const productsController = require('../controllers/shop');

router.get('/',productsController.getIndex);
router.get('/products',productsController.getProducts);
router.get('/cart',productsController.getCart);
router.get('/checkout',productsController.getCheckout);
router.get('/product-detail',productsController.getCheckout);

module.exports = router;