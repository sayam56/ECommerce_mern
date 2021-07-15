const express = require('express');
const { requireSignIn, userMiddleware } = require('../common-middleware/common-middleware');

const { addItemToCart } = require('../controllers/cart');

// here we create the router
const router = express.Router();


router.post('/user/cart/add-to-cart', requireSignIn, userMiddleware, addItemToCart);


// here we export the router
module.exports = router; 