// src/components/DiaryCard.jsx

import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * DiaryCard 컴포넌트
 * - props:
 *    diary: { id, title, content, createdAt }
 *    onDelete: function
 */
function DiaryCard({ diary, onDelete }) {
  const navigate = useNavigate(); // 페이지 이동 훅

  return (
    <div className="diary-card">
      {/* 제목 클릭 시 상세보기로 이동 */}
      <h2
        className="diary-title"
        onClick={() => navigate(`/diary/${diary.id}`)}
      >
        {diary.title}
      </h2>

      {/* 생성일자 표시 */}
      <p className="diary-date">{new Date(diary.createdAt).toLocaleString()}</p>

      {/* 수정 버튼 클릭 시 수정 페이지로 이동 */}
      <button
        className="diary-button edit-button"
        onClick={() => navigate(`/edit/${diary.id}`)}
      >
        수정
      </button>

      {/* 삭제 버튼 클릭 시 onDelete 호출 */}
      <button className="diary-button delete-button" onClick={onDelete}>
        삭제
      </button>
    </div>
  );
}

export default React.memo(DiaryCard);
