// The state and logic for the cart

/*CartContext = a mailbox you install (the communication line)
CartProvider = the mailman who fills it with letters (the data and logic)
useContext(CartContext) = the person checking the mailbox (your components accessing the cart)*/

import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item));
      } else {
        return [...prev, { ...product, quantity }];
      }
    });
  };

  const decreaseQuantity = (id) => {
    setCartItems(
      (prev) => prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item)).filter((item) => item.quantity > 0) // Remove item if quantity goes to 0
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  return <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, decreaseQuantity }}>{children}</CartContext.Provider>;
};
