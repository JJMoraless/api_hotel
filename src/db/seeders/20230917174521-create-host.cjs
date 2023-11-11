"use strict";
const { faker } = require("@faker-js/faker");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const host = [
      {
        document: "1",
        name: faker.person.firstName(),
        birthday_date: faker.date.birthdate(),
        city: "ciudad",
        country: "pais",
        email: faker.internet.email(),
        number_phone: "121212",
        occupation: faker.person.jobArea(),
      },
      {
        document: "2",
        name: faker.person.firstName(),
        birthday_date: faker.date.birthdate(),
        city: "ciudad",
        country: "pais",
        email: faker.internet.email(),
        number_phone: "12121212121",
        occupation: faker.person.jobArea(),
      },
      {
        document: "3",
        name: faker.person.firstName(),
        birthday_date: faker.date.birthdate(),
        email: faker.internet.email(),
        number_phone: "121212",
        occupation: faker.person.jobArea(),
      },
      {
        document: "4",
        name: faker.person.firstName(),
        birthday_date: faker.date.birthdate(),
        email: faker.internet.email(),
        number_phone: faker.string.numeric(),
        occupation: faker.person.jobArea(),
      },
    ];
    await queryInterface.bulkInsert("host", host);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("host", null, {});
  },
};
