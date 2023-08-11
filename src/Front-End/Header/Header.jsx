import React, { useContext } from "react";
import ActionIcon from "./ActionIcon";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNavbar from "./MobileNavbar";
import { ShopContext } from '../../Back-End/context/ShopContext';

const Header = () => {
  const { setIsOpenMenu, isOpenMenu } = useContext(ShopContext);

  const handleHamburgerClick = () => {
    setIsOpenMenu(!isOpenMenu);
    
  };

  return (
    <header className="header ">
      <div className="flex justify-between items-center px-10 h-16 relative  ">
        <Navbar />
        <Logo className="" />
        <div className="hidden md:flex"><ActionIcon /></div>
        
        <div className="md:hidden ">
          <GiHamburgerMenu
            onClick={handleHamburgerClick}
            className="text-[30px] p-[1px] hover:fill-second rounded-md transition-all duration-100 ease-in-out cursor-pointer"
          />
          {isOpenMenu && (
            <div className="bg-dark absolute mt-2 rounded-md left-0 p-2 z-20 w-full h-screen">
              <div className="flex flex-col items-center justify-center">
              <MobileNavbar />
              <div className="mt-8 w-full border">
              <ActionIcon />
              </div>
              
              
              </div>
       
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
