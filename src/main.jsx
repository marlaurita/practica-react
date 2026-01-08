import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import ProductList from "./screens/ProductList/ProductList.jsx";
import ProductDetail from "./screens/ProductDetail/ProductDetail.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product-list" element={<ProductList />} />

        <Route path="/product-detail" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
