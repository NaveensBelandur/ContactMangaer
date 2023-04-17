import React from 'react'
import {useForm} from 'react-hook-form'
import { toast,ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {NavLink, useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { userLogin } from '../Features/UserFeature/UserSlice'
import Spinner from './Spinner'
import {TbPassword} from 'react-icons/tb'
import {MdMail} from 'react-icons/md'
import { Navigate } from 'react-router-dom'




const Login = ()=>{
  const Statee = useSelector((state)=>{
    return state.user
  })

  const Dispatch = useDispatch()
  const Navigate = useNavigate()
  const {register,handleSubmit,formState:{errors},reset} = useForm()
  const submit = (data) =>{
   const formData = {
     password:data.password,
     email:data.email
   }
   Dispatch(userLogin(formData))
   toast.success('Login In Succesfully')
   reset()
   Navigate('/createBlog')
   
  }

  if(Statee.isLoading){
    return <Spinner/>
  }



  return (
    <div className='container d-flex justify-content-center align-content-center mt-5'>
      <div className='card d-flex justify-content-center px-2 py-5'  style={{width:'60%'}}>
        <div className='card-body'>
         <h3 className='card-title text-center text' >Login</h3>
         <h6 className="card-subtitle mb-2 text-muted text-center">Please Login  if you have not register please <NavLink to='/Register' style={{textDecoration:'none'}}>Register Here</NavLink></h6>
        </div>
        <form className='container' onSubmit={handleSubmit(submit)} >
          <div className='py-3'>
            <label className='form-label' htmlFor='password'><TbPassword size='30' />{" "}Password</label>
            <input type='password' {...register('password',{
              required:true,

            })} className='form-control' id='password' name='password' placeholder='Your password'/>
            {errors.password && <p className='mt-3 text text-danger'>Password cannot be empty</p>}
          </div>
          <div className='py-2'>
            <label className='form-label' htmlFor='email'><MdMail size='30'/>{" "}Email</label>
            <input type='email' className='form-control' {...register('email',{
              required:true
            })}  id='email' name='email' placeholder='Your Email'/>
            {errors.email && <p className='mt-3 text text-danger'>Email cannot be empty</p>}
          </div>
          <div className='mt-4'>
          <button className='btn btn-primary w-100 pe-auto'  type='submit'>Login</button>
          <ToastContainer/>
          </div>
        </form>
       

      </div>

    </div>
  )
}


export default Login