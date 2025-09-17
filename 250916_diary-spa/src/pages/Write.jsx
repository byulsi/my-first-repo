import React from "react";
import { useNavigate } from "react-router-dom";
import { createDiary } from "../api/diary";
import DiaryForm from "../components/DiaryForm";

function Write() {
  const navigate = useNavigate();
  const handleSubmit = (data) => {
    createDiary(data);
    navigate("/", { replace: true });
  };
  return (
    <DiaryForm
      onSubmit={handleSubmit}
      onCancel={() => navigate("/", { replace: true })}
    />
  );
}

export default Write;
