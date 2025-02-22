// When to Use useCallback

// Optimizing child component re-renders: When a parent component re-renders, its child components may also re-render, especially if a function is passed as a prop. useCallback helps to avoid this by ensuring that the same function reference is passed to the child unless one of its dependencies changes.

// Event handlers: If you have event handlers inside a component that don’t change frequently, you can use useCallback to prevent them from being re-created on every render.
import { useCallback, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  console.log("counter rerendered");

  return (
    <>
      <div>
        <h2>Count: {count}</h2>
        <button onClick={increment}>Increment</button>
      </div>
    </>
  );
};

// Breakdown:

// Without useCallback, the increment function would be recreated on every render, which could cause unnecessary re-renders if the function is passed as a prop to child components.

// With useCallback, the increment function is memoized and re-created only when necessary (in this case, never, because it has no dependencies).
