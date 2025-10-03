const db = require("../config/db");

const getAllBooks = () => {
  return db("books").select("*").orderBy("id", "asc");
};

const getBookById = (id) => {
  return db("books").where({ id }).first();
};

const createBook = async (title, author, publishedYear) => {
  const [row] = await db("books").insert({ title, author, publishedYear }, [
    "*",
  ]);
  return row;
};

module.exports = { getAllBooks, getBookById, createBook };
