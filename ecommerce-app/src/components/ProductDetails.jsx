import { useParams } from "react-router-dom";

export default function ProductDetails({ products, addToCart, addToWishlist }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <div className="p-6">Product not found.</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

      <img
        src={product.image}
        alt={product.name}
        className="w-64 h-64 object-cover rounded mb-4"
      />

      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-xl font-semibold mb-4">${product.price}</p>

      <button
        onClick={() => addToCart(product.id)}
        className="bg-blue-600 text-white px-4 py-2 rounded mr-3 hover:bg-blue-700"
      >
        Add to Cart
      </button>

      <button
        onClick={() => addToWishlist(product.id)}
        className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        Add to Wishlist
      </button>
    </div>
  );
}