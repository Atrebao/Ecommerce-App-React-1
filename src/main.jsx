import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProductProvider from "./contexts/ProductContext.jsx";
import SibebarProvider from "./contexts/SibebarContext.jsx";
import CartProvider from "./contexts/CartContext.jsx";
createRoot(document.getElementById("root")).render(
  <SibebarProvider>
    <CartProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </CartProvider>
  </SibebarProvider>
);
