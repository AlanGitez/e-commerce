const Sequelize = require("sequelize");

const db = new Sequelize("semiYa", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;
