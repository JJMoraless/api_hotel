"use strict";

const { faker } = require("@faker-js/faker");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const rooms = [
      {
        number: 501,
        available: faker.datatype.boolean(),
        create_at: faker.date.future(),
        description: faker.lorem.paragraph(),
        floor: 4,
        img_url: faker.image.url(),
        price_per_night: faker.finance.amount(),
        type: faker.helpers.arrayElement(["ejecutiva", "familiar", "pobre"]),
      },
      {
        number: 502,
        available: faker.datatype.boolean(),
        create_at: faker.date.future(),
        description: faker.lorem.paragraph(),
        floor: 4,
        img_url: faker.image.url(),
        price_per_night: faker.finance.amount(),
        type: faker.helpers.arrayElement(["ejecutiva", "familiar", "pobre"]),
      },
      {
        number: 503,
        available: faker.datatype.boolean(),
        create_at: faker.date.future(),
        description: faker.lorem.paragraph(),
        floor: 4,
        img_url: faker.image.url(),
        price_per_night: faker.finance.amount(),
        type: faker.helpers.arrayElement(["ejecutiva", "familiar", "pobre"]),
      },
    ];
    await queryInterface.bulkInsert("rooms", rooms);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("rooms", null, {});
  },
};
