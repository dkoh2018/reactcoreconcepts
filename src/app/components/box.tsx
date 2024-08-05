"use client";

import React, { useState } from "react";

const Box = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input) {
      const todo: TodoItem = {
        date_created: new Date(),
        text: input,
        completion_status: false,
      };
      setTodos((prevTodos) => [...prevTodos, todo]);
      setInput("");
    }
  };

  const deleteTodo = (indexToDelete: number) => {
    setTodos((currentTodos) =>
      currentTodos.filter((_, index) => index !== indexToDelete)
    );
  };

  interface TodoItem {
    date_created: Date;
    text: string;
    completion_status: boolean;
  }

  return (
    <div className="todo-container">
      <h2 className="todo-title">Todo List</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            addTodo();
          }
        }}
        className="todo-input"
        placeholder="Add todo..."
      />
      <button onClick={addTodo} className="todo-button">
        Add Item
      </button>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            {todo.text}
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
