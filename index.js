const express = require('express')
const App = express()
const env = require('dotenv').config()
const setupdb = require('./Config/Database')
const Route = require('./Config/Routes')
const cors = require('cors')


setupdb()
App.use(cors())
App.use(express.json())
App.use('/',Route)
App.listen(process.env.PORT,function(){
  console.log(`Connected to the port ${process.env.PORT}`)
})



