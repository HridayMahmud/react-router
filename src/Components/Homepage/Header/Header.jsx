import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [open,setopen] = useState(false);
  return (
    <div className=''>
      <nav  className=''>
       <div onClick={()=>setopen(!open)} className='md:hidden p-2'>
       {
          open ?<RxCross2 className='text-2xl'></RxCross2> : <RxHamburgerMenu className='text-2xl'></RxHamburgerMenu>
       }
       
       </div>
      <div className={`flex flex-col md:flex-row  duration-1000   ${open ?'top-12':'-top-96'} absolute md:static   mx-auto  justify-around bg-red-300 text-white p-4`}>
                        <Link className='' to='/home'>Home</Link>
                        <Link to='/users'>Users</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/contact'>Contact</Link>
                        <Link to='/blog'>Blog</Link>
                        <Link to='/posts'>Posts</Link>
                        <Link to='/login'>Login</Link> 

      </div>
      </nav>
    </div>
  )
}

export default Header
