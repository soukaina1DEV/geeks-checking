import { Todolist } from "./todo.js";

const todoList = new Todolist();

todoList.addTask({ title: "Task 1", completed: false });
todoList.addTask({ title: "Task 2", completed: false });

todoList.markTaskAsCompleted("Task 1");

console.log(todoList.getTasks());
