const express = require('express');
const { signUp } = require('../controllers/user');

// here we create the router
const router = express.Router();


// these are the router functions
router.post("/signIn", (req, res) => {
  
});


// if api gets a signup hit send it to the signUp function in controller
router.post("/signUp", signUp);


   // here we export the router
module.exports = router;