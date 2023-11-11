'use strict'

const {RATE_TABLE, RateSchema} = require('../models/rate.model.cjs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(RATE_TABLE, RateSchema)
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(RATE_TABLE)
  },
}
