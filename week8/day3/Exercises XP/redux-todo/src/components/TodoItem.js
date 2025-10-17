import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../features/todos/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f8f9fa",
        padding: "10px",
        borderRadius: "8px",
        marginBottom: "8px",
      }}
    >
      <span
        onClick={() => dispatch(toggleTodo(todo.id))}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
          flex: 1,
        }}
      >
        {todo.text}
      </span>
      <button
        onClick={() => dispatch(removeTodo(todo.id))}
        style={{
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "5px 10px",
          cursor: "pointer",
        }}
      >
        X
      </button>
    </li>
  );
};

export default TodoItem;
