import React, { useContext } from "react";
import { AddFavoriteContext } from "../../Back-End/context/AddFavoriteContext";
import { AddCartContext } from "../../Back-End/context/AddCartContext";
import { motion } from "framer-motion";
import { MdFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";

import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Back-End/context/ShopContext";

const ActionIcon = () => {
  const { FavoriteLength } = useContext(AddFavoriteContext);
  const { cartLength } = useContext(AddCartContext);
  const { isAdminMenuOpen, setIsAdminMenuOpen, setIsOpenMenu } =
    useContext(ShopContext);

  const clickAdminMenu = () => {
    setIsAdminMenuOpen(!isAdminMenuOpen);
  };

  const linkMenu = () => {
    setIsAdminMenuOpen(!isAdminMenuOpen);
    setIsOpenMenu(false);
  };

  const favoriteMenu = () => {
    setIsOpenMenu(false);
  };

  return (
    <div className="actionIcon ">
      <div className=" gap-16 flex items-center justify-center md:gap-4 ">
        {/* Oblíbené položky */}
        <Link to={"/favorite"} onClick={favoriteMenu} className="relative">
          <motion.div whileTap={{ scale: 0.75 }}>
            <MdFavoriteBorder className="text-[35px] p-[1px] hover:fill-red-600 rounded-md hover: transition-all duration-100 ease-in-out cursor-pointer" />

            {/* Zobrazení položek */}
            <div className="absolute -top-1 -right-1 bg-red-600 w-4 h-4 flex items-center justify-center rounded-full">
              <span className="text-xs text-lightWhite font-semibold">
                {FavoriteLength}
              </span>
            </div>
          </motion.div>
        </Link>

        {/* Košík */}
        <Link to={"/cart"} onClick={favoriteMenu} className="relative">
          <motion.div whileTap={{ scale: 0.75 }}>
            <MdOutlineShoppingCart className="text-[35px] p-[1px] hover:fill-second rounded-md hover: transition-all duration-100 ease-in-out cursor-pointer" />

            {/* Zobrazení položek */}
            <div className="absolute -top-1 -right-1 bg-second w-4 h-4 flex items-center justify-center rounded-full">
              <span className="text-xs text-black font-semibold">
                {cartLength}
              </span>
            </div>
          </motion.div>
        </Link>

        <div className="relative">
          <motion.div whileTap={{ scale: 0.75 }}>
            <BiUserCircle
              onClick={clickAdminMenu}
              className="text-[35px] p-[1px] hover:fill-blue-500 rounded-md hover: transition-all duration-100 ease-in-out cursor-pointer "
            />
          </motion.div>

          {isAdminMenuOpen === true && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className=" bg-dark p-2 absolute top-100 right-0 mt-4 w-[200px] rounded-md z-30"
            >
              <ul className="flex flex-col">
                <Link
                  onClick={linkMenu}
                  className="hover:bg-second px-2 py-1 transition-all duration-200 ease-in-out hover:text-black font-semibold rounded-md "
                  to="/newProduct"
                >
                  NewProduct
                </Link>

                <Link
                  onClick={linkMenu}
                  className="hover:bg-second px-2 py-1 transition-all duration-200 ease-in-out hover:text-black font-semibold rounded-md "
                  to="/admin"
                >
                  Admin
                </Link>

                <Link
                  onClick={linkMenu}
                  className="hover:bg-second px-2 py-1 transition-all duration-200 ease-in-out hover:text-black font-semibold rounded-md "
                  to="/adminOrder"
                >
                  Přijaté objednávky
                </Link>
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActionIcon;
