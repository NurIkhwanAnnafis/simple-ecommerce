import React, { useContext } from "react";
import { ContextApp } from "../../context/app/app-context-provider";

import './checkout-item.style.scss';

const CheckoutItem = ({ cartItem }) => {
  const context = useContext(ContextApp);
  const {
    clearItemFromCart,
    addItem,
    removeItem,
  } = context.cartContext;
  const { name, quantity, price, imageUrl } = cartItem;
  
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div 
        className="remove-button"
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
    )
  }

export default CheckoutItem;