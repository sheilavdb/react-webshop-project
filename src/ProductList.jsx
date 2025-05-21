//Fetching the products and data
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category/kitchen-accessories")
      .then((res) => {
        setProducts(res.data.products);

        console.log("API data:", res.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
