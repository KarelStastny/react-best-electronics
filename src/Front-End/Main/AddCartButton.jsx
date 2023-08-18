import React, { useContext } from "react";
import { motion } from "framer-motion";
import { MdOutlineShoppingCart, MdDelete } from "react-icons/md";
import { AddCartContext } from "../../Back-End/context/AddCartContext";

const AddCartButton = ({ product }) => {
  const { addToCart, deleteFromCart, isProductInCart } =
    useContext(AddCartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleDeleteToCart = () => {
    deleteFromCart(product.id);
  };

  return (
    <div className="addcart w-full ">
      {isProductInCart(product.id) ? (
        <motion.button
          whileTap={{ scale: 0.75 }}
          onClick={handleDeleteToCart}
          className="flex items-center bg-second py-1 px-2 rounded-lg"
        >
          <MdDelete className="fill-dark text-[15px] sm:text-[20px]" />
        </motion.button>
      ) : (
        <motion.button
          whileTap={{ scale: 0.75 }}
          onClick={handleAddToCart}
          className="flex items-center bg-second py-1 px-2 rounded-lg"
        >
          <span className="mr-2 text-dark f1 font-semibold text-xs sm:text-base">
            Přidat
          </span>
          <MdOutlineShoppingCart className="fill-dark text-[15px] sm:text-[20px]" />
        </motion.button>
      )}
    </div>
  );
};

export default AddCartButton;
