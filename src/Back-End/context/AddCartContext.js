import React, { useState, createContext } from "react";

export const AddCartContext = createContext();

const AddCartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isProductInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  console.log(cart);

  const addToCart = (product) => {
    if (!isProductInCart(product.id)) {
      const updateProduct = {
        ...product,
        quantity: 1,
        finalPrice: product.price,
      };
      setCart((prevCart) => [...prevCart, updateProduct]);
    } else {
      console.log("Produkt je již v košíku.");
    }
  };

  const deleteFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Aktualizuje košík
  const pluseQuantity = (product) => {
    const updateQuantity = cart.map((item) =>
      // pokud se id z databáze a na které bylo klinuto rovnají, vem item a zvětš jeho množství pokud ne ponech ho
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updateQuantity);
   
  };

  const minuseQuantity = (product) => {
    const updateQuantity = cart.map((item) =>
      item.id === product.id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updateQuantity);
   
  };

  // Aktulizace ceny u jednotlivých produktů
  const updateProductPrice = (product) => {
    const updateOnePrice = cart.map((item) => {
      if (item.id === product.id) {
        const updatedItem = { ...item, finalPrice: item.quantity * item.price };
        console.log(updatedItem.quantity, updatedItem.price, updatedItem.finalPrice);
        return updatedItem;
      } else {
        return item;
      }
    });
  
    console.log(updateOnePrice);
    setCart(updateOnePrice);
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
        pluseQuantity,
        minuseQuantity,
        updateProductPrice,
      }}
    >
      {children}
    </AddCartContext.Provider>
  );
};

export default AddCartContextProvider;
