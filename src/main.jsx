import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Apartments from "./pages/Apartments";
import Details from "./pages/Details";
import Checkout from "./pages/Checkout";
import Confirmation from "./pages/Confirmation";
import Admin from "./pages/Admin";
import "./styles.css";
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="apartments" element={<Apartments />} />
          <Route path="apartments/:id" element={<Details />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="confirmation" element={<Confirmation />} />
          <Route path="admin" element={<Admin />} />
          <Route
            path="*"
            element={
              <div className="container empty">
                <h2>Page not found</h2>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
