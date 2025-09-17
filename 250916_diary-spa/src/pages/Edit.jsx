import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDiaryById, updateDiary } from "../api/diary";
import DiaryForm from "../components/DiaryForm";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    const diary = getDiaryById(id);
    if (!diary) return navigate("/", { replace: true });
    setInitialData(diary);
  }, [id]);

  const handleSubmit = (data) => {
    updateDiary(id, data);
    navigate(`/diary/${id}`, { replace: true });
  };

  return (
    initialData && (
      <DiaryForm
        initialData={initialData}
        onSubmit={handleSubmit}
        onCancel={() => navigate(`/diary/${id}`, { replace: true })}
      />
    )
  );
}

export default Edit;
