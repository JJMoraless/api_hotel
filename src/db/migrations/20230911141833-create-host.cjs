"use strict";

const { HOST_TABLE, HostShema } = require("../models/host.model.cjs");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(HOST_TABLE, HostShema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(HOST_TABLE);
  },
};
