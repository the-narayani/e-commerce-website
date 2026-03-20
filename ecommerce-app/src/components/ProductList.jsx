import { Link } from "react-router-dom";

export default function ProductList({ products }) {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Products</h1>
      {products.length === 0 && <p>Loading products...</p>}
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {products.map((p) => (
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