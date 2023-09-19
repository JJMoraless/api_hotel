"use strict";

const {
  REGISTER_CONSUMABLE_TABLE,
  RegisterConsumableSchema,
} = require("../models/register-consumable.cjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      REGISTER_CONSUMABLE_TABLE,
      RegisterConsumableSchema
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(REGISTER_CONSUMABLE_TABLE);
  },
};
