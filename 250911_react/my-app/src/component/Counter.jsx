import { useState } from "react";

function Counter({ children }) {
  // count: 현재 값
  // setCount: 값을 바꾸는 함수
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>현재 카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
      <button onClick={() => setCount(count - 1)}>감소</button>
      {children}
    </div>
  );
}

export default Counter;
