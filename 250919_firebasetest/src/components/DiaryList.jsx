import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  orderBy,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore"; // doc, updateDoc, deleteDoc 한 번에 가져오기
import { db } from "../firebase";

function DiaryList() {
  const [diaries, setDiaries] = useState([]);
  const [loading, setLoading] = useState(true); // ① 로딩 상태 추가

  // 1) fetchDiaries를 컴포넌트 스코프에 선언
  const fetchDiaries = async () => {
    setLoading(true); // ② 데이터 요청 시작 전 로딩 true
    try {
      const q = query(collection(db, "diaries"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDiaries(items);
    } catch (error) {
      console.error("조회 오류:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDiaries(); // 마운트 시 한 번 호출
  }, []);

  if (loading) {
    return <p>로딩 중...</p>; // ④ 로딩 중 표시
  }

  return (
    <div>
      <h2>일기 목록</h2>
      {diaries.length === 0 && <p>저장된 일기가 없습니다.</p>}
      {diaries.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
          <small>{item.createdAt.toDate().toLocaleString()}</small>

          {/* 수정 버튼 */}
          <button
            onClick={async () => {
              const newTitle = prompt("새 제목을 입력하세요", item.title);
              if (!newTitle) return;
              const docRef = doc(db, "diaries", item.id);
              await updateDoc(docRef, { title: newTitle });
              fetchDiaries(); // 수정 후 목록 다시 불러오기
            }}
          >
            수정
          </button>

          {/* 삭제 버튼 */}
          <button
            onClick={async () => {
              const docRef = doc(db, "diaries", item.id);
              await deleteDoc(docRef);
              fetchDiaries(); // 삭제 후 목록 다시 불러오기
            }}
          >
            삭제
          </button>
        </div>
      ))}
    </div>
  );
}

export default DiaryList;
