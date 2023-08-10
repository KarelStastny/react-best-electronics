import React, { useContext } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { AddFavoriteContext } from "../../Back-End/context/AddFavoriteContext";

const AddFavoriteButton = ({ product }) => {
  const { addToFavorite, deleteFromFavorite, isProductInFavorite } = useContext(AddFavoriteContext);

  const handleAddToFavorite = () => {
    addToFavorite(product);
  };

  const handleDeleteToFavorite = () => {
    deleteFromFavorite(product.id);
  };

  return (
    <div className="addcart w-full">
      {isProductInFavorite(product.id) ? (
        <MdFavorite onClick={handleDeleteToFavorite} className="text-[20px] fill-red-600 cursor-pointer" />
      ) : (
        <MdFavoriteBorder onClick={handleAddToFavorite} className="text-[20px] cursor-pointer" />
      )}
    </div>
  );
};

export default AddFavoriteButton;
