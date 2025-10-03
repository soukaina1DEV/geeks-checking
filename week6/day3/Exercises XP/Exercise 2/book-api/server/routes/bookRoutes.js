const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

router.get("/", bookController.getBooks);
router.get("/:bookId", bookController.getBook);
router.post("/", bookController.createBook);

module.exports = router;
