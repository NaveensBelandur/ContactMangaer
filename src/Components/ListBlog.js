import React from 'react'
import { listBlog } from '../Features/UserFeature/BlogSlice'
import  {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Spinner from './Spinner'
import Button from './Button'
import { NavLink } from 'react-router-dom'
import {FaCar} from 'react-icons/fa'


const ListBlog = () =>{


  const Statee = useSelector((state)=>{
    return state.blog
  })

const Dispatch = useDispatch()
  useEffect(()=>{
   Dispatch(listBlog())
  },[])

  if(Statee.isLoading){
    return <Spinner/>
  }

 

  return (
    
    <div className='container mt-5'>
        <h3 className='card-title text-center mt-2 blogtext '><FaCar size='50' color='black'/> Your Blogs</h3>
        {Statee.Blog == 0 ? (<p >You Dont Have Any Blogs <NavLink to='/createblog' >Click Here</NavLink></p>) : (<div>

          {
            Statee.Blog == 0 ? Statee.isLoading :   Statee.Blog.map((ele)=>{
          const random = Math.random(Math.round()*1000)
          return (
            <div>
             <div className="card mt-3  text-dark bg-light mb-3" key={random} style={{maxWidth: "50rem"}}>
             <div className="card-body">
               <h5 className="card-title text-dark text-light">{ele.title}</h5>
               <p className="card-text text-dark text-light">{ele.body}</p>
             </div>
           </div>
            <Button id={ele._id}/>
           </div>      
          )
        })
      }
        </div>
        )}
    </div>
  )
}

export default ListBlog