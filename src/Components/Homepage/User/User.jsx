import React from 'react'
import Address from '../Addresses/Addresses';
import Addresses from '../Addresses/Addresses';
import { Link, useNavigate } from 'react-router-dom';

const User = ({user}) => {
               const{phone,username,email,id}= user;
               const navigate = useNavigate();
  const handleuserdetails=()=>{
    navigate(`/users/${id}`);
  }
  return (
    <div className=' border-black bg-transparent mx-3 w-[320px] md:w-[440px] text-center text-xl font-semibold p-6 rounded-2xl shadow-lg shadow-gray-400'>
    
      <h2>UserName: {username}</h2>
      <h2>Mail: {email}</h2>
      <h2>Phone: {phone}</h2>
      {/* <Link className='text-blue-600 font-bold' to={`/users/${user.id}`}>Users Details
      
      </Link> */}
      <button onClick={()=>handleuserdetails(id)} type="button " className='bg-gray-500 p-3 text-lg mt-2 rounded-xl text-white'>SeeUserDetails</button>
    </div>
  )
}

export default User
