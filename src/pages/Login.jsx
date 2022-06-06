import axios from "axios";
import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const{isAuth,toggleAuth}=useContext(AuthContext)

  const handleSubmit=(e)=>{
    e.preventDefault();
  
    axios({
        url:"https://reqres.in/api/login",
        method:"POST",
        data:{
        email,password
            
        },
    })
    .then((r)=>{
      
      toggleAuth(r.data.data)
    })
    .catch((err)=>{
        console.log(err.message)
        alert("error")
    })

}
if(isAuth){
return <Navigate to="/"/>
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input data-cy="login-email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      <br />
      <input data-cy="login-password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      <br />
      <button data-cy="login-submit" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
