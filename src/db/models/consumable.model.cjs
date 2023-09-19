const { DataTypes, Model, Sequelize } = require("sequelize");

const CONSUMABLE_TABLE = "consumables";

const consumableShema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  stock: {
    allowNull: true,
    type: DataTypes.INTEGER,
  },
  createAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "create_at",
    defaultValue: Sequelize.fn("now"),
  },
  price: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
};

class Consumable extends Model {
  static associate() {
    
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: CONSUMABLE_TABLE,
      modelName: "Consumable",
      timestamps: false,
    };
  }
}

module.exports = { CONSUMABLE_TABLE, consumableShema, Consumable };
