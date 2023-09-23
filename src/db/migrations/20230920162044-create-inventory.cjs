"use strict";

const {
  INVENTORY_TABLE,
  IventorySchema,
} = require("../models/inventory.model.cjs");

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(INVENTORY_TABLE, IventorySchema);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(INVENTORY_TABLE);
  },
};
