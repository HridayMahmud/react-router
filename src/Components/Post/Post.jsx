import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
               const{title,id} = post;
              const navigate = useNavigate();
   const handleDetails=(id)=>{
  
    navigate(`/posts/${id}`);
   }
  return (
    <div className='mt-9 mx-1'>
               <div className="px-4 rounded-xl bg-green-400 gap-3  font-semibold shadow-md border-2 shadow-gray-200 py-3">          
               <h2  className=" text-white font-semibold card-title text-2xl">Title : {title}</h2>
               <button onClick={()=>handleDetails(id)} type='button' className='rounded-lg text-white bg-black p-3'>Show the details</button>
               </div>
    </div>
  )
}

export default Post
