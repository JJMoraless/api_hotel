"use strict";

const { TODO_TABLE, TodoSchema, Todo } = require("../models/todo.model.cjs");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(TODO_TABLE, TodoSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(TODO_TABLE);
  },
};
