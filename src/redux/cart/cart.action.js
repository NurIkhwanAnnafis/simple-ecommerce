import { cartActionTypes } from "./card.types";

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN
})

export const addIem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item
})