import React from "react";
import MemoItem from "./MemoItem";

// MemoList 함수 내보내기
export default function MemoList({
  memos,
  filteredMemos,
  editingId,
  editingText,
  setEditingText,
  startEdit,
  saveEdit,
  cancelEdit,
  toggleComplete,
  deleteMemo,
}) {
  // 필터된 메모가 없을 때 안내 메시지
  if (filteredMemos.length === 0) {
    return <p style={{ marginTop: "20px" }}>메모가 없습니다.</p>;
  }

  // 메모가 있을 때 각각 MemoItem으로 렌더링
  return (
    <div style={{ marginTop: "20px" }}>
      {filteredMemos.map((memo) => (
        <MemoItem
          key={memo.id}
          memo={memo}
          isEditing={(editingId === memo, id)}
          editingText={editingText}
          setEditingText={setEditingText}
          startEdit={startEdit}
          saveEdit={saveEdit}
          cancelEdit={cancelEdit}
          toggleComplete={toggleComplete}
          deleteMemo={deleteMemo}
        />
      ))}
    </div>
  );
}
