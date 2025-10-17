import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h1>📝 Todo List (React + Redux Toolkit)</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
