const { DataTypes, Model, Sequelize } = require("sequelize");

const USER_TABLE = "users";
const UserShema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  ficha: {
    allowNull: true,
    type: DataTypes.STRING(40),
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING(100),
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING(100),
    unique: true,
  },
  numberPhone: {
    allowNull: false,
    type: DataTypes.STRING(100),
    field: "number_phone",
  },
  addres: {
    allowNull: false,
    type: DataTypes.STRING(100),
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING(100),
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  state: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: "active",
  },
  document: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  createAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "create_at",
    defaultValue: Sequelize.fn("now"),
  },
};

class User extends Model {
  static associate() {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: "User",
      timestamps: false,
    };
  }
}

module.exports = { USER_TABLE, UserShema, User };
