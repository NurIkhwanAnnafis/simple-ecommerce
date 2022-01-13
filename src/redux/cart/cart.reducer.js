import { cartActionTypes } from "./card.types";
import { addItemToCart } from "./card.utils";


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
  
    default:
      return state;
  }
}