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

class MyClassicalComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>
          ClassicalComponentsIncrement
        </button>
      </div>
    );
  }
}
export default App;
