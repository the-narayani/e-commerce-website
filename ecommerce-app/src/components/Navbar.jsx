import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "1rem", padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/wishlist">Wishlist</Link>
    </nav>
  );
}