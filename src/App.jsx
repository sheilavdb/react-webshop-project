import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";

import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import { CartProvider } from "./CartProvider";
import Checkout from "./Checkout";
import "./index.css";
import ProductsPage from "./ProductsPage";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";

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
        <ToastContainer position="bottom-center" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss={false} draggable pauseOnHover={false} theme="colored" />
      </CartProvider>
    </Router>
  );
}

export default App;
