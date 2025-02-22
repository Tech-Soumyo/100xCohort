import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Counter } from "./useCallBack/eventHandlers";
import { Parent } from "./useCallBack/Prevent_Rerenders";
import { ArrObjDep } from "./useCallBack/Array_Objects_Dependencies";
import { FnDepComplexObj } from "./useCallBack/FnDepComplexObj";
import { MemoCall } from "./useCallBack/Memo+Callback";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Counter /> */}
      {/* <Parent /> */}
      {/* <ArrObjDep /> */}
      {/* <FnDepComplexObj /> */}
      <MemoCall />
    </>
  );
}

export default App;
