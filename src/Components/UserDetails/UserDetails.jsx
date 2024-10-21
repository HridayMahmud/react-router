import React, { useLayoutEffect } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'

const UserDetails = () => {
               const users_details = useLoaderData();
               const navigate = useNavigate();
               const handleuserdetails=()=>{
                 navigate(`/users`);
               }
  return (
    <div className='flex justify-center'>

      <div className='bg-sky-400 font-semibold w-[440px] p-6 rounded-xl shadow-lg shadow-gray-400'>
      <h1>Name: {users_details.username}</h1>
      <h1>city: {users_details.address.city}</h1>
      <h1>street: {users_details.address.street}</h1>
      <h1>website : {users_details.website}</h1>
      <button onClick={handleuserdetails} type="button " className='bg-gray-500 p-3 text-lg rounded-xl text-white'>GoBackToUsers</button>
      </div>
    </div>
  
  )
}

export default UserDetails
