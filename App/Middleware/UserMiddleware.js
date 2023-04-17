const User = require('../Model/User')
const jsonToken = require('jsonwebtoken')

const Auth = async (req,res,next)=>{
  try{
   let token 

   if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
     token=req.headers.authorization.split(' ')[1]
     const verify = jsonToken.verify(token,process.env.SECREAT_KEY)

     
    
     console.log(token,'backend token')
     const userDetails = await User.findById(verify._id)
     if(userDetails){
       res.status(200)
       req.user = userDetails
       next()
     }else{
       res.status(400).json('token not found')
     }
   }
  }
  catch(err){
    res.status(400).json('Token Not Found')
    throw new Error(err.message)
  }
}

module.exports = Auth