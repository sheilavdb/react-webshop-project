// The state and logic for the cart

/*CartContext = a mailbox you install (the communication line)
CartProvider = the mailman who fills it with letters (the data and logic)
useContext(CartContext) = the person checking the mailbox (your components accessing the cart)*/

import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import { toast } from "react-toastify";

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    // Load from localStorage on first render
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      let updatedCart;

      if (exists) {
        updatedCart = prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item));
      } else {
        updatedCart = [...prev, { ...product, quantity }];
      }

      return updatedCart;
    });

    toast.success(`${product.title} added to cart!`, {
      autoClose: 2000,
      position: "bottom-center",
      theme: "colored",
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
}
