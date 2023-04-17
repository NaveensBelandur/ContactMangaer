import {createSlice} from '@reduxjs/toolkit'
import {createAsyncThunk} from '@reduxjs/toolkit'
import Axios from 'axios'



const intialBlogState =  {
  Blog:[],
  isError:false,
  isLoading:false
}



export const blogCreate = createAsyncThunk('blog/blogCreate',async (blogpost,thunkAPI)=>{
let  token = localStorage.getItem('Auth')
const n =JSON.parse(token)
const {Token} = n
const blog = await Axios.post('http://localhost:4000/create',blogpost,{
  headers: {
    Authorization : `Bearer ${Token}`
    }
})
if(blog){
 return blog.data
}

})


export const listBlog = createAsyncThunk('blog/blogList',async ()=>{
  const token = localStorage.getItem("Auth")
  const n = JSON.parse(token)
  const {Token} = n
  const getBlog =  await Axios.get('http://localhost:4000/list',{
    headers:{
      Authorization:`Bearer ${Token}`
    }
  })
  if(getBlog){
    return getBlog.data
  }
  
})

export const deleteBlog = createAsyncThunk('blog/blogDelete',async(id)=>{
const token = localStorage.getItem('Auth')
const n = JSON.parse(token)
const {Token} = n
const blogde = await Axios.delete(`http://localhost:4000/delete/${id}`,{
  headers:{
    Authorization:`Bearer ${Token}`
  }
})
if(blogde){
  return blogde.data
}
})

export const allBlog = createAsyncThunk('blog/blogall',async ()=>{
  const token = localStorage.getItem('Auth')
const n = JSON.parse(token)
const {Token} = n
 const all = await Axios.get('http://localhost:4000/getall',{
   headers:{
     Authorization:`Bearer ${Token}`
   }
 })
 if(all){
   return all.data
 }
})

const blogSlice = createSlice({
  name:'Blog',
  initialState:intialBlogState,
  reducers:{
    reset:(state)=>{
      state.Blog = []
      state.isError = false
      state.isLoading = false
    }
  },
  extraReducers:(builders)=>{
    builders.addCase(blogCreate.pending,(state)=>{
      state.isLoading = true
    })
    builders.addCase(blogCreate.fulfilled,(state,action)=>{
      console.log(action.payload,'action')
      state.isLoading = false
      state.isError = false
      state.Blog = action.payload
    })
    builders.addCase(blogCreate.rejected,(state,action)=>{
      state.isLoading = false
      state.isError = false
      state.Blog = ['error']
    })
    builders.addCase(listBlog.pending,(state)=>{
      state.isLoading = true
    })
    builders.addCase(listBlog.fulfilled,(state,action)=>{
      state.isLoading = false
      state.isError = false
      state.Blog = action.payload
    })
    builders.addCase(listBlog.rejected,(state)=>{
      state.isLoading = false
      state.isError = false
      state.Blog = []
    })
    builders.addCase(deleteBlog.pending,(state)=>{
      state.isLoading = true
    })
    builders.addCase(deleteBlog.fulfilled,(state,action)=>{
      state.isLoading = false
      state.isError = false
      state.Blog = state.Blog.filter((ele)=>{
        return ele._id !== action.payload.id
      })
    })
    builders.addCase(deleteBlog.rejected,(state,action)=>{
      state.isLoading = false
      state.isError = true
      state.Blog = []
    })
    builders.addCase(allBlog.pending,(state,action)=>{
      state.isLoading = true
    })
    builders.addCase(allBlog.fulfilled,(state,action)=>{
      state.isLoading = false
      console.log(action.payload)
      state.Blog = action.payload
      state.Error= false
    })
    builders.addCase(allBlog.rejected,(state)=>{
      state.isLoading = false
      state.Blog = []
    })
  }
  
})

export default blogSlice.reducer