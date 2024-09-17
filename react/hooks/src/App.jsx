import { useState } from "react";
import { UserMemo } from "./useMemo";
import "./App.css";
import { ComplexComponent } from "./useEffect/MultipleDependencies";
import { WebSocketComponent } from "./useEffect/SyncExternal";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <ComplexComponent /> */}
      <WebSocketComponent />
    </>
  );
}

export default App;
