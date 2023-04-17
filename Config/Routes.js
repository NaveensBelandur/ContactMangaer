const Express = require('express')
const Route = Express.Router()
const {Register,Login,Profile} = require('../App/Controller/UserController')
const {CreateContact,ListContact,Idcontact,DeleteContact} = require('../App/Controller/ContactController')
const Auth = require('../App/Middleware/UserMiddleware')

Route.post('/Register',Register)
Route.post('/Login',Login)
Route.get('/User',Auth,Profile)

Route.post('/Create',Auth,CreateContact)
Route.get('/Contact',Auth,ListContact)
Route.get('/Single/:id',Auth,Idcontact)
Route.delete('/Delete/:id',Auth,DeleteContact)



Route.get('/',(req,res)=>{
  res.send('Welcome to the Site' + " " + process.env.PORT)
})


module.exports = Route