const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "root",
    database: "blogdb",
    port: 5432,
  },
});

module.exports = db;
