import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>To-Do List</h1>
      <AddTodo />
      <TodoList />
    </>
  );
}

export default App;
