import React,{useState, useEffect, createContext} from 'react';
export const ShopContext = createContext()

const ShopContextProvider = ({children}) => {
    const [price, setPrice] = useState("")
 return(
    <ShopContext.Provider value={price}>
        {children}
    </ShopContext.Provider>
 )
}

export default ShopContextProvider