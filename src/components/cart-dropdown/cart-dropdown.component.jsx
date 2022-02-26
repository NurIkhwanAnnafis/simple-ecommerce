import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";

import './cart-dropdown.style.scss';
import { ContextApp } from "../../context/app/app-context-provider";

const CartDropdown = () => {
  const navigate = useNavigate();
  const context = useContext(ContextApp);
  const {
    cartItems = [],
    toggleCartHidden,
  } = context.cartContext;

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton 
        onClick={() => {
          navigate('/checkout')
          toggleCartHidden()
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  )
};

export default CartDropdown;