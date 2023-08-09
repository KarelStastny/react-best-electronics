import React, { useState, createContext } from 'react';

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null); // Hlavní kategorie
  const [selectedSubcategory, setSelectedSubcategory] = useState(null)

  return (
    <ShopContext.Provider value={{ selectedCategory, setSelectedCategory, selectedSubcategory, setSelectedSubcategory }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
