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
    const updateQuantity = cart.map((item) => {
      if (item.id === product.id) {
        // navíší množstív
        const updatedItem = { ...item, quantity: item.quantity + 1 };
        // Aktualizuje cenu
        const updateOnePrice = {
          ...updatedItem,
          finalPrice: updatedItem.quantity * updatedItem.price,
        };

        return updateOnePrice;
      } else {
        return item;
      }
    });
    setCart(updateQuantity);
  };

  const minuseQuantity = (product) => {
    const updateQuantity = cart.map((item) => {
      if (item.id === product.id && item.quantity > 1) {
        const updatedItem = { ...item, quantity: item.quantity - 1 };
        const updateOnePrice = {
          ...updatedItem,
          finalPrice: updatedItem.quantity * updatedItem.price,
        };
        return updateOnePrice;
      } else {
        return item;
      }
    });
    setCart(updateQuantity);
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
      }}
    >
      {children}
    </AddCartContext.Provider>
  );
};

export default AddCartContextProvider;
