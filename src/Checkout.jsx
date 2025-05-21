//Checkout page to fill in address and choose payment method
import { useState, useContext } from "react";
import { CartContext } from "./CartContext";

function Checkout() {
  const { clearCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [error, setError] = useState("");

  const handleOrder = () => {
    if (!name.trim() || !address.trim()) {
      setError("Please fill in both name and adress.");
      return;
    }

    setError("");
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) return <p className="ordered">Thanks for your order, {name}!</p>;

  return (
    <div className="checkoutContainer">
      <h2>Finish your order</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="checkoutInput" />
      <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} className="checkoutInput" />
      <button onClick={handleOrder} className="checkoutButton">
        Order
      </button>
      {error && <p className="checkoutError">{error}</p>}
    </div>
  );
}

export default Checkout;
