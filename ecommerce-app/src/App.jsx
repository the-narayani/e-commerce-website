import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import productsData from "./data/products.json";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false); // <-- NEW

  // 1. Load product data
  useEffect(() => {
    setProducts(productsData);
  }, []);

  // 2. Load saved cart/wishlist BEFORE enabling saving
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    const savedWishlist = localStorage.getItem("wishlist");

    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));

    setIsInitialized(true); // <-- IMPORTANT
  }, []);

  // 3. Save cart AFTER initialization
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, isInitialized]);

  // 4. Save wishlist AFTER initialization
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  }, [wishlist, isInitialized]);

  // -----------------------------
  // CART & WISHLIST FUNCTIONS
  // -----------------------------

  function addToCart(productId) {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === productId);
      if (existing) {
        return prev.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      const product = products.find((p) => p.id === productId);
      if (!product) return prev;
      return [...prev, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(productId) {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  }

  function updateCartQuantity(productId, quantity) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  }

  function addToWishlist(productId) {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === productId);
      if (exists) return prev;
      const product = products.find((p) => p.id === productId);
      if (!product) return prev;
      return [...prev, product];
    });
  }

  function removeFromWishlist(productId) {
    setWishlist((prev) => prev.filter((item) => item.id !== productId));
  }

  function moveCartToWishlist(productId) {
    const item = cart.find((i) => i.id === productId);
    if (!item) return;
    removeFromCart(productId);
    addToWishlist(productId);
  }

  function moveWishlistToCart(productId) {
    const item = wishlist.find((i) => i.id === productId);
    if (!item) return;
    removeFromWishlist(productId);
    addToCart(productId);
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<ProductList products={products} />}
        />
        <Route
          path="/products"
          element={<ProductList products={products} />}
        />
        <Route
          path="/products/:id"
          element={
            <ProductDetails
              products={products}
              addToCart={addToCart}
              addToWishlist={addToWishlist}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              updateCartQuantity={updateCartQuantity}
              moveCartToWishlist={moveCartToWishlist}
            />
          }
        />
        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishlist={wishlist}
              removeFromWishlist={removeFromWishlist}
              moveWishlistToCart={moveWishlistToCart}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;