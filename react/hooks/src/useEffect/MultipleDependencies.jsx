import React, { useState, useEffect } from "react";

export function ComplexComponent() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  // Effect for fetching data
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []); // Run once when component mounts

  // Effect for logging count changes
  useEffect(() => {
    console.log("Count has been updated:", count);
  }, [count]); // Run when `count` changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <h2>Data</h2>
      {data.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}