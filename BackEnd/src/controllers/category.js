const slugify = require ('slugify');
const Category = require('../models/category');

function createCategories(categories, parentID = null){
 
     const categoryList = [];
     let category;
     if(parentID == null){
          category = categories.filter(cat => cat.parentID == undefined)
     }else{
          category = categories.filter(cat => cat.parentId == parentID)
     }

     for (let cate of category){
          categoryList.push({
               _id: cate._id,
               name: cate.name,
               slug: cate.slug,
               children: createCategories(categories, cate._id)
          });
     }

     return categoryList;
}

exports.addCategory = (req,res) => {

     const categoryObject = {
          name: req.body.name,
          slug: slugify(req.body.name),
     }

     if(req.file){
          categoryObject.categoryImage = process.env.API+ '/public/' + req.file.filename;
     }

     if(req.body.parentID){
          categoryObject.parentID = req.body.parentID;
     }

     const cat = new Category(categoryObject);
     cat.save((error, category) => {
          if (error) return res.status(400).json({error});
          if (category) {
               return res.status(201).json({category});
          }
     })

}

exports.getCategory = (req,res) => {

     Category.find({})
     .exec((error, categories) => {
          if(error) return res.status(400).json({ error })

          if(categories){
               const categoryList = createCategories(categories);
               return res.status(200).json({ categoryList });
          }
     });

}