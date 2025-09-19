import { Routes, Route, Navigate } from "react-router-dom";
import Gallery from "./pages/Gallery";
import TabsPage from "./pages/TabsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/gallery" replace />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/tabs" element={<TabsPage />} />
    </Routes>
  );
}
