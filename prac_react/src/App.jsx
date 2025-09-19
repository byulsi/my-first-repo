// src/App.jsx
import React from "react";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import "./index.css"; // 애니메이션 CSS 포함

function App() {
  const { ref, isVisible } = useScrollAnimation({ once: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-gray-100 p-8 space-y-12">
      <div className="h-64 bg-white rounded shadow flex items-center justify-center">
        <p>스크롤하여 애니메이션을 확인하세요</p>
      </div>

      <div
        ref={ref}
        className={`opacity-0 transform transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "translate-y-8"
        } bg-blue-500 text-white p-8 rounded shadow-lg`}
      >
        <h2 className="text-2xl font-bold mb-4">스크롤 애니메이션</h2>
        <p>이 요소는 화면에 10% 이상 보이면 부드럽게 올라옵니다.</p>
      </div>
    </div>
  );
}

export default App;
