const express = require('express');
const router = express.Router();

router.get('/',(req, res, next)=>{
    console.log('second middle ware');
    res.send("Welcome to Node.js"); 
});

module.exports = router;