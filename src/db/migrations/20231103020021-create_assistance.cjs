"use strict";

const {
  ASSISTANCE_TABLE,
  AssistanceSchema,
} = require("../models/assistance.model.cjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(ASSISTANCE_TABLE, AssistanceSchema);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(ASSISTANCE_TABLE);
  },
};
