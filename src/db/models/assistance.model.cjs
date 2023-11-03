const { DataTypes, Model, Sequelize } = require("sequelize");
const { USER_TABLE } = require("./user.model.cjs");

const ASSISTANCE_TABLE = "assistance";
const AssistanceSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  userId: {
    allowNull: false,
    field: "user_id",
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  loginDate: {
    type: DataTypes.DATE,
    allowNull: false,
    field: "login_date",
    defaultValue: Sequelize.fn("now"),
  },
  logoutDate: {
    allowNull: true,
    field: "logout_date",
    type: DataTypes.DATE,
  },
};

class Assistance extends Model {
  static associate(models) {
    this.belongsTo(models.User, { as: "user" });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ASSISTANCE_TABLE,
      modelName: "Assistance",
      timestamps: false,
    };
  }
}

module.exports = { ASSISTANCE_TABLE, AssistanceSchema, Assistance };
