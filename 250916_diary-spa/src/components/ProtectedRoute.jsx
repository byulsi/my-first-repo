import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isLoggedIn = Boolean(localStorage.getItem("userToken"));

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />; // 홈 대신 로그인 페이지로
  }
  return children;
}

export default ProtectedRoute;
