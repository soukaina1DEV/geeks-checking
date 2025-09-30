const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const filePath = path.join(__dirname, "../../tasks.json");

function readTasks() {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading tasks.json:", err);
    return [];
  }
}

function writeTasks(tasks) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
  } catch (err) {
    console.error("Error writing tasks.json:", err);
  }
}

router.get("/", (req, res) => {
  const tasks = readTasks();
  res.json(tasks);
});

router.get("/:id", (req, res) => {
  const tasks = readTasks();
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }
  res.json(task);
});

router.post("/", (req, res) => {
  const { title, completed } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  const tasks = readTasks();
  const newTask = {
    id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
    title,
    completed: completed || false,
  };

  tasks.push(newTask);
  writeTasks(tasks);

  res.status(201).json({ message: "Task created successfully", task: newTask });
});

router.put("/:id", (req, res) => {
  const { title, completed } = req.body;
  const tasks = readTasks();
  const taskIndex = tasks.findIndex((t) => t.id === parseInt(req.params.id));

  if (taskIndex === -1) {
    return res.status(404).json({ error: "Task not found" });
  }

  if (!title && completed === undefined) {
    return res
      .status(400)
      .json({ error: "Provide title or completed status to update" });
  }

  tasks[taskIndex] = {
    ...tasks[taskIndex],
    title: title !== undefined ? title : tasks[taskIndex].title,
    completed: completed !== undefined ? completed : tasks[taskIndex].completed,
  };

  writeTasks(tasks);
  res.json({ message: "Task updated successfully", task: tasks[taskIndex] });
});

router.delete("/:id", (req, res) => {
  const tasks = readTasks();
  const filteredTasks = tasks.filter((t) => t.id !== parseInt(req.params.id));

  if (tasks.length === filteredTasks.length) {
    return res.status(404).json({ error: "Task not found" });
  }

  writeTasks(filteredTasks);
  res.json({ message: "Task deleted successfully" });
});

module.exports = router;
