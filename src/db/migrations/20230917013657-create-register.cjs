"use strict";

const {
  REGISTER_TABLE,
  RegisterShema,
} = require("../models/register.model.cjs");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(REGISTER_TABLE, RegisterShema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(REGISTER_TABLE);
  },
};
