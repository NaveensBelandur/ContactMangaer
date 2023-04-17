
import React from 'react'
import {useForm} from 'react-hook-form'
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {NavLink} from 'react-router-dom'
import { userRegister } from '../Features/UserFeature/UserSlice'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {useEffect} from 'react'
import Spinner from './Spinner'
import {FaUserCircle} from 'react-icons/fa'
import {TbPassword} from 'react-icons/tb'
import {MdMail} from 'react-icons/md'
import { Navigate } from 'react-router-dom'

const Register = ()=>{
  
  const statee = useSelector((state)=>{
    return state.user
  })
  
  const Dispatch = useDispatch()
  const Navigate = useNavigate()
  

   
 
  // Here we dont need use state just 
  // use form check if value is correct or it will not pass
  const {register,handleSubmit,formState:{errors},reset,getValues} = useForm()
  const formSubmit = (data)=>{
   const formData = {
     username:data.username,
     password:data.password,
     email:data.email
   }
   console.log(formData)
   Dispatch(userRegister(formData))
   toast.success('Register Succesfully')
   Navigate('/createBlog')
   reset()
     
  }


  if(statee.isLoading){
    return <Spinner/>
  }

  return (
    <div className='container d-flex justify-content-center align-content-center mt-5'>
      <div className='card d-flex justify-content-center px-2 py-5'  style={{width:'60%'}}>
        <div className='card-body'>
         <h3 className='card-title text-center text'> Register</h3>
         <h6 className="card-subtitle mb-2 text-muted text-center">Please register or if you aready signed up please <NavLink to='/Login' style={{textDecoration:'none'}}>Login In</NavLink></h6>
        </div>
        <form className='container' onSubmit={handleSubmit(formSubmit)} >
          <label className='form-label' htmlFor='Username'><FaUserCircle size='30'/> {" "}UserName</label>
          <input type='text' {...register('username',{required:true})} className='form-control' id='Username' name='username' placeholder='Your UserName'/>
          {errors.username && <p className='mt-3 text text-danger'>First Name cannot be empty</p>}
          {/* {errors.username && errors.username.type == 'maxLength' && <p>Username cannot be more than 6</p>} */}
          <div className='py-3'>
            <label className='form-label' htmlFor='password'><TbPassword size='30'/>{" "}Password</label>
            <input type='password' {...register('password' ,{
              required:true,
              // minLength:{
              //   value:6,
              //   message:'Password should be minum 6 words'
              // }
              
            })} className='form-control'  id='password' name='password' placeholder='Your password'/>
            {errors.password &&  errors.password.type == 'required' && <p className='mt-3 text text-danger'>Password cannot be empty</p>}
            {/* {errors.password && <p>{errors.password.message}</p>} */}
          </div>
          <div className='py-2'>
            <label className='form-label' htmlFor='email'><MdMail size='30'/> {" "}Email</label>
            <input type='email'  className='form-control' {...register('email',{
              required:true,
            })} id='email' name='email' placeholder='Your Email'/>
            {errors.email&& <p className='mt-3 text text-danger'>Email cannot be empty</p>}
          </div>
          <div className='mt-4'>
          <button className='btn btn-primary w-100 pe-auto'  type='submit'>Register</button>
          <ToastContainer/>
          </div>
        </form>
       

      </div>

    </div>
  )
}


export default Register