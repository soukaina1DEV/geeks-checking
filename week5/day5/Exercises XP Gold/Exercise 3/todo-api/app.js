import express from "express";

const app = express();
const PORT = 5000;

app.use(express.json());

let todos = [];
let nextId = 1;

app.post("/api/todos", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  const newTodo = {
    id: nextId++,
    title,
    completed: false,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.get("/api/todos", (req, res) => {
  res.json(todos);
});

app.get("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  res.json(todo);
});

app.put("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  const { title, completed } = req.body;

  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;

  res.json(todo);
});

app.delete("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }

  todos.splice(index, 1);
  res.json({ message: "Todo deleted successfully" });
});


app.listen(PORT, () => {
  console.log(`🚀 Todo API running at http://localhost:${PORT}`);
});
