import React from 'react'
import {NavLink} from 'react-router-dom'

const AllBlog = (props) =>{
  return (
    <div className='container mt-5'>
     <div className="jumbotron">
  <h3 className="display-5 text">{props.title}</h3>
  <h3 className="display-4 blogtext">{props.authorName}</h3>
  <hr className="my-4 " />
  <p className='text-justify blog'>{props.body}</p>
  <NavLink className="btn btn-dark btn-md " to='/createBlog'>Create Blog</NavLink>
</div>
    </div>
  ) 
}

export default AllBlog