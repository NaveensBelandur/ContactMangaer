import {configureStore} from '@reduxjs/toolkit'
import UserReducer from '../UserFeature/UserSlice'
import BlogReducer from '../UserFeature/BlogSlice'



const Store = configureStore({
  reducer:{
    user:UserReducer,
    blog:BlogReducer
  }
})



export default Store