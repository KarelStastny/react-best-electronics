import React, { useState, createContext } from "react";

export const AddCartContext = createContext();

const AddCartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isProductInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  const addToCart = (product) => {
    if (!isProductInCart(product.id)) {
      const updateProduct = {
        ...product,
        quantity:1
      }
      setCart((prevCart) => [...prevCart, updateProduct ]);
    } else {
      console.log("Produkt je již v košíku.");
    }
  };

  const deleteFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  //   Délka pole
  const cartLength = cart.length;

  // Prázdné pole

  const emptyCart = () => {
    if (cartLength < 1) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <AddCartContext.Provider
      value={{
        addToCart,
        deleteFromCart,
        isProductInCart,
        cartLength,
        emptyCart,
        cart,
      }}
    >
      {children}
    </AddCartContext.Provider>
  );
};

export default AddCartContextProvider;
