const User = require('../Model/User')
const bcrypt = require('bcryptjs')
const JsonToken = require('jsonwebtoken')

// Register
const Register = async (req,res) =>{
  try{
    const {username,password,email} = req.body


    if(!username || !password || !email){
      res.status(400).json('username or password or email cannot be empty')
      throw new Error('username password email exists')
    }

    const userExist = await User.findOne({email})
    if(userExist){
      res.status(200).json({
        userExist,
        message:'user already exist'
      })
      throw new Error('User Already Exists')
    }

   const salt = await bcrypt.genSalt(10)
   const Hashuser = await bcrypt.hash(password,salt)
   const user = await new User({
     username:username,
     password:Hashuser,
     email:email,
   })
   user.save()
   if(user){
     res.status(200).json({
       username:user.username,
       password:user.password,
       email:user.email,
       token:Token(user._id)
     })
   }else{
     res.status(400).json('error in register')
     throw new Error('Error in register ')
   }

  }
  catch(err){
    throw new Error('error in register')
  }
}


// Login
const Login = async (req,res) =>{
  try{
   const {email,password} = req.body

   if(!email || !password){
      res.status(400).json('email or pasasword cannot be empty')
      throw new Error('email or password cannot be empty')
   }

   const userFind = await User.findOne({email})
   if(userFind){
     const Compare = await bcrypt.compare(password,userFind.password)
     if(Compare){
       res.status(200).json({
         email:userFind.email,
         password:userFind.password,
         token:Token(userFind._id)
       })
     }else{
       res.status(400).json('password doest match')
       throw new Error('password doest match')
     }
   }else{
     res.status(400).json('user not found')
     throw new Error('user not found')
   }



  }
  catch(err){
    throw new Error('Login Error')
  }
}


const Profile = async (req,res) =>{
  try{
   const id = req.user._id
   const user = await User.findById(id)
   if(user){
     res.status(200).json(user)
   }
  }
  catch(err){
    throw new Error(err.message)
  }
}

const Token = (_id)=>{
 return JsonToken.sign({_id},process.env.SECREAT_KEY)
}

module.exports = {
  Register,
  Login,
  Profile
}