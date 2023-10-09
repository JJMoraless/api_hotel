const { DataTypes, Model, Sequelize } = require("sequelize");
const { REGISTER_TABLE } = require("./register.model.cjs");

const PAYMENT_TABLE = "payments";
const PaymentSchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  registerId: {
    allowNull: false,
    field: "register_id",
    unique: true,
    type: DataTypes.INTEGER,
    references: {
      model: REGISTER_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  method: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
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
class Payment extends Model {
  static associate() {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: PAYMENT_TABLE,
      modelName: "Payment",
      timestamps: true,
    };
  }
}
module.exports = {
  PAYMENT_TABLE,
  PaymentSchema,
  Payment,
};
