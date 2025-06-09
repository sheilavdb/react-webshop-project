//Gathers Filters and Productlist on the main page
import { useEffect, useState } from "react";
import axios from "axios";

import Filters from "./Filters";
import ProductList from "./ProductList";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category/kitchen-accessories")
      .then((res) => {
        setProducts(res.data.products);
        setFilteredProducts(res.data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <Filters products={products} onFiltered={setFilteredProducts} />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
