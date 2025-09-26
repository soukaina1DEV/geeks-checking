import express from "express";
const app = express();
app.use(express.json());
const PORT = 3000;

import { fetchPosts } from "./data/dataService.js";

app.get("/posts", async (req, res) => {
  try {
    const posts = await fetchPosts();
    res.json(posts);
    console.log("Posts fetched successfully:", posts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});