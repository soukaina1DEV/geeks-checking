import express from "express";
import axios from "axios";

const app = express();
app.use(express.json());

const PORT = 5000;
const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

let localPosts = [];


app.get("/api/posts", async (req, res) => {
  try {
    if (localPosts.length === 0) {
      const response = await axios.get(BASE_URL);
      localPosts = response.data;
    }
    res.json(localPosts);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

app.get("/api/posts/:id", (req, res) => {
  const post = localPosts.find((p) => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ error: "Post not found" });
  res.json(post);
});

app.post("/api/posts", async (req, res) => {
  try {
    const response = await axios.post(BASE_URL, req.body);

    const newPost = {
      id: localPosts.length + 1,
      ...req.body,
    };

    localPosts.push(newPost); 
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: "Failed to create post" });
  }
});

app.put("/api/posts/:id", async (req, res) => {
  try {
    const postIndex = localPosts.findIndex(
      (p) => p.id === parseInt(req.params.id)
    );

    if (postIndex === -1)
      return res.status(404).json({ error: "Post not found" });

    localPosts[postIndex] = {
      ...localPosts[postIndex],
      ...req.body,
    };

    await axios.put(`${BASE_URL}/${req.params.id}`, req.body);

    res.json(localPosts[postIndex]);
  } catch (err) {
    res.status(500).json({ error: "Failed to update post" });
  }
});

app.delete("/api/posts/:id", async (req, res) => {
  try {
    const postIndex = localPosts.findIndex(
      (p) => p.id === parseInt(req.params.id)
    );

    if (postIndex === -1)
      return res.status(404).json({ error: "Post not found" });

    localPosts.splice(postIndex, 1); 

    await axios.delete(`${BASE_URL}/${req.params.id}`);

    res.json({ message: "Post deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete post" });
  }
});


app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
