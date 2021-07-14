const express = require('express');
const multer = require('multer');

const { requireSignIn, adminMiddleware } = require('../common-middleware/common-middleware');
const { createProduct } = require('../controllers/product');
const shortID = require('shortid');
const path = require('path');

// const { addCategory, getCategory } = require('../controllers/category');

// here we create the router
const router = express.Router();

const storage = multer.diskStorage({
     destination: function (req, file, cb) {
          cb(null,path.join(path.dirname(__dirname), 'uploads'))
     },
     filename: function (req, file, cb) {
          cb(null, shortID.generate() + '-' + file.originalname );
     }
});

const upload = multer({storage});

router.post('/product/create',requireSignIn, adminMiddleware, upload.array('productPicture'), createProduct);
// router.get('/category/getCategory', getCategory)


// here we export the router
module.exports = router;