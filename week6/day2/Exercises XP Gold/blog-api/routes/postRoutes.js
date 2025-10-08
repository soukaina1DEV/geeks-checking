const express = require("express");
const router = express.Router();

let posts = [];
let nextId = 1;

router.get("/", (req, res) => {
  res.json(posts);
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  res.json(post);
});

router.post("/", (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required" });
  }

  const newPost = {
    id: nextId++,
    title,
    content,
    timestamp: new Date(),
  };

  posts.push(newPost);
  res.status(201).json(newPost);
});

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;

  const postIndex = posts.findIndex((p) => p.id === id);

  if (postIndex === -1) {
    return res.status(404).json({ error: "Post not found" });
  }

  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required" });
  }

  posts[postIndex] = {
    ...posts[postIndex],
    title,
    content,
    timestamp: new Date(),
  };

  res.json(posts[postIndex]);
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const postIndex = posts.findIndex((p) => p.id === id);

  if (postIndex === -1) {
    return res.status(404).json({ error: "Post not found" });
  }

  posts.splice(postIndex, 1);
  res.json({ message: "Post deleted successfully" });
});

module.exports = router;
