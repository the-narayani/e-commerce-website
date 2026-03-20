export default function Cart({
  cart,
  removeFromCart,
  updateCartQuantity,
  moveCartToWishlist,
}) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Cart</h1>
      {cart.length === 0 && <p>Your cart is empty.</p>}

      {cart.map((item) => (
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
          <label>
            Quantity:{" "}
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) =>
                updateCartQuantity(item.id, Number(e.target.value))
              }
            />
          </label>
          <div style={{ marginTop: "0.5rem" }}>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
            <button
              style={{ marginLeft: "0.5rem" }}
              onClick={() => moveCartToWishlist(item.id)}
            >
              Move to Wishlist
            </button>
          </div>
        </div>
      ))}

      <h2>Total: ${total.toFixed(2)}</h2>
    </div>
  );
}