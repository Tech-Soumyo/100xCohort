import React, { useState } from "react";

export function UserMemo() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "gym",
      description: "at 6'o clock",
    },
    {
      id: 2,
      title: "refresh",
      description: "at 9'o clock",
    },
    {
      id: 3,
      title: "Coding",
      description: "at 10'o clock",
    },
  ]);

  const addTodo = () => {
    setTodo([
      ...todo,
      {
        id: todo.length + 1,
        title: Math.random(),
        description: Math.random(),
      },
    ]);
  };

  return (
    <>
      <div>
        <button onClick={addTodo}>Add a todo</button>
        {todo.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
          />
        ))}
      </div>
    </>
  );
}

export const Todo = ({ id, title, description }) => {
  return (
    <>
      <h1>{id}</h1>
      <div>{title}</div>
      <div>{description}</div>
    </>
  );
};
