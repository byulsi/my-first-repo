import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

function DiaryForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "diaries"), {
        title,
        content,
        createdAt: new Date(),
      });
      setTitle("");
      setContent("");
    } catch (error) {
      alert("일기 추가에 실패했습니다."); // ① 사용자 피드백
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">추가</button>
    </form>
  );
}

export default DiaryForm;
