"use strict";

const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        username: "sabrina",
        password: await bcrypt.hash("sabrina cakep", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "mazgun",
        password: await bcrypt.hash("gun forever", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    const Op = Sequelize.Op;

    return queryInterface.bulkDelete("Users", {
      [Op.or]: [{ username: "sabrina" }, { username: "mazgun" }],
    });
  },
};
