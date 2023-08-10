import React, { useState, createContext } from "react";

export const AddFavoriteContext = createContext();

const AddFavoriteContextProvider = ({ children }) => {
  const [favorite, setFavorite] = useState([]);

  const isProductInFavorite = (productId) => {
    return favorite.some((item) => item.id === productId);
  };

  const addToFavorite = (product) => {
    if (!isProductInFavorite(product.id)) {
      setFavorite((prevFavorite) => [...prevFavorite, product]);
      
    } else {
      console.log("Produkt je již v oblíbených.");
    }
  };

  const deleteFromFavorite = (productId) => {
    setFavorite((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

//   Délka pole
const FavoriteLength = favorite.length

// Prázdné pole

const emptyFavorite = () => {
    if(FavoriteLength < 1){
        return true
    }else{
        return false
    }
}







  return (
    <AddFavoriteContext.Provider value={{ addToFavorite, deleteFromFavorite, isProductInFavorite, FavoriteLength, emptyFavorite }}>
      {children}
    </AddFavoriteContext.Provider>
  );
};

export default AddFavoriteContextProvider;
