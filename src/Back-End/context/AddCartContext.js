import React, { useState, createContext } from "react";

export const AddCartContext = createContext();

const AddCartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart);

  // Přidání do košíku
  const addToCart = (product) => {
      // Zkontrolujte, zda produkt již není v košíku
      

      // Pokud produkt není v košíku, přidejte ho
     
          setCart((prevCart) => [...prevCart, product]);
          console.log(product.id);
      
  };

  // Odstraní z košíku
  const deleteFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <AddCartContext.Provider value={{ addToCart, deleteFromCart }}>
      {children}
    </AddCartContext.Provider>
  );
};

export default AddCartContextProvider