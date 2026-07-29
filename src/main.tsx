import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import StartRoute from "./app/StartRoute";
import DsRoute from "./app/DsRoute";
import TelRoute from "./app/TelRoute";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartRoute />} />
      <Route path="/ds/*" element={<DsRoute />} />
      <Route path="/tel/*" element={<TelRoute />} />
    </Routes>
  </BrowserRouter>,
);
