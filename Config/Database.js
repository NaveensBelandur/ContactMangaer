const mongoose = require('mongoose')

const SetUpDb = async() =>{
  try{
 await mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DATABASENAME}`)
   console.log('Connected to the Database')
  }
  catch(err){
    console.log(err)
    throw new Error('Database error')
  }
 
}

module.exports = SetUpDb