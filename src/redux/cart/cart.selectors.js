import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
)

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

export const selectCartItemsCount = (cartItems = []) => {
  if (!cartItems || cartItems.length === 0) return 0;

  return cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
}

export const selectCartTotal = (cartItems = []) => {
  if (!cartItems || cartItems.length === 0) return 0;

  return cartItems.reduce((acc, cartItem) => acc + cartItem.quantity * cartItem.price, 0)
}