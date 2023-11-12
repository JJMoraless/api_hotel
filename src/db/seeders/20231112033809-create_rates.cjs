"use strict";
const { faker } = require("@faker-js/faker");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const rates = [
      {
        price: 20000,
        type: "ejecutivo",
       
      },
      {
        price: 50000,
        type: "regular",
      },
  
    ];
    await queryInterface.bulkInsert("rates", rates);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("rates", null, {});
  },
};
