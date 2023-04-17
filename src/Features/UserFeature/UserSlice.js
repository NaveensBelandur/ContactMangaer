import {createSlice} from '@reduxjs/toolkit'
import {createAsyncThunk} from '@reduxjs/toolkit'
import Axios from 'axios'


const intialuserState = {
  isLoading:false,
  users:[],
  isError:false
}

export const userRegister = createAsyncThunk('user/userRegister',async (user)=>{
 const register = await Axios.post('http://localhost:4000/Register',user)
  if(register){
    localStorage.setItem('Auth',JSON.stringify(register.data))
  return register.data
  }
})



export const userLogin = createAsyncThunk('user/userLogin',async (user)=>{
  const Login = await Axios.post('http://localhost:4000/Login',user)
  if(Login){
    localStorage.setItem('Auth',JSON.stringify(Login.data))
    return Login.data
  }
})

export const userLogout = createAsyncThunk('user/logout',()=>{
  return localStorage.removeItem('Auth')
})
const userslice = createSlice({
  name:'User',
  initialState:intialuserState,
  reducers:{
    reset:(state)=>{
      state.isLoading = false
      state.isError = false
      state.users = []
    }
  },
  extraReducers:(builders)=>{
    builders.addCase(userRegister.pending,(state)=>{
       state.isLoading = true
    })
    builders.addCase(userRegister.fulfilled,(state,action)=>{
      state.isLoading = false
      state.users = action.payload
      state.isError = false
    })
    builders.addCase(userRegister.rejected,(state)=>{
      state.isLoading = false
      state.users = []
      state.isError = true
    })
    builders.addCase(userLogin.pending,(state)=>{
      state.isLoading = true
    })
    builders.addCase(userLogin.fulfilled,(state,action)=>{
      console.log(action.payload,'action login')
      state.isLoading = false
      state.users = action.payload
      state.isError = false
    })
    builders.addCase(userLogin.rejected,(state,action)=>{
      state.isLoading = false
      state.user = []
      state.isError = action.payload
    })
  }
  
})

export default userslice.reducer
