import React from 'react'
import {useForm} from 'react-hook-form'
import { blogCreate } from '../Features/UserFeature/BlogSlice'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Spinner from './Spinner'
import {FaUserNinja} from 'react-icons/fa'


const CreateBlog = ()=>{
  const statee = useSelector((state)=>{
    return state.blog
  })
  const Dispatch = useDispatch()

  const {register,handleSubmit,formState:{errors},reset} = useForm()

  const formSubmit = (data) =>{
    const formData = {
      title:data.title,
      authorName:data.authorName,
      body:data.body
    }
    
    Dispatch(blogCreate(formData))
    toast.success('Blog Saved Successfully')
    reset()
  }

 
  if(statee.isLoading){
    return <Spinner/>
  }
 
  return (
    <div className='container  d-flex justify-content-center align-content-center'>
      <div className='card mt-5 ' style={{width:'45rem'}}>
        <div className='card-body'>
        <h4 className='card-title text-center blogtext'><FaUserNinja size='50'/> Write Your First Blog</h4>
        <form onSubmit={handleSubmit(formSubmit)}>
         <label htmlFor='title' className='form-label'>Title</label>
         <input type='text' id='title' name='title' placeholder='Title Of The Blog' className='form-control' 
         {...register('title',{
           required:true,
           maxLength:{
             value:30,
             message:'Words cannot be more than 30 words'
           }
         })}/>
         {errors.title && errors.title.type == 'required' && <p className='text-danger'>Title Cannot Be Empty</p>}
         {errors.title && <p className='text-danger'>{errors.title.message}</p>}
         <label htmlFor='authorName' className='form-label mt-3'>Author Name</label>
         <input type='text' id='authorName' name='authorName' placeholder='AuthorName' className='form-control' {...register('authorName',{
           required:true,
           minLength:{
             value:3,
             message:'Author Name cannot be less than 3 words'
           },
           
         })}/>
         {errors.authorName && errors.authorName.type == 'required' && <p className='text-danger'>Author Name Cannot be empty</p>}
         {errors.authorName && <p className='text-danger'>{errors.authorName.message}</p>}
         <label htmlFor='body' className='form-label mt-3'>Description</label>
         <textarea className='form-control' htmlFor='body' style={{height:'150px'}} {...register('body',{
           required:true,
           minLength:{
             value:3,
             message:'min length cannot less than 3 words'
           },
           maxLength:{
             value:500,
             message:'max length cannot be more than 500 words'
           }
           
         })}></textarea>
         {errors.body && errors.body.type == 'required' && <p className='text-danger'>Body Cannot Be Empty</p>}
         {errors.body && <p className='text-danger'>{errors.body.message}</p>}
         {errors.body && <p className='text-danger'>{errors.body.message}</p>}
         <button type='submit' id='body' name='body' className='btn btn-success w-100 mt-4'>Submit</button>
        </form>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}
export default CreateBlog