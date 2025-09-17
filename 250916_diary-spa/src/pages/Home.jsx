import React, { useEffect, useState } from "react"; // React 훅 임포트
import { useSearchParams, useNavigate } from "react-router-dom"; // 쿼리 파라미터·네비게이트 훅
import { getDiaries, deleteDiary } from "../api/diary"; // CRUD 함수
import DiaryCard from "../components/DiaryCard"; // 목록용 카드 컴포넌트

function Home() {
  // Home 컴포넌트 선언
  const handleLogout = () => {
    // 로그아웃 핸들러
    localStorage.removeItem("userToken"); // 토큰 삭제
    window.location.reload(); // 페이지 새로고침
  };
  const [diaries, setDiaries] = useState([]); // 1. 모든 일기를 담을 상태
  const [searchParams, setSearchParams] = useSearchParams(); // 2. 쿼리 스트링 훅
  const navigate = useNavigate(); // 3. 페이지 이동 훅

  // 4. 쿼리 스트링에서 검색어(q)와 정렬(sort) 가져오기
  const searchQuery = searchParams.get("q") || "";
  const sortOrder = searchParams.get("sort") || "latest";

  useEffect(() => {
    // 5. 컴포넌트 마운트 및 쿼리 변경 시 실행
    let list = getDiaries(); //   전체 일기 불러오기
    // 6. 검색어가 있으면 제목·내용에 포함된 일기만 필터링
    if (searchQuery) {
      list = list.filter(
        (d) => d.title.includes(searchQuery) || d.content.includes(searchQuery)
      );
    }
    // 7. 정렬: 최신순(latest) 또는 오래된순(oldest)
    list.sort((a, b) =>
      sortOrder === "oldest"
        ? new Date(a.createdAt) - new Date(b.createdAt)
        : new Date(b.createdAt) - new Date(a.createdAt)
    );
    setDiaries(list); // 8. 상태 업데이트
  }, [searchQuery, sortOrder]);

  // 9. 검색어 입력 핸들러
  const handleSearch = (e) => {
    const q = e.target.value;
    setSearchParams({ q, sort: sortOrder }); //   쿼리 스트링 갱신
  };

  // 10. 정렬 변경 핸들러
  const handleSort = (e) => {
    const sort = e.target.value;
    setSearchParams({ q: searchQuery, sort }); //   쿼리 스트링 갱신
  };

  return (
    <div>
      <button onClick={handleLogout}>로그아웃</button>
      {/* 11. 검색 입력창 */}
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="검색어를 입력하세요"
      />

      {/* 12. 정렬 옵션 */}
      <select value={sortOrder} onChange={handleSort}>
        <option value="latest">최신순</option>
        <option value="oldest">오래된순</option>
      </select>

      {/* 13. 새 일기 작성 버튼 */}
      <button onClick={() => navigate("/write")}>새 일기 작성</button>

      {/* 14. 일기 카드 목록 렌더링 */}
      <div>
        {diaries.map((diary) => (
          <DiaryCard
            key={diary.id}
            diary={diary}
            onDelete={() => {
              // 15. 삭제 버튼 클릭 시
              deleteDiary(diary.id);
              setDiaries((prev) => prev.filter((d) => d.id !== diary.id));
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Home; // 컴포넌트 내보내기
