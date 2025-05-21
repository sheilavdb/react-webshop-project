// The functions to make the cart work
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
