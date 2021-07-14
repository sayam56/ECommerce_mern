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
     quantity: {
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
               userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User' },
               review: String
          }
     ],
     category: {
          type: mongoose.Schema.Types.ObjectId, ref: 'Category',
          required: true,
     },
     createdBy: {
          type: mongoose.Schema.Types.ObjectId, ref: 'User',
          required: true,
     },
     updatedAt: Date,
     
     
}, 
{ 
     timestamps: true 
});

// this is where we create the collection and give it a name
module.exports =  mongoose.model('Products', productSchema);