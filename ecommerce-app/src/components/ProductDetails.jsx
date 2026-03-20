import { useParams } from "react-router-dom";

export default function ProductDetails({ products, addToCart, addToWishlist }) {
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

      <button onClick={() => addToCart(product.id)}>Add to Cart</button>
      <button
        style={{ marginLeft: "0.5rem" }}
        onClick={() => addToWishlist(product.id)}
      >
        Add to Wishlist
      </button>
    </div>
  );
}