import React, { createContext,useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const[count,setCount]=useState(0)
  const toggleinc=()=>{
    setCount(count+1)
  }

  
  const toggledec=()=>{
    setCount(count-1)
  }
  return <CartContext.Provider value={{count,toggleinc,toggledec}}>{children}</CartContext.Provider>;
};
