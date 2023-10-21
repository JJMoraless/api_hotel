"use strict";

const {
  REGISTER_COMPANION_TABLE,
  RegisterCompanionSchema,
} = require("../models/register-companion.cjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(REGISTER_COMPANION_TABLE, RegisterCompanionSchema);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(REGISTER_COMPANION_TABLE);
  },
};
