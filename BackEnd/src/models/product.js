// create the category model
const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
     name: {
          type: String,
          required: true,
          trim: true,
     },
     slug: {
          type: String,
          required: true,
          unique: true,
     },
     price: {
          type: Number,
          required: true,
     },
     description: {
          type: String,
          required: true,
          trim: true
     },
     offer: {
          type: Number,
     },
     productImages: [
          {
               img: { type: String }
          } 
     ],
     reviews: [
          {
               userId: mongoose.Schema.Types.ObjectId, ref: 'User',
               review: String
          }
     ],
     category: {
          type: mongoose.Schema.Types.ObjectId, ref: 'Category',
     },
     createdBy: {
          type: mongoose.Schema.Types.ObjectId, ref: 'User',
     },
     updatedAt: Date,
     
     
}, 
{ 
     timestamps: true 
});

// this is where we create the collection and give it a name
module.exports =  mongoose.model('Products', productSchema);