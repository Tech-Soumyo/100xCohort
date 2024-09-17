import { useState } from "react";
import "./App.css";
import { ExpensiveComponent } from "./useMemo/besic1";
import { ExpensiveCalculationComponent } from "./useMemo/besic2";
import { PrentComponent } from "./useMemo/derivedState_Props";
import { Parent } from "./useMemo/Memo_vs_Call";
import { ParentTableComponent } from "./useMemo/filer_sort(complex)";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <ExpensiveComponent /> */}
      {/* <ExpensiveCalculationComponent /> */}
      {/* <PrentComponent /> */}
      <ParentTableComponent />
      {/* <Parent /> */}
    </>
  );
}

export default App;
