//The page that shows the details fullscreen
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "./CartContext";
import { StarIcon } from "@heroicons/react/16/solid";
import axios from "axios";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-details">
      <img src={product.thumbnail} alt={product.title} />
      <div>
        <h2>{product.title}</h2>
        <p>
          Rating: <StarIcon className="star-icon" /> {product.rating}
        </p>
        <p>{product.description}</p>
        <p>Pris: {product.price} kr</p>
        <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} min={1} />
        <button className="Bttn" onClick={() => addToCart(product, quantity)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
