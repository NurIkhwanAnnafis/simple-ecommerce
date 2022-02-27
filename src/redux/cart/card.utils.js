export const addItemToCart = (cartItems, cartItemToAdd) => {
  const tempCartItem = cartItems || [];
  if (!cartItemToAdd) return tempCartItem;
  const existingCartItem = tempCartItem.find(cartItem => cartItem.id === cartItemToAdd.id);

  if (existingCartItem) {
    return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? {
      ...cartItem, quantity: cartItem.quantity + 1
    } : cartItem)
  }

  return [ ...tempCartItem, { ...cartItemToAdd, quantity: 1 } ];
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const tempCartItem = cartItems || [];
  if (!cartItemToRemove || tempCartItem.length === 0) return tempCartItem;
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(
    cartItem => cartItem.id === cartItemToRemove.id ?
      { ...cartItem, quantity: cartItem.quantity - 1 } :
      cartItem
  )
}