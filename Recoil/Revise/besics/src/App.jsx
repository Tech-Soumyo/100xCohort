import { useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {
  return (
    <>
      <div>
        <RecoilRoot>
          <Count />
        </RecoilRoot>
      </div>
    </>
  );
}

function Count() {
  return (
    <>
      <div>
        <CountRenderer />
        <Button />
      </div>
    </>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      <b>{count}</b>
      <EvenCountRerender />
    </div>
  );
}

function EvenCountRerender() {
  const isEven = useRecoilValue(evenSelector);
  // const isEven = useMemo(() => {
  //   return count % 2 == 0;
  // }, [count]);
  return <div>{isEven ? "It is Even" : null}</div>;
}

function Button() {
  // const [count, setCount] = useRecoilState(countAtom);

  const setCount = useSetRecoilState(countAtom);
  console.log("re-render");
  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}
export default App;
