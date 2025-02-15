import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const[isAuth,setAuth]=useState(false)

  const toggleAuth=()=>{
    setAuth(true)
  }
  return <AuthContext.Provider value={{isAuth,toggleAuth}}>{children}</AuthContext.Provider>;
};
