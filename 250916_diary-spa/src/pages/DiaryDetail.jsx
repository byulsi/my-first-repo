import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDiaryById } from "../api/diary";

function DiaryDetail() {
  const { id } = useParams(); // URL 파라미터로 id 추출
  const navigate = useNavigate(); // 페이지 이동 훅 선언
  const [diary, setDiary] = useState(null); // 일기 데이터 상태

  useEffect(() => {
    // 마운트 시 실행
    const data = getDiaryById(id); // id에 해당하는 일기 조회
    if (!data) {
      // 데이터 없으면
      navigate("/", { replace: true }); // 홈으로 리다이렉트
      return;
    }
    setDiary(data); // 상태에 일기 데이터 저장
  }, [id, navigate]);

  if (!diary) return null; // 로딩 전 null 반환

  return (
    <div className="diary-detail">
      <h1>{diary.title}</h1>
      <p>{new Date(diary.createdAt).toLocaleString()}</p>
      <div className="diary-content">
        {diary.content.split("\n").map(
          (
            line,
            idx // 줄바꿈 처리
          ) => (
            <p key={idx}>{line}</p>
          )
        )}
      </div>
    </div>
  );
}

export default DiaryDetail;
