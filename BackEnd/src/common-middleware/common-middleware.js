const jwt = require('jsonwebtoken');

exports.requireSignIn = (req, res, next) => {
  if (req.headers.authorization) {
    // this function is for verifying the user session with the help of the created sign In session token
    // so for any protected routes, if the user is signed in, only then the user will be able to navigate to that route

    const token = req.headers.authorization.split(" ")[1];

    // this user now has the _id
    const user = jwt.verify(token, process.env.JWT_SECRET);

    // we attach the user with the request so then the request gets out of the middle wear, we can access it in the NEXT event function
    req.user = user;
    
    //jwt.decode()
  }else{
     return res.status(500).json({message: 'Auth Required'})
  }

  next();

  
};

exports.userMiddleware = (req, res, next) => {
     if (req.user.role !== "user") {
          return res.status(400).json({ message: "User Access Denied" });
        }
        next();
};

exports.adminMiddleware = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(400).json({ message: "Admin Access Required" });
  }
  next();
};
