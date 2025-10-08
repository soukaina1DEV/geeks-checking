const db = require("../config/db");

const getAllTodos = () => db("tasks").select("*");

const getTodoById = (id) => db("tasks").where({ id }).first();

const createTodo = (title) => db("tasks").insert({ title }).returning("*");

const updateTodo = (id, title, completed) =>
  db("tasks").where({ id }).update({ title, completed }).returning("*");

const deleteTodo = (id) => db("tasks").where({ id }).del();

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
