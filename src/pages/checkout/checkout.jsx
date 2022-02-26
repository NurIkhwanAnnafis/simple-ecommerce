import React, { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import { ContextApp } from "../../context/app/app-context-provider";
import { selectCartTotal } from "../../redux/cart/cart.selectors";

import './checkout.style.scss';

const CheckoutPage = () => {
  const context = useContext(ContextApp);
  const {
    cartItems
  } = context.cartContext;
  const total = selectCartTotal(cartItems)

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quanity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
  
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
      <div className="test-warning">
        *please use the following credit card for*
        <br />
        4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  )
}

export default CheckoutPage;