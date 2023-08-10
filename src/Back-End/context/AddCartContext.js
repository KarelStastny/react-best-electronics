import React, { useState, createContext } from "react";

export const AddCartContext = createContext();

const AddCartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isProductInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  const addToCart = (product) => {
    if (!isProductInCart(product.id)) {
      setCart((prevCart) => [...prevCart, product]);
      console.log(product.id);
    } else {
      console.log("Produkt je již v košíku.");
    }
  };

  const deleteFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <AddCartContext.Provider value={{ addToCart, deleteFromCart, isProductInCart }}>
      {children}
    </AddCartContext.Provider>
  );
};

export default AddCartContextProvider;
