import { useState } from "react"
import { addItemToCart, removeItemFromCart } from "../../redux/cart/card.utils";

export const useModelCart = () => {
  const [contextCart, setContextCart] = useState({
    hidden: true,
    cartItems: []
  });

  const toggleCartHidden = () => setContextCart({
    ...contextCart,
    hidden: !contextCart.hidden,
  })

  const clearItemFromCart = ({ id }) => setContextCart({
    ...contextCart,
    cartItems: contextCart.cartItems.filter(cartItem => cartItem.id !== id)
  })

  const addItem = (cartItem) => setContextCart({
    ...contextCart,
    cartItems: addItemToCart(contextCart.cartItems, cartItem)
  })

  const removeItem = (cartItem) => setContextCart({
    ...contextCart,
    cartItems: removeItemFromCart(contextCart.cartItems, cartItem)
  })

  return { 
    ...contextCart,
    toggleCartHidden,
    clearItemFromCart,
    addItem,
    removeItem
  };
}