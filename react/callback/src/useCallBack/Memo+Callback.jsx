// useCallback with useMemo

// You often use useCallback together with useMemo when working with both function memoization and derived state.

import React, { useState, useMemo, useCallback } from "react";

function DataList({ data, onDelete }) {
  console.log("DataList rendered");
  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => onDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export function MemoCall() {
  const [items, setItems] = useState(["Apple", "Banana", "Cherry", "Date"]);
  const [filter, setFilter] = useState("");

  // Memoize the filtered data based on the filter state
  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  // Memoize the delete function to prevent unnecessary re-renders of DataList
  const handleDelete = useCallback((index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  }, []);

  console.log("ParentComponent rendered");

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter items"
      />
      <DataList data={filteredItems} onDelete={handleDelete} />
    </div>
  );
}

// Breakdown:

// useMemo: Memoizes the filtered items so that the filtering operation only happens when items or filter change.

// useCallback: Memoizes the handleDelete function to prevent unnecessary re-renders of the DataList component. Since the function reference doesn’t change, the child component doesn’t re-render unless the data it depends on changes.
