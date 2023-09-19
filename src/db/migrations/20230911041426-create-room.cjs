'use strict';
const { ROOM_TABLE, RoomShema} = require("../models/room.model.cjs");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(ROOM_TABLE, RoomShema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(ROOM_TABLE);
  }
};
