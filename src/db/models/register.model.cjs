const { DataTypes, Model, Sequelize } = require("sequelize");
const { USER_TABLE } = require("./user.model.cjs");
const { RESERVATION_TABLE } = require("./reservation.model.cjs");

const REGISTER_TABLE = "registers";
const RegisterShema = {
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
  reservationId: {
    allowNull: false,
    field: "reservation_id",
    unique: true,
    type: DataTypes.INTEGER,
    references: {
      model: RESERVATION_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  isCheckOut: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: "is_check_out",
  },
  createAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "create_at",
    defaultValue: Sequelize.fn("now"),
  },
};

class Register extends Model {
  static associate(models) {
    this.belongsTo(models.User, { as: "user" });
    this.belongsTo(models.Reservation, { as: "reservation" });

    this.belongsToMany(models.Consumable, {
      through: models.RegisterConsumable,
      as: "consumables",
      foreignKey: "registerId",
      otherKey: "consumableId",
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: REGISTER_TABLE,
      modelName: "Register",
      timestamps: false,
    };
  }
}

module.exports = { REGISTER_TABLE, RegisterShema, Register };
