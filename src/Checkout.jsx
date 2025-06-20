//Checkout page to fill in address and choose payment method
import { useState } from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

function Checkout() {
  const { cartItems, clearCart } = useCart();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [payment, setPayment] = useState("");
  const [error, setError] = useState("");

  const cartIsEmpty = cartItems.length === 0;
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleOrder = () => {
    if (!name.trim() || !address.trim() || !email.trim() || !payment) {
      setError("Please fill in all lines and select payment method.");
      return;
    }

    setError("");
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced)
    return (
      <div>
        <p className="ordered">
          Thanks for your order, {name}! A confirmation has been sent to your email. <br />
          <br />
          <Link to="/" className="checkoutButton">
            Shop More
          </Link>
        </p>
      </div>
    );

  return (
    <div className="checkoutContainer">
      <h2>Finish your order</h2>
      {cartIsEmpty ? (
        <p>Cart is empty..</p>
      ) : (
        <table className="itemList">
          <tr>
            <th className="itemTitle">Item</th>
            <th className="itemQuantity">Quantity</th>
            <th className="itemPrice">Price</th>
          </tr>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td className="itemTitle">{item.title}</td>
              <td className="itemQuantity">{item.quantity}</td>
              <td className="itemPrice">{item.price.toFixed(2)} kr</td>
            </tr>
          ))}
        </table>
      )}
      <p className="totalPrice">
        <strong>Total price:</strong> {total.toFixed(2)} kr
      </p>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="checkoutInput" />
      <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} className="checkoutInput" />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="checkoutInput" />
      <select value={payment} onChange={(e) => setPayment(e.target.value)} className="checkoutInput">
        <option value="">Choose Payment Method</option>
        <option value="creditcard">Creditcard</option>
        <option value="swish">Swish</option>
        <option value="paypal">Paypal</option>
      </select>
      <button onClick={handleOrder} className="checkoutButton">
        Order
      </button>
      {error && <p className="checkoutError">{error}</p>}
    </div>
  );
}

export default Checkout;
