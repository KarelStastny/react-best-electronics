import React from "react";

import {
  MdFavoriteBorder,
  MdFavorite,
  MdOutlineShoppingCart,
} from "react-icons/md";

import { BiUserCircle } from "react-icons/bi";

const ActionIcon = () => {
  return <div className="actionIcon">
    <div className=" gap-3 hidden md:flex"> 
      <MdFavoriteBorder className="text-[35px] p-[1px] hover:fill-second rounded-md hover: transition-all duration-100 ease-in-out cursor-pointer"/>
      <MdOutlineShoppingCart className="text-[35px] p-[1px] hover:fill-second rounded-md hover: transition-all duration-100 ease-in-out cursor-pointer"/>
      <BiUserCircle className="text-[35px] p-[1px] hover:fill-second rounded-md hover: transition-all duration-100 ease-in-out cursor-pointer"/>
    </div>
  </div>;
};

export default ActionIcon;
