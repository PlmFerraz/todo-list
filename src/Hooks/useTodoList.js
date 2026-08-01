import { useState } from "react";

export default function useTodoList() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    console.log(todo);
    setTodos((prev) => {
      return [...prev, todo];
    });
  }

  function removeTodo() {}
  return {
    todos,
    addTodo,
  };
}
