import React from 'react'
import Register from './Components/Register'
import Login from './Components/Login'
import {Routes,Route} from 'react-router-dom'
import Errors from './Components/Errors'
import NavBar from './Components/NavBar'
import CreateBlog from './Components/CreateBlog'
import ListBlog from './Components/ListBlog'
import List from './Components/ListAlldata'

const App = () =>{
  return (
    <div>
        <NavBar/>
     <Routes>
       <Route path='/Register' element={<Register/>}/>
       <Route path='/Login' element={<Login/>}/>
       <Route path='/CreateBlog' element={<CreateBlog/>}/>
       <Route path='/ListBlog'   element={<ListBlog/>}/>
       <Route path='//AllBlog' element={<List/>}/>
       <Route path='*' element={<Errors/>}/>
     </Routes>
    </div>
  )
}





export default App