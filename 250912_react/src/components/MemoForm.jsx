import React from "react";

export default function MemoForm({ inputValue, setInputValue, addMemo }) {
  return (
    <>
      {/* 텍스트 입력창: 값과 변경 핸들러 연결 */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyUp={(e) => e.key === "Enter" && addMemo()}
        placeholder="새 메모를 입력하세요"
      />
      {/* 추가 버튼: 클릭 시 addMomo 함수 호출 */}
      <button onClick={addMemo}>추가</button>
    </>
  );
}
