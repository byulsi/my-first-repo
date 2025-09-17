import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/", { replace: true }); // 로그인 성공 후 홈으로 이동
  };

  return (
    <div className="login-page">
      <h1>로그인</h1>
      <Login onLogin={handleLogin} />
    </div>
  );
}

export default LoginPage;
