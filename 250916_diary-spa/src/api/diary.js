// 로컬스토리지를 활용한 일기 데이터 관리 (시뮬레이션)

// 1. 모든 일기 목록 가져오기
export function getDiaries() {
  const diaries = localStorage.getItem("diaries");
  return diaries ? JSON.parse(diaries) : [];
}

// 2. 특정 ID의 일기 가져오기
export function getDiaryById(id) {
  const diaries = getDiaries();
  return diaries.find((diary) => diary.id === parseInt(id));
}

// 3. 새 일기 생성하기
export function createDiary(diaryData) {
  const diaries = getDiaries();
  const newDiary = {
    id: Date.now(),
    title: diaryData.title,
    content: diaryData.content,
    createdAt: new Date().toISOString(),
  };
  const updatedDiaries = [...diaries, newDiary];
  localStorage.setItem("diaries", JSON.stringify(updatedDiaries));
  return newDiary;
}

// 4. 일기 수정하기
export function updateDiary(id, updatedData) {
  const diaries = getDiaries();
  const updatedDiaries = diaries.map((diary) =>
    diary.id === parseInt(id)
      ? { ...diary, ...updatedData, updatedAt: new Date().toISOString() }
      : diary
  );
  localStorage.setItem("diaries", JSON.stringify(updatedDiaries));
  return updatedDiaries.find((diary) => diary.id === parseInt(id));
}

// 5. 일기 삭제하기
export function deleteDiary(id) {
  const diaries = getDiaries();
  const filteredDiaries = diaries.filter((diary) => diary.id !== parseInt(id));
  localStorage.setItem("diaries", JSON.stringify(filteredDiaries));
  return true;
}
