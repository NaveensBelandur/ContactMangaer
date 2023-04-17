import React from 'react'
import {useDispatch} from 'react-redux'
import { deleteBlog } from '../Features/UserFeature/BlogSlice'
import {FaTrash} from 'react-icons/fa'


const Button = (props)=>{
  const Dispatch = useDispatch()

  const deletebtn = ()=>{
    Dispatch(deleteBlog(props.id))
    window.location.reload()
  }
  return (
    <button className='btn btn-danger btn-md py-2' onClick={deletebtn} > <FaTrash size='20' color='white'/> Delete Blog</button>
  )
}

export default Button