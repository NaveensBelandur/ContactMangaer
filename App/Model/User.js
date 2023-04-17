const Mongoose = require('mongoose')

const UserSchema = Mongoose.Schema({
  username:{
    type:String,
    required:[true,'Username cannot be empty']
  },
  password:{
    type:String,
    required:[true,'Password cannot be empty']
  },
  email:{
    type:String,
    required:[true,'Email cannot be empty']
  }
})

const User = Mongoose.model('User',UserSchema)

module.exports = User