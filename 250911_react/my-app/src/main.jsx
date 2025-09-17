import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Apple from "./Apple.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Apple />
  </StrictMode>
);
