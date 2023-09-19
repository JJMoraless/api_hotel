"use strict";

const {
  RESERVATION_TABLE,
  ReservationShema,
} = require("../models/reservation.model.cjs");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(RESERVATION_TABLE, ReservationShema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(RESERVATION_TABLE);
  },
};
