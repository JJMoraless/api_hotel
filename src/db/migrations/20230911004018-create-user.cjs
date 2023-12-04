'use strict'
const { USER_TABLE, UserShema } = require('../models/user.model.cjs')

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserShema)
  },

  async down(queryInterface) {
    await queryInterface.dropTable(USER_TABLE)
  },
}
