import { shopTypes } from "./shop.types";

const initialState = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
}

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case shopTypes.FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true,
      }

    case shopTypes.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      }

    case shopTypes.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }

    default:
      return state;
  }
}