const Todo = require("../models/todoModel");

const getTodos = async (req, res, next) => {
  try {
    const todos = await Todo.getAllTodos();
    res.json(todos);
  } catch (err) {
    next(err);
  }
};

const getTodo = async (req, res, next) => {
  try {
    const todo = await Todo.getTodoById(req.params.id);
    if (!todo) return res.status(404).json({ error: "Todo not found" });
    res.json(todo);
  } catch (err) {
    next(err);
  }
};

const createTodo = async (req, res, next) => {
  try {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: "Title is required" });
    const [newTodo] = await Todo.createTodo(title);
    res.status(201).json(newTodo);
  } catch (err) {
    next(err);
  }
};

const updateTodo = async (req, res, next) => {
  try {
    const { title, completed } = req.body;
    const [updated] = await Todo.updateTodo(req.params.id, title, completed);
    if (!updated) return res.status(404).json({ error: "Todo not found" });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

const deleteTodo = async (req, res, next) => {
  try {
    const deleted = await Todo.deleteTodo(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Todo not found" });
    res.json({ message: "Todo deleted successfully" });
  } catch (err) {
    next(err);
  }
};

module.exports = { getTodos, getTodo, createTodo, updateTodo, deleteTodo };
