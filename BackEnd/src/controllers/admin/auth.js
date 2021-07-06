// import the user model
const User =  require('../../models/user');
const jwt = require('jsonwebtoken');

exports.signUp = (req, res) =>{  
// we check if there is any existing user
// so if the email has a match
User.findOne({ email: req.body.email }) 
.exec((error, user) =>{
     // after execution of the matching logic, if we get a user back, that means duplicate email was found
     if(user) return res.status(400).json({
     message: 'Admin Already Exists'
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
     role: 'admin',
     });

     _user.save((error, data) => {
     if(error){
          return res.status(400).json({
          message : error,
          });
     }

     if(data){
          return res.status(201).json({
          message: 'Admin Created Successfully!'
          });
     }
     });

});

};

exports.signIn = (req, res) =>{
     // we check if there is an existing user, if there in, then validate the password and sign in
     User.findOne({email : req.body.email})
     .exec((error, user) =>{
          if(error) return res.status(400).json({
               data: error
          });

          if(user){
               // if pass matches
               if(user.authenticate(req.body.pass) && user.role === 'admin'){
                    // here a user exists with the same email also pass has been authenticated
                    // thus we create e token to manage the user session

                    // with the generated token we have now attached a payload _id
                    // this payload will reveal itself only upon successful verifying of the token
                    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: '2h'});
                    const {
                         _id,
                         firstName,
                         lastName,
                         email,
                         role,
                         fullName
                    } = user;

                    res.status(200).json({
                         token,
                         user:{
                              _id,
                              firstName,
                              lastName,
                              email,
                              role,
                              fullName
                         }
                    });
               }else{
                    // if pass doesn't match
                    return res.status(400).json({
                         message: 'Invalid Password'
                    })
               }
          }else{
               return res.status(400).json({
                    message : "Something Went Wrong"
               })
          }
     });
};

exports.requireSignIn = (req,res, next) => {
     // this function is for verifying the user session with the help of the created sign In session token
     // so for any protected routes, if the user is signed in, only then the user will be able to navigate to that route

     const token = req.headers.authorization.split(" ")[1];

     // this user now has the _id
     const user = jwt.verify(token, process.env.JWT_SECRET);

     // we attach the user with the request so then the request gets out of the middle wear, we can access it in the NEXT event function
     req.user = user;
     next();
     //jwt.decode()
};