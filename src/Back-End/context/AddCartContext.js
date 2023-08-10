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
      
    } else {
      console.log("Produkt je již v košíku.");
    }
  };

  const deleteFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  console.log(cart);
  return (
    <AddCartContext.Provider value={{ addToCart, deleteFromCart, isProductInCart }}>
      {children}
    </AddCartContext.Provider>
  );
};

export default AddCartContextProvider;
