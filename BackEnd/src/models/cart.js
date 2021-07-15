// create the category model
const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
     user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
     cartItems: [
          {
               product: { type: mongoose.Schema.Types.ObjectId, ref: 'Products', required: true },
               quantity: { type: Number, default: 1},
               price: {type: Number, required: true }
          }
     ],
}, 
{ 
     timestamps: true 
});

// this is where we create the collection and give it a name
module.exports =  mongoose.model('Cart', cartSchema);