const express = require('express');
const path = require('path');


const router = express.Router();
const productsController = require('../controllers/admin');


router.get('/add-product',productsController.getAddProducts);

router.post('/add-product',productsController.postAddProduct);

router.get('/products',productsController.getAdminProducts);
router.get('/edit-product',productsController.getEditProduct);


module.exports= router;