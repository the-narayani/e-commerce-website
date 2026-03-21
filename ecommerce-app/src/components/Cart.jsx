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
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Cart</h1>

      {cart.length === 0 && <p>Your cart is empty.</p>}

      {cart.map((item) => (
        <div
          key={item.id}
          className="border rounded p-4 mb-4 shadow-sm"
        >
          <h3 className="text-xl font-semibold">{item.name}</h3>
          <p className="text-gray-600">Price: ${item.price}</p>

          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) =>
              updateCartQuantity(item.id, Number(e.target.value))
            }
            className="border p-1 w-20 mt-2 rounded"
          />

          <div className="mt-3">
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-600 text-white px-3 py-1 rounded mr-3 hover:bg-red-700"
            >
              Remove
            </button>

            <button
              onClick={() => moveCartToWishlist(item.id)}
              className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-800"
            >
              Move to Wishlist
            </button>
          </div>
        </div>
      ))}

      <h2 className="text-2xl font-bold mt-6">Total: ${total.toFixed(2)}</h2>
    </div>
  );
}