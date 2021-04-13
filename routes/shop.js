const express = require('express');
const router = express.Router();

router.use('/',(req, res, next)=>{
    console.log('second middle ware');
    res.send("Welcome to Node.js"); 
});

module.exports = router;