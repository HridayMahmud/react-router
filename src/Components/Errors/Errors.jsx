import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

const Errors = () => {
               const error = useRouteError();
             
               const navigate = useNavigate();

  return (
    <div className='justify-center flex items-center flex-col space-y-2'>
     
             
               {
                <h1 className='text-3xl '>{error.status} {error.statusText}</h1>
               }
             


      <button onClick={()=>navigate('/home')} type="button" className='bg-red-500 p-3 rouded-lg'>BackToHomapage</button>
    </div>
  )
}

export default Errors
