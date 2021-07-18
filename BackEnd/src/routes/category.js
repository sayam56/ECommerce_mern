const express = require('express');
const { requireSignIn, adminMiddleware } = require('../common-middleware/common-middleware');

const { addCategory, getCategory } = require('../controllers/category');

// here we create the router
const router = express.Router();
const multer = require('multer');
const shortID = require('shortid');
const path = require('path');

const storage = multer.diskStorage({
     destination: function (req, file, cb) {
          cb(null,path.join(path.dirname(__dirname), 'uploads'))
     },
     filename: function (req, file, cb) {
          cb(null, shortID.generate() + '-' + file.originalname );
     }
});

const upload = multer({storage});


router.post('/category/create',requireSignIn, adminMiddleware, upload.single('categoryImage'), addCategory);
router.get('/category/getCategory', getCategory);

// here we export the router
module.exports = router;