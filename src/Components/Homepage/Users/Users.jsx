import React from 'react'
import { useLoaderData } from 'react-router-dom'
import User from '../User/User';

const Users = () => {
               const users = useLoaderData(); // for using loader data
  console.log(users);
  return (
    <div className='mt-[140px]'>
    
      <h2 className="text-center text-xl ">Our users:{users.length}</h2>
      <div className="mx-auto users-section gap-5 grid grid-cols-1 md:grid-cols-3 ">
        {
          users.map(user=><User key={user.id} user={user}></User>)
        }
      </div>
    </div>
  )
}

export default Users
