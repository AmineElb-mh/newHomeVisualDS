import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import DsRoute from "./app/DsRoute";
import TelRoute from "./app/TelRoute";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/ds" replace />} />
      <Route path="/ds/*" element={<DsRoute />} />
      <Route path="/tel/*" element={<TelRoute />} />
    </Routes>
  </BrowserRouter>,
);
