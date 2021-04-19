const express = require('express');
const path = require('path');


const router = express.Router();
const adminController = require('../controllers/admin');


router.get('/add-product',adminController.getAddProducts);

router.post('/add-product',adminController.postAddProduct);

router.get('/products',adminController.getAdminProducts);
router.get('/edit-product/:productId',adminController.getEditProduct);
router.post('/edit-product',adminController.postEditProduct);


module.exports= router;