import React, { useContext } from "react";
import { AddFavoriteContext } from "../../Back-End/context/AddFavoriteContext";
import {
  MdFavoriteBorder,
  MdFavorite,
  MdOutlineShoppingCart,
} from "react-icons/md";

import { BiUserCircle } from "react-icons/bi";

const ActionIcon = () => {
  const { FavoriteLength, emptyFavorite } = useContext(AddFavoriteContext);

  return (
    <div className="actionIcon">
      <div className=" gap-3 hidden md:flex">

        {/* Oblíbené položky */}
        <div className="relative">
          <MdFavoriteBorder className="text-[35px] p-[1px] hover:fill-red-600 rounded-md hover: transition-all duration-100 ease-in-out cursor-pointer" />
          {/* Zobrazení položek */}

          
          <div className="absolute -top-1 -right-1 bg-red-600 w-4 h-4 flex items-center justify-center rounded-full">
            <span className="text-xs text-lightWhite font-semibold">{FavoriteLength}</span>
          </div>
        </div>

        {/* Košík */}
        <div className="relative">
          <MdOutlineShoppingCart className="text-[35px] p-[1px] hover:fill-second rounded-md hover: transition-all duration-100 ease-in-out cursor-pointer" />
          <div className="absolute -top-1 -right-1 bg-second w-4 h-4 flex items-center justify-center rounded-full">
            <span className="text-xs text-black font-semibold">{FavoriteLength}</span>
          </div>
        </div>

      
        <BiUserCircle className="text-[35px] p-[1px] hover:fill-second rounded-md hover: transition-all duration-100 ease-in-out cursor-pointer" />
      </div>
    </div>
  );
};

export default ActionIcon;


    //  {/* Zobrazení položek */}
    //  {emptyFavorite === false &&
    //   <div className="absolute -top-1 -right-1 bg-red-600 w-4 h-4 flex items-center justify-center rounded-full">
    //   <span className="text-xs text-lightWhite font-semibold">{FavoriteLength}</span>
    // </div>
    //  }