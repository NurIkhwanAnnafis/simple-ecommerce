import { cartActionTypes } from "./card.types";
import { addItemToCart, rmeoveItemFromCart } from "./card.utils";


const initalState = {
  hidden: true,
  cartItems: []
}

export const cartReducer = (state = initalState, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };

    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };

    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: rmeoveItemFromCart(state.cartItems, action.payload)
      };

    case cartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
      };
  
    default:
      return state;
  }
}