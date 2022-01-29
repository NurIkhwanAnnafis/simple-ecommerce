import { shopTypes } from "./shop.types";

const initialState = {
  collections: null
}

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case shopTypes.UPDATE_COLLECTION:
      return {
        ...state,
        collections: action.payload
      }

    default:
      return state;
  }
}