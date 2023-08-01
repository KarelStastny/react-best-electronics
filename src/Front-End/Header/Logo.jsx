import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className='logo'>
      <Link to={"/"}>
      <h1 className='text-2xl lg:text-4xl italic lg:border-b-4 border-b-2  border-second'>Best <span className='font-semibold  text-second '>Electronic</span></h1>
      </Link>
     
       
    </div>
  )
}

export default Logo
