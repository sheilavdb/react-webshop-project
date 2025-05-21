//The shopping Cart
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

function Cart() {
  const { cartItems = [], addToCart, removeFromCart, decreaseQuantity, clearCart } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cartContainer">
      <h2 className="cartTitle">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="cartEmpty">Your shopping cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cartItem">
            <div className="cartItemInfo">
              <p className="cartItemTitle">{item.title}</p>
              <p className="cartItemPrice">
                {item.quantity} × {item.price} kr = {(item.price * item.quantity).toFixed(2)} kr
              </p>
            </div>
            <div className="cartItemActions">
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <div>{item.quantity}</div>
              <button onClick={() => addToCart(item, 1)}>+</button>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
      <h3 className="cartTotal">Total price: {total.toFixed(2)} kr</h3>
      <div className="checkoutButtons">
        <Link to="/checkout" className="checkoutLink">
          Go to checkout
        </Link>
        <button onClick={clearCart} className="clearCartButton">
          Empty Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
