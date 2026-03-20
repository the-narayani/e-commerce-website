import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductList({ products }) {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Products</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "0.5rem",
          marginBottom: "1rem",
          width: "300px",
          display: "block",
        }}
      />

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              width: "200px",
            }}
          >
            <img src={p.image} alt={p.name} style={{ width: "100%" }} />
            <h3>{p.name}</h3>
            <p>${p.price}</p>
            <Link to={`/products/${p.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}