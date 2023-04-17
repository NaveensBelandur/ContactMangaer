import React from 'react'
import {useSelector} from 'react-redux'
import { NavLink } from 'react-router-dom'
import {  userLogout } from '../Features/UserFeature/UserSlice'
import { useDispatch } from 'react-redux'
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const NavBar = () =>{
  const State = useSelector((state)=>{
    return state.user
  })

  const user  = localStorage.getItem('Auth')

  const Dispatch = useDispatch()

  const logout = ()=>{
    toast.error('Logged Out Succesfully',{position:toast.POSITION.TOP_CENTER})
  Dispatch(userLogout())

  window.location.href='/Register'
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  {console.log(State.users)}
    {user  == null ? (
     <>
<ul className="navbar-nav mr-auto">
<li className="nav-item active">
  <NavLink to='/Register' className="nav-link">Register</NavLink>
</li>
<li className="nav-item active">
 <NavLink to='/Login' className='nav-link'>Login</NavLink>
</li>
</ul>
     </>

    ) : (<React.Fragment>

<ul className="navbar-nav mr-auto">
<li className="nav-item active">
 <NavLink  to='/AllBlog' className='nav-link'>All Blogs</NavLink>
</li>
<li className="nav-item active">
 <NavLink to='/createBlog' className='nav-link'>Create Blog</NavLink>
</li>
<li className="nav-item active">
 <NavLink to='/ListBlog' className='nav-link'>List Blog</NavLink>
</li>
<li className="nav-item active">
  <NavLink to='/Register' className='nav-link' onClick={logout}>Logout</NavLink>
</li>

</ul>
    </React.Fragment>

    
  )}

  </div>
</nav>
<ToastContainer/>
    </div>
  )
}


export default NavBar