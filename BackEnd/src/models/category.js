// create the category model
const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
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
     categoryImage: {
          type: String,
     },
     parentID: {
          type : String
     }
}, 
{ 
     timestamps: true 
});

// this is where we create the collection and give it a name
module.exports =  mongoose.model('Category', categorySchema);