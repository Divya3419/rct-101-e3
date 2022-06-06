import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product/Product";

const Products = () => {
  const[data,setData]=useState([])

useEffect(()=>{
axios.get("http://localhost:8080/products")
.then((r)=>{
  setData(r.data)
  console.log(r.data)
})
},[])

  return <div>
    {data.map((ele)=>{
return(
  
  <div >
    <Product key={ele.id} {...ele}/>
  </div>
)


    })}
    
  </div>;
};

export default Products;
