const express = require('express');
const { requireSignIn, adminMiddleware } = require('../common-middleware/common-middleware');

// const { addCategory, getCategory } = require('../controllers/category');
// save it

// here we create the router
const router = express.Router();


router.post('/product/create',requireSignIn, adminMiddleware, addCategory)
router.get('/category/getCategory', getCategory)


// here we export the router
module.exports = router;