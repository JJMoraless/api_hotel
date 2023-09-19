const { DataTypes, Model, Sequelize } = require("sequelize");
const { REGISTER_TABLE } = require("./register.model.cjs");
const { CONSUMABLE_TABLE } = require("./consumable.model.cjs");

const REGISTER_CONSUMABLE_TABLE = "registers_comsumables";
const RegisterConsumableSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
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
  consumableId: {
    allowNull: false,
    field: "consumable_id",
    unique: true,
    type: DataTypes.INTEGER,
    references: {
      model: CONSUMABLE_TABLE,
      key: "id",
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

class RegisterConsumable extends Model {
  static associate(models) {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: REGISTER_CONSUMABLE_TABLE,
      modelName: "RegisterConsumable",
      timestamps: false,
    };
  }
}

module.exports = {
  REGISTER_CONSUMABLE_TABLE,
  RegisterConsumableSchema,
  RegisterConsumable,
};
