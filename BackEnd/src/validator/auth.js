const { check, validationResult } = require('express-validator');

exports.validateSignUpRequest = [
     check('firstName')
     .notEmpty()
     .withMessage('First Name Is Required'),
     check('lastName')
     .notEmpty()
     .withMessage('Last Name Is Required'),
     check('email')
     .isEmail()
     .withMessage('Valid Email Is Required'),
     check('pass')
     .isLength({ min : 6 })
     .withMessage('Minimum password length is 6'),
  ];

  exports.validateSignInRequest = [
     check('email')
     .isEmail()
     .withMessage('Valid Email Is Required'),
     check('pass')
     .isLength({ min : 6 })
     .withMessage('Minimum password length is 6'),
  ];

  exports.isRequestValidated = (req, res, next) =>{
       const errors = validationResult(req);

       if( errors.array().length > 0){
            return res.status(400).json({
                 error: errors.array()[0].msg
            })
       }

       next();
  }