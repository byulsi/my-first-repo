import React from "react";
import DiaryForm from "./components/DiaryForm";
import DiaryList from "./components/DiaryList";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>나의 일기장</h1>
      <DiaryForm />
      <DiaryList />
    </div>
  );
}

export default App;
