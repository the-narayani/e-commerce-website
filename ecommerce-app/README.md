📦 E-Commerce Product Page (React + Tailwind CSS)A simple, clean, and fully functional e-commerce product page built with React, React Router, Tailwind CSS, and localStorage.This project was created as part of a Software Engineering assignment to understand component architecture, state management, data flow, and real-world UI behavior.🚀 Features✅ Core FunctionalityView a list of productsView detailed information for each productAdd items to CartAdd items to WishlistUpdate item quantity in cartRemove items from cart or wishlistMove items between cart ↔ wishlistAutomatic total price calculationPersistent cart & wishlist using localStorage🎨 UI & StylingFully styled using Tailwind CSSClean background and dark-themed NavbarResponsive layout (Mobile & Desktop friendly)Modern product cards with hover effectsRight-aligned icons for navigationGolden cart emoji 🛒 and pink wishlist heart 💗🔍 Bonus FeaturesSearch bar to filter products by name in real-timeState persistence across page reloads (Data doesn't disappear on refresh)🛠️ Tech StackTechnologyPurposeReact.jsUI components & state managementReact RouterNavigation between pagesTailwind CSSUtility-first styling & layoutlocalStoragePersisting cart & wishlist dataJSONLocal product data source📁 Project StructurePlaintextsrc/
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
⚙️ Installation & SetupClone the repositoryBashgit clone <your-repo-url>
cd ecommerce-app
Install dependenciesBashnpm install
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
🧠 Architecture OverviewApp.jsx is the "Brain": It manages the global state for products, the cart, and the wishlist.Data Flows Downward: App passes data and logic functions to child components via props.Actions Flow Upward: Child components call these functions to trigger state updates in the parent.Lifecycle & Persistence:useEffect (on mount): Restores saved data from localStorage.useEffect (on update): Saves the current state to localStorage whenever the cart or wishlist changes.

🤖 AI Assistance Disclosure
Parts of this project (including component structure, logic optimization, and documentation) were developed with the assistance of Gemini and Copilot following all academic and assignment guidelines.
