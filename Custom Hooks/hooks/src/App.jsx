import { useState } from "react";
import React from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MyFuntionalComponent />
      <MyClassicalComponents />
    </>
  );
}

function MyFuntionalComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementCount}>FuntionalComponentIncrement</button>
    </div>
  );
}

export default App;
