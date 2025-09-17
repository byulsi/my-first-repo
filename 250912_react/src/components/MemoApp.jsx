import { useState } from "react"; // useState를 import하는 것을 잊지마세요!

function MemoApp() {
  const [memos, setMemos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all"); // 'all', 'active', 'completed'

  // 메모 추가
  const addMemo = () => {
    if (inputValue.trim()) {
      const newMemo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
        createdAt: new Date().toLocaleString(),
      };
      setMemos([newMemo, ...memos]);
      setInputValue("");
    }
  };

  // 메모 삭제
  const deleteMemo = (id) => {
    setMemos(memos.filter((memo) => memo.id !== id));
  };

  // 메모 완료 토글
  const toggleComplete = (id) => {
    setMemos(
      memos.map((memo) =>
        memo.id === id ? { ...memo, completed: !memo.completed } : memo
      )
    );
  };

  // 메모 수정 시작
  const startEdit = (id, text) => {
    setEditingId(id);
    setEditingText(text);
  };

  // 메모 수정 저장
  const saveEdit = () => {
    setMemos(
      memos.map((memo) =>
        memo.id === editingId ? { ...memo, text: editingText } : memo
      )
    );
    setEditingId(null);
    setEditingText("");
  };

  // 메모 수정 취소
  const cancelEdit = () => {
    setEditingId(null);
    setEditingText("");
  };

  // 필터링된 메모 목록
  const filteredMemos = memos
    .filter((memo) => {
      if (filter === "active") return !memo.completed;
      if (filter === "completed") return memo.completed;
      return true;
    })
    .filter((memo) =>
      memo.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // 통계
  const stats = {
    total: memos.length,
    active: memos.filter((memo) => !memo.completed).length,
    completed: memos.filter((memo) => memo.completed).length,
  };

  return (
    <div>
      <h1>메모 앱</h1>

      {/* 입력 폼 */}
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addMemo()}
          placeholder="새 메모를 입력하세요"
        />
        <button onClick={addMemo}>추가</button>
      </div>

      {/* 검색 */}
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="메모 검색..."
        />
      </div>

      {/* 필터 버튼 */}
      <div>
        <button
          onClick={() => setFilter("all")}
          style={{ fontWeight: filter === "all" ? "bold" : "normal" }}
        >
          전체 ({stats.total})
        </button>
        <button
          onClick={() => setFilter("active")}
          style={{ fontWeight: filter === "active" ? "bold" : "normal" }}
        >
          진행중 ({stats.active})
        </button>
        <button
          onClick={() => setFilter("completed")}
          style={{ fontWeight: filter === "completed" ? "bold" : "normal" }}
        >
          완료 ({stats.completed})
        </button>
      </div>

      {/* 메모 목록 */}
      <div>
        {filteredMemos.length === 0 ? (
          <p>메모가 없습니다.</p>
        ) : (
          filteredMemos.map((memo) => (
            <div
              key={memo.id}
              style={{
                padding: "10px",
                margin: "5px",
                border: "1px solid #ddd",
                backgroundColor: memo.completed ? "#f0f0f0" : "white",
              }}
            >
              {editingId === memo.id ? (
                <div>
                  <input
                    type="text"
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && saveEdit()}
                  />
                  <button onClick={saveEdit}>저장</button>
                  <button onClick={cancelEdit}>취소</button>
                </div>
              ) : (
                <div>
                  <input
                    type="checkbox"
                    checked={memo.completed}
                    onChange={() => toggleComplete(memo.id)}
                  />
                  <span
                    style={{
                      textDecoration: memo.completed ? "line-through" : "none",
                      marginLeft: "10px",
                    }}
                  >
                    {memo.text}
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#666",
                      marginLeft: "10px",
                    }}
                  >
                    {memo.createdAt}
                  </span>
                  <button onClick={() => startEdit(memo.id, memo.text)}>
                    수정
                  </button>
                  <button onClick={() => deleteMemo(memo.id)}>삭제</button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MemoApp;
