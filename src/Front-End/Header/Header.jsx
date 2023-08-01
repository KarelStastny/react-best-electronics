import React from 'react'
import ActioIcon from "./ActionIcon"
import Logo from "./Logo"
import Navbar from "./Navbar"
import {GiHamburgerMenu} from "react-icons/gi"

const Header = () => {
  return <header className='header'>
    <div className='flex justify-between items-center px-10 h-16 '>
      <Navbar/>
      <Logo className=""/>
      <ActioIcon/>
      <GiHamburgerMenu className='md:hidden text-[30px] p-[1px] hover:fill-second rounded-md hover: transition-all duration-100 ease-in-out cursor-pointer'/>
    </div>
  </header>
}

export default Header
