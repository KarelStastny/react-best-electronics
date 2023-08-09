import React, { useState, createContext } from 'react';

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null); // Hlavní kategorie
  const [selectedSubcategory, setSelectedSubcategory] = useState(null)


  // Funkce pro reset filteru
  const resetFilterProducts = () => {
    setSelectedCategory(null);
    setSelectedSubcategory(null);
  };

  return (
    <ShopContext.Provider value={{ selectedCategory, setSelectedCategory, selectedSubcategory, setSelectedSubcategory, resetFilterProducts }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
