export default function Wishlist({
  wishlist,
  removeFromWishlist,
  moveWishlistToCart,
}) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Wishlist</h1>

      {wishlist.length === 0 && <p>Your wishlist is empty.</p>}

      {wishlist.map((item) => (
        <div
          key={item.id}
          className="border rounded p-4 mb-4 shadow-sm"
        >
          <h3 className="text-xl font-semibold">{item.name}</h3>
          <p className="text-gray-600">Price: ${item.price}</p>

          <button
            onClick={() => removeFromWishlist(item.id)}
            className="bg-red-600 text-white px-3 py-1 rounded mr-3 hover:bg-red-700"
          >
            Remove
          </button>

          <button
            onClick={() => moveWishlistToCart(item.id)}
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          >
            Move to Cart
          </button>
        </div>
      ))}
    </div>
  );
}