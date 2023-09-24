const { DataTypes, Model, Sequelize } = require("sequelize");
const { ROOM_TABLE } = require("./room.model.cjs");
const { PRODUCT_TABLE } = require("./product.model.cjs");

const INVENTORY_TABLE = "inventory";
const IventorySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  productId: {
    allowNull: false,
    field: "product_id",
    type: DataTypes.INTEGER,
    references: {
      model: PRODUCT_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  roomNumber: {
    allowNull: false,
    field: "room_number",
    type: DataTypes.INTEGER,
    references: {
      model: ROOM_TABLE,
      key: "number",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  amount: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  createAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "create_at",
    defaultValue: Sequelize.fn("now"),
  },
};

class Inventory extends Model {
  static associate(models) {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: INVENTORY_TABLE,
      modelName: "Inventary",
      timestamps: false,
    };
  }
}

module.exports = {
  INVENTORY_TABLE,
  IventorySchema,
  Inventory,
};
