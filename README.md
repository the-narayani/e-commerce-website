📦 E-Commerce Product Page (React + Tailwind CSS)A simple, clean, and fully functional e-commerce product page built with React, React Router, Tailwind CSS, and localStorage. This project was created as part of a Software Engineering assignment to understand component architecture, state management, data flow, and real-world UI behavior.

🚀 Features Core Functionality: View a list of products, View detailed information for each product, Add items to Cart, Add items to Wishlist, Update item quantity in cart, Remove items from cart or wishlis, tMove items between cart ↔ wishlist, Automatic total price calculation, Persistent cart & wishlist using localStorage

🎨 UI & StylingFully styled using Tailwind CSS. Clean background and dark-themed Navbar. Responsive layout (Mobile & Desktop friendly). Modern product cards with hover effects. Right-aligned icons for navigation. Golden cart emoji 🛒 and pink wishlist heart 💗 icon.

🔍 Bonus Features: Search bar to filter products by name in real-time. State persistence across page reloads (Data doesn't disappear on refresh).

🛠️ Tech-Stack: TechnologyPurposeReact.js. UI components & state management. React Router. Navigation between pages. Tailwind CSS. Utility-first styling & layoutlocalStorage. Persisting cart & wishlist data. JSON Local product data source. 

📁 Project Structure
src/
  ├── components/
  │ ├── Navbar.jsx
  │ ├── ProductList.jsx
  │ ├── ProductDetails.jsx
  │ ├── Cart.jsx
  │ └── Wishlist.jsx
  ├── data/
  │ └── products.json
  ├── App.jsx
  ├── index.js
  └── index.css (Tailwind imports)

⚙️ Installation & Setup
Clone the repository
Bash: git clone <your-repo-url>cd ecommerce-app
Install dependencies:
npm install
Start the development serverBashnpm start
Your app will run at: http://localhost:3000🎨 Tailwind ConfigurationThis project uses Tailwind CSS. The configuration is as follows:tailwind.config.jsJavaScriptmodule.exports = {
content: ["./src/**/*.{js,jsx,ts,tsx}"],
theme: {
extend: {},
},
plugins: [],
}
index.cssCSS@tailwind base;
@tailwind components;
@tailwind utilities;

🧠 Architecture Overview
App.jsx manages the global state for products, the cart, and the wishlist. 
Data Flows Downward: App passes data and logic functions to child components via props.
Actions Flow Upward: Child components call these functions to trigger state updates in the parent.
Lifecycle & Persistence:useEffect (on mount): Restores saved data from localStorage.
useEffect (on update): Saves the current state to localStorage whenever the cart or wishlist changes.

🤖 AI Assistance Disclosure
Parts of this project were developed with the assistance of Gemini and Copilot following all academic and assignment guidelines.
