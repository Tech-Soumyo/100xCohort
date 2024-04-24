import React, { useState, useEffect, Component } from "react";
import "./App.css";

function App() {
  const [render, setRender] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setRender(false);
    }, 10000);
  }, []);

  // setInterval(() => {
  //   setTimeout(() => {
  //     setRender((r) => !r);
  //   }, 10000);
  // }, []);

  return (
    <>
      {/* <MyFuntionalComponent />
      <MyClassicalComponents /> */}
      {render ? <MyComponent /> : <div>2nd render</div>}
    </>
  );
}

// function MyFuntionalComponent() {
//   const [count, setCount] = useState(0);

//   const incrementCount = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={incrementCount}>FuntionalComponentIncrement</button>
//     </div>
//   );
// }

// class MyClassicalComponents extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>
//           ClassicalComponentsIncrement
//         </button>
//       </div>
//     );
//   }
// }

function MyComponent() {
  useEffect(() => {
    console.log("componnets mounted");

    return () => {
      console.log("component Unmounted");
    };
  }, []);

  return (
    <>
      <div>from inside my component</div>
    </>
  );
}
export default App;
