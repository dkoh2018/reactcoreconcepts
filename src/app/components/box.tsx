"use client";

import React, { useState } from "react";

const Box = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input) {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const deleteTodo = (indexToDelete: number) => {
    setTodos((currentTodos) =>
      currentTodos.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <div className="todo-container">
      <h2 className="todo-title">Todo List</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todo-input"
        placeholder="Add todo..."
      />
      <button onClick={addTodo} className="todo-button">
        Add Item
      </button>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            {todo}
            <button
              onClick={() => deleteTodo(index)}
              className="todo-delete-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Box;
