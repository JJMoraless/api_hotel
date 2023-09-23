"use strict";

const {
  REGISTER_PRODUCT_TABLE,
  RegisterProductSchema,
} = require("../models/register-product.model.cjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      REGISTER_PRODUCT_TABLE,
      RegisterProductSchema
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(REGISTER_PRODUCT_TABLE);
  },
};
