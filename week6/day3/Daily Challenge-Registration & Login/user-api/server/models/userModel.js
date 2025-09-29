const db = require("../config/db");

async function createUser(user, trx) {
  const [newUser] = await trx("users").insert(user).returning("*");
  return newUser;
}

async function storePassword(hashObj, trx) {
  const [newPwd] = await trx("hashpwd").insert(hashObj).returning("*");
  return newPwd;
}

async function getAllUsers() {
  return db("users").select("*");
}

async function getUserById(id) {
  return db("users").where({ id }).first();
}

async function getPasswordByUsername(username) {
  return db("hashpwd").where({ username }).first();
}

async function updateUser(id, data) {
  return db("users").where({ id }).update(data).returning("*");
}

module.exports = {
  createUser,
  storePassword,
  getAllUsers,
  getUserById,
  getPasswordByUsername,
  updateUser,
};
