//Header with logo and navbar
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

import { CartContext } from "./CartContext";

function Header() {
  const { cartItems } = useContext(CartContext);

  const numberOfItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <header className="header">
      <a href="/">
        <img src="https://level-level.com/nl/wp-content/uploads/sites/2/2021/12/Coolblue-logo.jpg" alt="coolblue" className="header-logo" />
      </a>
      <nav className="header-nav">
        <Link to="/" className="nav-link">
          Products
        </Link>
        <Link to="/cart" className="nav-link cart-link">
          <ShoppingCartIcon className="cart-icon" />
          {numberOfItems > 0 && <span className="cart-count">{numberOfItems}</span>}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
