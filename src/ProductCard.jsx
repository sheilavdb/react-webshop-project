//The cards that show on the main page
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useContext } from "react";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.price} kr</p>
      <div className="cardButtons">
        <Link to={`/product/${product.id}`}>
          <button>Show more..</button>
        </Link>
        <button onClick={() => addToCart(product, 1)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
