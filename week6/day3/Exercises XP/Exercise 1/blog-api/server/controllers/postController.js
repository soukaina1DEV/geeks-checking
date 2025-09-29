const Post = require("../models/postModel");

const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.getAllPosts();
    res.json(posts);
  } catch (err) {
    next(err);
  }
};

const getPost = async (req, res, next) => {
  try {
    const post = await Post.getPostById(req.params.id);
    if (!post) return res.status(404).json({ error: "Post not found" });
    res.json(post);
  } catch (err) {
    next(err);
  }
};

const createPost = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const newPost = await Post.createPost(title, content);
    res.status(201).json(newPost);
  } catch (err) {
    next(err);
  }
};

const updatePost = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const updated = await Post.updatePost(req.params.id, title, content);
    if (!updated) return res.status(404).json({ error: "Post not found" });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

const deletePost = async (req, res, next) => {
  try {
    await Post.deletePost(req.params.id);
    res.json({ message: "Post deleted successfully" });
  } catch (err) {
    next(err);
  }
};

module.exports = { getPosts, getPost, createPost, updatePost, deletePost };
