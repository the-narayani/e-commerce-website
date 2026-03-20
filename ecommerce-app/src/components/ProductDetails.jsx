import { useParams } from "react-router-dom";

export default function ProductDetails({ products }) {
  const { id } = useParams();
  const productId = Number(id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div style={{ padding: "1rem" }}>Product not found.</div>;
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ width: "200px" }} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>

      {/* Buttons will later call addToCart / addToWishlist */}
      <button>Add to Cart</button>
      <button style={{ marginLeft: "0.5rem" }}>Add to Wishlist</button>
    </div>
  );
}