const Cart = require('../models/cart');

exports.addItemToCart = (req, res) =>{

     Cart.findOne({user: req.user._id})
     .exec((error, cart) =>{
          if(error) return res.status(400).json({ error });
          if(cart){
               //if cart already exists then update cart by quantity
               /* saving again, work load too much */

               // check if that item exists
               const product = req.body.cartItems.product;
               const existentItem = cart.cartItems.find(c => c.product == product);

               let condition, action;

               if(existentItem){
                    condition = {"user": req.user._id, "cartItems.product": product};
                    update = {
                         // Comment to save
                         "$set" : {
                              "cartItems.$": {
                                   ...req.body.cartItems,
                                   quantity: parseFloat(existentItem.quantity) + parseFloat(req.body.cartItems.quantity),
                              }
                         }
                    };
               }else{
                    condition = {user: req.user._id};
                    update = {
                         "$push" : {
                              "cartItems": req.body.cartItems
                         }
                    };
               }

               Cart.findOneAndUpdate(condition, update)
               .exec((er, _cart) => {
                    if(er) return res.status(400).json({ er });
                    if(_cart){
                         return res.status(200).json({ _cart })
                    }
               });
          }else{
               //if cart doesn't exist then create a new cart
               const cart = new Cart({
                    user: req.user._id,
                    cartItems: [req.body.cartItems]
               });
          
               cart.save((err, cart) => {
                    if(err) return res.status(400).json({ err });
                    if(cart){
                         return res.status(200).json({ cart })
                    }
               });
          }
     });


};