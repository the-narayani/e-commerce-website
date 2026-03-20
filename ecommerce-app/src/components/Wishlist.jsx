export default function Wishlist({
  wishlist,
  removeFromWishlist,
  moveWishlistToCart,
}) {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Wishlist</h1>
      {wishlist.length === 0 && <p>Your wishlist is empty.</p>}

      {wishlist.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            padding: "0.5rem",
            marginBottom: "0.5rem",
          }}
        >
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
          <button
            style={{ marginLeft: "0.5rem" }}
            onClick={() => moveWishlistToCart(item.id)}
          >
            Move to Cart
          </button>
        </div>
      ))}
    </div>
  );
}