"use strict";

const {
  CONSUMABLE_TABLE,
  consumableShema,
} = require("../models/consumable.model.cjs");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(CONSUMABLE_TABLE, consumableShema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(CONSUMABLE_TABLE);
  },
};
