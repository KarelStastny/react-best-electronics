import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Back-End/context/ShopContext";

const MobileNavbar = () => {
  const { isOpenMenu, setIsOpenMenu } = useContext(ShopContext);

  const handleLinkClick = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div className="">
      <nav className="navbar">
        <div>
          <ul className="justify-between  flex flex-col  gap-4 text-xl ">
            <Link
              onClick={handleLinkClick}
              className="hover:bg-second px-2 py-1 transition-all duration-200 ease-in-out hover:text-black font-semibold rounded-md "
              to="/"
            >
              Home
            </Link>

            <Link
              onClick={handleLinkClick}
              className="hover:bg-second px-2 py-1 transition-all duration-200 ease-in-out hover:text-black font-semibold rounded-md "
              to="/about"
            >
              About
            </Link>

            <Link
              onClick={handleLinkClick}
              className="hover:bg-second px-2 py-1 transition-all duration-200 ease-in-out hover:text-black font-semibold rounded-md "
              to="/category"
            >
              Category
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MobileNavbar;
