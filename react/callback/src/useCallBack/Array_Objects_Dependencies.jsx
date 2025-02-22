// useCallback with Arrays or Objects as Dependencies

// When working with arrays or objects as dependencies, it’s important to remember that changes to the reference of these objects (even if their contents remain the same) will trigger the function to be re-created.

import React, { useState, useCallback } from "react";

function FilterComponent({ onFilter }) {
  console.log("FilterComponent rendered");
  return <button onClick={onFilter}>Filter Data</button>;
}

export function ArrObjDep() {
  const [data, setData] = useState([1, 2, 3, 4, 5]);

  // Function to increase data by last index + 1
  const increaseData = useCallback(() => {
    const newData = [...data, data[data.length - 1] + 1];
    setData(newData);
  }, [data]);

  console.log("Parent rendered");

  return (
    <div>
      <FilterComponent onFilter={increaseData} /> {/* Pass increaseData */}
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// Here's a breakdown

// increaseData Memoization:

// The useCallback hook memoizes the increaseData function, meaning it will only be recreated if its dependencies (the data array) change.
// Since data is only updated when the user clicks the button, increaseData will only be recreated in those cases.
// Dependency Optimization:

// The increaseData function only depends on the data array.
// As long as data remains unchanged, increaseData will not be recreated, preventing unnecessary re-renders of the FilterComponent.
// Controlled Re-renders:

// The FilterComponent is only re-rendered when its onFilter prop changes (i.e., when the user clicks the button).
// Since onFilter is set to increaseData, it will only re-render if increaseData changes, which, as discussed earlier, is only when data changes.
// Therefore, the use of useCallback effectively prevents unnecessary re-renders in this code, leading to better performance and a more efficient component.
