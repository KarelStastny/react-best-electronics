import React, { useState, createContext } from "react";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isAdminMenuOpen, setIsAdminMenuOpen] = useState(false);

  // Funkce pro reset filteru
  const resetFilterProducts = () => {
    setSelectedCategory(null);
    setSelectedSubcategory(null);
  };

  return (
    <ShopContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        selectedSubcategory,
        setSelectedSubcategory,
        resetFilterProducts,
        isOpenMenu,
        setIsOpenMenu,
        isAdminMenuOpen,
        setIsAdminMenuOpen,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
