import React from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'

const PostDetails = () => {
  const navigate = useNavigate();
    const details = useLoaderData();
    const params = useParams();
    const{title,body} = details;
    console.log(params);
  const handleback=()=>{
    navigate('/posts');
  }             
  return (
    <div className='bg-orange-400 w-[320px] font-semibold m-2 shadow-lg shadow-gray-400 text-xl p-6 rounded-lg md:w-[440px] '>
      <h1 className='text-blue-600'>Title: {title}</h1>
      <p>Description: {body}</p>
      <button onClick={handleback} type="button" className='bg-green-800 text-white p-4 rounded-lg'>GoBackToPosts</button>
    </div>
  )
}

export default PostDetails
