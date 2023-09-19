const { DataTypes, Model, Sequelize } = require("sequelize");

const BILL_TABLE = "bills";

const consumableShema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  registerId: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  totalPerStay: {
    allowNull: true,
    type: DataTypes.INTEGER,
  },
  totalPerConsumable: {
    allowNull: true,
    type: DataTypes.INTEGER,
  },
  createAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "create_at",
    defaultValue: Sequelize.fn("now"),
  }
};

class Consumable extends Model {
  static associate() {}
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
