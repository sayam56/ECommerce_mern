const Product = require('../models/product');
const shortID = require('shortid');
const slugify = require('slugify');

exports.createProduct = (req,res) => {

     // res.status(200).json({
     //      file: req.files,
     //      body: req.body
     // });

     const {
          name,
          price,
          description,
          quantity,
          category,
          createdBy
     } = req.body;

     let productImages = [];

     if(req.files.length > 0){
          productImages = req.files.map(file => {
               return { img : file.filename }
          });
     }

     const product =  new Product({
          name: name,
          slug: slugify(name),
          price,
          description,
          quantity,
          productImages,
          category,
          createdBy: req.user._id
     });

     product.save(((err, product) =>{
          if (err) return res.status(400).json({err});
          if (product){
               res.status(200).json({
                    product
               });
          }
     }));

};