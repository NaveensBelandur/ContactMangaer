import React from 'react'
import {ClimbingBoxLoader} from 'react-spinners'
const Spinner = () =>{
  return (
    <div className='container mt-5'>
     <ClimbingBoxLoader color='black' display='flex' size={30} cssOverride={overide} />
     <h2 className='display-4' style={loading}>Loading...</h2>
    </div>
  )
}


const overide  ={
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  marginTop:'150px',
}

const loading = {
  marginTop:'100px',
  marginLeft:'430px'

}


export default Spinner