import { useState } from "react";

export default function useTodoList() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos((prev) => {
      return [...prev, todo];
    });
  }

  function removeTodo(item) {
    setTodos((prev) => {
      return prev.filter((todo) => {
        return todo != item;
      });
    });
  }
  return {
    removeTodo,
    todos,
    addTodo,
  };
}
