import { cartActionTypes } from "./card.types";

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN
})

export const addIem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item
})

export const removeItem = (item) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item
})

export const clearItemFormCart = (item) => ({
  type: cartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
})
