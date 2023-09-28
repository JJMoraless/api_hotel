const { DataTypes, Model, Sequelize } = require("sequelize");
import { REGISTER_TABLE } from "./register.model.cjs";

const PAYMENT_TABLE = "payments";
const PaymentSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  registerId: {
    allowNull: false,
    field: "user_id",
    unique: true,
    type: DataTypes.INTEGER,
    references: {
      model: REGISTER_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  type: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  
  createdAt: {
    type: DataTypes.DATE,
    field: "created_at",
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: "updated_at",
  },
};

class Consumable extends Model {
  static associate() {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: CONSUMABLE_TABLE,
      modelName: "Consumable",
      timestamps: true,
    };
  }
}

module.exports = { CONSUMABLE_TABLE, consumableShema, Consumable };
