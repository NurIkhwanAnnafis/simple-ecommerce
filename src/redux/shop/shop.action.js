import { shopTypes } from "./shop.types";

export const updateCollection = collectionMap => ({
  type: shopTypes.UPDATE_COLLECTION,
  payload: collectionMap
})