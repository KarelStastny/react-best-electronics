import React from 'react'
import ActioIcon from "./ActionIcon"
import Logo from "./Logo"
import Navbar from "./Navbar"

const Header = () => {
  return <header className='header'>
    <div className='flex justify-between items-center px-10 h-16'>
      <Navbar/>
      <Logo/>
      <ActioIcon/>
    </div>
  </header>
}

export default Header
