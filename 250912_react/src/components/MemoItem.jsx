import React from "react";

export default function MemoItem({
  memo,
  isEditing,
  editingText,
  setEditingText,
  startEdit,
  saveEdit,
  cancelEdit,
  toggleComplete,
  deleteMemo,
}) {
  // 메모 아이템 컨테이너. 완료된 메모는 배경색 다르게 표시
  return (
    <div
      style={{
        padding: "10px",
        margin: "5px 0",
        border: "1px solid #ddd",
        backgroundColor: memo.completed ? "#f0f0f0" : "white",
      }}
    >
      {isEditing ? (
        <div>
          {/* 수정용 입력창: value와 변경 함수 연결 */}
          <input
            type="text"
            value={editingText}
            onChange={(e) => setEditingText(e.target.value)}
            onKeyUp={(e) => e.key === "Enter" && saveEdit()}
          />
          {/* 저장 버튼 */}
          <button onClick={saveEdit}>저장</button>
          {/* 취소 버튼 */}
          <button onClick={cancelEdit}>취소</button>
        </div>
      ) : (
        <div>
          {/* 완료 토글 체크박스 */}
          <input
            type="checkbox"
            checked={memo.completed}
            onChange={() => toggleComplete(memo.id)}
          />
          {/* 메모 텍스트: 완료시 취소선 표시 */}
          <span
            style={{
              textDecoration: memo.completed ? "line-through" : "none",
              marginLeft: "10px",
            }}
          >
            {memo.text}
          </span>
          {/* 생성 시각 표시 */}
          <span style={{ fontSize: "12px", color: "#666", marginLeft: "10px" }}>
            {memo.createdAt}
          </span>
          {/* 수정 버튼 */}
          <button onClick={() => startEdit(memo.id, memo.text)}>수정</button>
          {/* 삭제 버튼 */}
          <button onClick={() => deleteMemo(memo.id)}>삭제</button>
        </div>
      )}
    </div>
  );
}
