const User = require('../Model/User')
const Contact = require('../Model/Contact')

const CreateContact = async (req,res) =>{
  try{
    const {Name, PhoneNumber, Details} = req.body

    if(!Name || !PhoneNumber || !Details){
      res.status(400).json('username or phonenumber or details cannot be empty')
      throw new Error('Fileds Cannot be empty')
    }


    const id = req.user.id
    const details = await User.findById(id)
    if(details){
      const phone = await new Contact({
        User:details,
        Name:Name,
        PhoneNumber:PhoneNumber,
        Details:Details
      })
      phone.save()
      res.status(200).json(phone)
    }else{
      res.status(400).json('user Not Found')
    }
  }
  catch(err){
    throw new Error(err.message)
  }
}


const ListContact = async (req,res) =>{
  try{
   const User = req.user
   if(User){
     const list = await Contact.find({User})
     console.log(list)
     res.status(200).json(list)
   }else{
     res.status(400).json('user not found')
   }
  }
  catch(err){
    throw new Error(err.message)
  }
}


const Idcontact = async (req,res) =>{
  try{
   const id = req.params.id
   const user = req.user
   if(user){
     const userid = await Contact.findById(id)
     if(userid){
       res.status(200).json(userid)
     }
   }
  }
  catch(err){
    throw new Error(err.message)
  }
}

const DeleteContact = async (req,res) =>{
  try{
   const user = req.user
   const id = req.params.id
   if(user){
     const destroy = await Contact.findByIdAndDelete(id)
     if(destroy){
       res.status(200).json({
         destroy,
         message:'delete succesfully'
       })
     }else{
       res.status(400).json([])
     }
   }
  }
  catch(err){
    throw new Error(err.message)
  }
}
module.exports = {
  CreateContact,
  ListContact,
  Idcontact,
  DeleteContact
}