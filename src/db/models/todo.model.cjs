const { DataTypes, Model, Sequelize } = require("sequelize");
const TODO_TABLE = "todos";

const TodoSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING(50),
  },
  description: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
};

class Room extends Model {
  static associate(models) {
    this.hasMany(models.Reservation, {
      foreignKey: "roomNumber",
      as: "reservations",
    });

    this.belongsToMany(models.Product, {
      through: models.Inventary,
      as: "products",
      foreignKey: "roomNumber",
      otherKey: "productId",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ROOM_TABLE,
      modelName: "Room",
      timestamps: false,
    };
  }
}

module.exports = { ROOM_TABLE, RoomShema, Room };
