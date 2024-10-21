import React from 'react'
import { useLoaderData} from 'react-router-dom'
import Post from '../Post/Post';

const Posts = () => {
   const posts = useLoaderData();


  
  return (
    <div className=' card  py-3 gap-4 flex flex-col '>
      <p>Total posts : {posts.length}</p>
      {
        posts.map(post=><Post key={posts.id} post={post}></Post>)
      }
      
    </div>
  )
}

export default Posts
