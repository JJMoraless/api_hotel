"use strict";

const { PRODUCT_TABLE, productSchema } = require("../models/product.model.cjs");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(PRODUCT_TABLE, productSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(PRODUCT_TABLE);
  },
};
