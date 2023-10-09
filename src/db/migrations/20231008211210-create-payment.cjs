"use strict";
const { PAYMENT_TABLE, PaymentSchema } = require("../models/payment.model.cjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(PAYMENT_TABLE, PaymentSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(PAYMENT_TABLE);
  },
};
