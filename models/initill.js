const sequelize = require("../db");

const Author = require("./Authors");

const init = async () => {
  await Author.sync({ alter: true });
};

module.exports = { init, Author };
