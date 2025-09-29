module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: "postgres",
      password: "root",
      database: "userdb",
    },
    migrations: {
      directory: "./server/config/migrations",
    },
  },
};
