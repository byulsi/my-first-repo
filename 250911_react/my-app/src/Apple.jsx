import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./component/Counter";
import 인사컴포넌트 from "./component/인사컴포넌트";

function Apple() {
  return (
    <>
      <h1>나의 첫 React 앱!</h1>
      <Counter>
        <p>바꿨다!</p>
      </Counter>
      <인사컴포넌트 />
      <p>뭐지뭐지?</p>
    </>
  );
}

export default Apple;
