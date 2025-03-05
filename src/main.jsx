import "./index.css";
import App from "./App.jsx";
import { StrictMode } from "react";
import Header from "./layouts/Header.jsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
