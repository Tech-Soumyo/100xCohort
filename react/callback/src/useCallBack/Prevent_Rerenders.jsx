// When a parent component passes a function to a child component, the child may re-render unnecessarily if the function is re-created on each render. Let’s see how useCallback helps with this.

import { useCallback } from "react";
import { useState } from "react";

export const Child = ({ onClick }) => {
  console.log("Child rerender");
  return <button onClick={onClick}> Click Me </button>;
};

export const Parent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  console.log("parent rerender");

  return (
    <>
      <div>
        <h2>Child: {count};</h2>
        <Child onClick={handleClick} />
      </div>
    </>
  );
};

// Breakdown:

// Without useCallback: The handleClick function would be re-created on every render of Parent, causing the Child component to re-render unnecessarily, even if its props haven’t changed.

// With useCallback: The handleClick function is memoized, meaning it’s only re-created when count changes. This prevents the Child component from re-rendering unless necessary.
