import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gray-900 text-white px-6 py-4 flex gap-6 shadow-md flex justify-between items-center">
      {/* Left side: Logo or title */}
      <Link to="/products" className="text-2xl font-bold text-white-800">
        My Store
      </Link>

      {/* Right side: Cart + Wishlist */}
      <div className="flex items-center gap-6 text-lg">
        <Link
          to="/wishlist"
          className="flex items-center gap-1 text-pink-600 hover:text-pink-700 transition"
        >
          💗 <span className="hidden sm:inline">Wishlist</span>
        </Link>

        <Link
          to="/cart"
          className="flex items-center gap-1 text-yellow-600 hover:text-yellow-700 transition"
        >
          🛒 <span className="hidden sm:inline">Cart</span>
        </Link>
      </div>
    </nav>
  );
}