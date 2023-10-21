const { DataTypes, Model } = require("sequelize");
const { REGISTER_TABLE } = require("./register.model.cjs");
const { HOST_TABLE } = require("./host.model.cjs");

const REGISTER_COMPANION_TABLE = "register_companion";
const RegisterCompanionSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  registerId: {
    allowNull: false,
    field: "register_id",
    type: DataTypes.INTEGER,
    references: {
      model: REGISTER_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  companionId: {
    allowNull: false,
    field: "companion_id",
    type: DataTypes.STRING,
    references: {
      model: HOST_TABLE,
      key: "document",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
};

class RegisterCompanion extends Model {
  static associate(models) {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: REGISTER_COMPANION_TABLE,
      modelName: "RegisterCompanion",
      timestamps: false,
    };
  }
}

module.exports = {
  REGISTER_COMPANION_TABLE,
  RegisterCompanionSchema,
  RegisterCompanion,
};
