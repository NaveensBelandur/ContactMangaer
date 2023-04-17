import React from 'react'
import { useEffect } from 'react' 
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { allBlog } from '../Features/UserFeature/BlogSlice'
import AllBlog from './ListAllBlog'
import Spinner from './Spinner'



const List = () =>{
  const Statee = useSelector((state)=>{
    return state.blog
  })
  const Dispatch = useDispatch()
  useEffect(()=>{
  Dispatch(allBlog())
  },[])

  if(Statee.isLoading){
    return <Spinner/>
  }

  return (
    <div>
    {
     Statee.Blog.map((ele)=>{
       const random = Math.round(Math.random()*100)
     return <React.Fragment key={random} >
       <AllBlog title={ele.title}  body={ele.body} authorName={ele.authorName}/>
     </React.Fragment>
     })
    }
    </div>
  )
}
export default List