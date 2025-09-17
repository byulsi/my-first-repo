import React from "react";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  // 검색창 랜더링
  return (
    <div style={{ marginTop: "10px" }}>
      {/* 텍스트 입력창: 값과 변경 핸들러 연결 */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="메모 검색..."
      />
    </div>
  );
}
