import { cartActionTypes } from "./card.types";


const initalState = {
  hidden: true
}

export const cartReducer = (state = initalState, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
  
    default:
      return state;
  }
}