const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("sprint", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
