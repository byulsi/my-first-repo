import React from "react";

export default function FilterButtons({ filter, setFilter, stats }) {
  // 세 개의 버튼 랜더링
  return (
    <div style={{ marginTop: "10px" }}>
      {/* 전체 버튼 */}
      <button
        onClick={() => setFilter("all")}
        style={{ fontWeight: filter === "all" ? "bold" : "normal" }}
      >
        전체 ({stats.total})
      </button>

      {/* 진행중 버튼 */}
      <button
        onClick={() => setFilter("active")}
        style={{ fontWeight: filter === "active" ? "bold" : "normal" }}
      >
        진행중 ({stats.active})
      </button>

      {/* 완료 버튼 */}
      <button
        onClick={() => setFilter("complete")}
        style={{ fontWeight: filter === "complete" ? "bold" : "normal" }}
      >
        완료 ({stats.completed})
      </button>
    </div>
  );
}
