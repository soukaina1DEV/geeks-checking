const db = require("../config/db");

const getAllPosts = async () => {
  return db("posts").select("*").orderBy("id", "asc");
};

const getPostById = async (id) => {
  return db("posts").where({ id }).first(); // .first() = سطر واحد
};

const createPost = async (title, content) => {
  const [row] = await db("posts").insert({ title, content }, ["*"]); // returning *
  return row;
};

const updatePost = async (id, title, content) => {
  const [row] = await db("posts")
    .where({ id })
    .update({ title, content }, ["*"]);
  return row;
};

const deletePost = async (id) => {
  return db("posts").where({ id }).del(); // كيرجع عدد الأسطر المحذوفة
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
