const express = require('express');
const { signUp, signIn, requireSignIn } = require('../../controllers/admin/auth');
const { validateSignUpRequest, isRequestValidated, validateSignInRequest } = require('../../validator/auth');

// here we create the router
const router = express.Router();


// these are the router functions
router.post("/admin/signIn",validateSignInRequest, isRequestValidated, signIn);


// if api gets a signup hit send it to the signUp function in controller
router.post("/admin/signUp",validateSignUpRequest, isRequestValidated, signUp);


// router.post("/profile", requireSignIn, (req,res)=>{
//    return res.status(200).json({
//       message: 'profile'
//    });
// });


   // here we export the router
module.exports = router;