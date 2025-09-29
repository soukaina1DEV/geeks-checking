const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

router.get("/", bookController.getBooks); // GET /api/books
router.get("/:bookId", bookController.getBook); // GET /api/books/:bookId
router.post("/", bookController.createBook); // POST /api/books

module.exports = router;
