const { DataTypes, Model } = require('sequelize');
const TODO_TABLE = 'todos';

const TodoSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  content: {
    allowNull: false,
    type: DataTypes.TEXT,
  },

  check: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
  },
};

class Todo extends Model {
  static associate(models) {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: TODO_TABLE,
      modelName: 'Todo',
      timestamps: false,
    };
  }
}

module.exports = { TODO_TABLE, TodoSchema, Todo };
