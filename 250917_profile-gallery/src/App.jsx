// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Gallery from "./pages/Gallery";

export default function App() {
  return (
    <Routes>
      {/* 기본 경로 접속 시 /gallery로 리다이렉트 */}
      <Route path="/" element={<Navigate to="/gallery" replace />} />
      {/* 갤러리 페이지 */}
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
}
