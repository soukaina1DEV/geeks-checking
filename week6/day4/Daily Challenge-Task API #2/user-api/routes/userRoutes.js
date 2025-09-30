const express = require("express");
const {
  register,
  login,
  getAllUsers,
  getUserById,
  updateUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/", getAllUsers);

router.get("/:id", getUserById);

router.put("/:id", updateUser);

module.exports = router;
