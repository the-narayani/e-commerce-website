import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex gap-6 shadow-md">
      <Link className="hover:text-blue-400" to="/products">Products</Link>
      <Link className="hover:text-blue-400" to="/cart">Cart</Link>
      <Link className="hover:text-blue-400" to="/wishlist">Wishlist</Link>
    </nav>
  );
}