import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductList({ products }) {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4"></h1>

      <div className="flex justify-center w-full">
        <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 w-80 mb-6 rounded shadow-sm focus:ring-2 focus:ring-black outline-none transition-all"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            className="bg-white border border-gray-100 border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <div>
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-40 object-cover rounded"
                  />
                <h3 className="text-xl font-semibold mt-2">{p.name}</h3>
                <p className="text-gray-600">${p.price}</p>

                <Link
                to={`/products/${p.id}`}
                className="inline-block mt-3 text-blue-600 hover:underline"
                >
                    View Details
                </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}