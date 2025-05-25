//Footer with contact options
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerSection">
          <h4>Shop</h4>
          <Link to="/">Products</Link>
          <Link to="/cart">Cart</Link>
        </div>

        <div className="footerSection">
          <h4>Contact</h4>
          <p>Email: support@coolblue.com</p>
          <p>Phone: +46 123 456 789</p>
        </div>

        <div className="footerSection">
          <h4>About</h4>
          <p>Sweden's #1 Kitchen Accessories Store</p>
        </div>
      </div>

      <div className="footerBottom">
        <p>&copy; 2025 Coolblue. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
