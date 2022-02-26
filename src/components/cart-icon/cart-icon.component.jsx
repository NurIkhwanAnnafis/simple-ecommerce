import React, { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg';
import { ContextApp } from '../../context/app/app-context-provider';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.style.scss';

const CartIcon = () => {
  const context = useContext(ContextApp);
  const {
    cartItems,
    toggleCartHidden,
  } = context.cartContext;
  const itemCount = selectCartItemsCount(cartItems)

  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  )
}

export default CartIcon