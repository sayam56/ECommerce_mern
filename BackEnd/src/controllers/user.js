// import the user model
const User =  require('../models/user');


exports.signUp = (req, res) =>{  
// we check if there is any existing user
// so if the email has a match
User.findOne({ email: req.body.email }) 
.exec((error, user) =>{
     // after execution of the matching logic, if we get a user back, that means duplicate email was found
     if(user) return res.status(400).json({
     message: 'User Already Exists'
     });

     // if not then extract the following fields from the req body
     const {
     firstName,
     lastName,
     email,
     pass
     } = req.body;

     // create a new user (protected) from the deconstructed data
     const _user = new User({
     firstName,
     lastName,
     email,
     pass,
     username: Math.random().toString(),
     });

     _user.save((error, data) => {
     if(error){
          return res.status(400).json({
          message : error,
          });
     }

     if(data){
          return res.status(201).json({
          message: 'User Created Successfully!'
          });
     }
     });

});

};