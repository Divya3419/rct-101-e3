import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Product = (props) => {
  
  const{count,toggleinc,toggledec}=useContext(CartContext)
  // Note: this id should come from api
  const product = { id: 1 };
  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{props.name}</h3>
      <h6 data-cy="product-description">{props.description}</h6>
      <button data-cy="product-add-item-to-cart-button">addtocart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={toggleinc}>+</button>
        <span data-cy="product-count">
          {
            count
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={toggledec}>-</button>
        <button data-cy="product-remove-cart-item-button">Remove from cart</button>
      </div>
    </div>
  );
};

export default Product;
