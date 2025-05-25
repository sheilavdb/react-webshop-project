import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";

import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import { CartProvider } from "./CartProvider";
import Checkout from "./Checkout";
import "./index.css";
import ProductsPage from "./ProductsPage";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
