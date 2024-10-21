import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'

const Homepage = () => {
  return (
    <div>
    
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
     
    </div>
  )
}

export default Homepage
