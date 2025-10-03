module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: "postgres",
      password: "root",
      database: "booksdb",
      port: 5432,
    },
    migrations: {
      directory: "./server/config/migrations",
    },
  },
};
