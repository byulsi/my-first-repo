// src/App.js
import React from "react";
import "./App.css";

function Welcome({ isLoggedIn }) {
  console.log("Welcome 렌더링, isLoggedIn:", isLoggedIn);
  return <div>{isLoggedIn && <p>환영합니다!</p>}</div>;
}

export default function App() {
  const userLoggedIn = true; // 로그인 상태값: true 또는 false

  return (
    <div className="app">
      <h1>홈 페이지</h1>
      <Welcome isLoggedIn={userLoggedIn} />
    </div>
  );
}
