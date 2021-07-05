// create the user model
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
     firstName: {
          type: String,
          required: true,
          trim: true,
          min: 3,
          max: 20
     },
     lastName: {
          type: String,
          required: true,
          trim: true,
          min: 3,
          max: 20
     },
     username: {
          type: String,
          required: true,
          trim: true,
          unique: true,
          index: true,
          lowercase: true
     },
     email: {
          type: String,
          required: true,
          trim: true,
          unique: true,
          lowercase: true
     },
     hash_pass: {
          type: String,
          required: true,
     },
     role: {
          type: String,
          enum: ['user', 'admin'],
          default: 'user'
     },
     contactNum: {
          type: String,
          min: 11,
          max: 20,
     },
     profilePic: {
          type: String
     }
}, {
     timestamps: true
});


userSchema.virtual('pass')
.set(function(pass){
     this.hash_pass = bcrypt.hashSync(pass, 10);
});

userSchema.methods = {
     authenticate: function(pass){
          return bcrypt.compareSync(pass, this.hash_pass);
     }
}

// export the model for later use
module.exports = mongoose.model('User', userSchema);