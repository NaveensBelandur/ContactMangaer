const Mongoose = require('mongoose')

const ContactSchema = Mongoose.Schema({
  User:{
    type:Mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:[true,'User Details cannot be empty']
  },
  Name:{
    type:String,
    required:[true,'Name Cannot be empty']
  },
  PhoneNumber:{
    type:Number,
     maxLength:10,
    required:[true,'Phone Number Cannot be empty']
  },
  Details:{
    type:String,
    required:[true,'Details cannot be empty']
  },
  time:{
    type:Date,
    default:Date.now()
  }
  
})

const Contact = Mongoose.model("Contact",ContactSchema)

module.exports = Contact