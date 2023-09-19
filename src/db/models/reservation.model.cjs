const { DataTypes, Model, Sequelize } = require("sequelize");
const { ROOM_TABLE } = require("./room.model.cjs");
const { USER_TABLE } = require("./user.model.cjs");
const { HOST_TABLE } = require("./host.model.cjs");

const RESERVATION_TABLE = "reservations";
const ReservationShema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  roomNumber: {
    field: "room_number",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ROOM_TABLE,
      key: "number",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
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
  hostDocument: {
    allowNull: false,
    field: "host_document",
    type: DataTypes.STRING,
    references: {
      model: HOST_TABLE,
      key: "document",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  dateEntry: {
    type: DataTypes.DATE,
    allowNull: false,
    field: "date_entry",
  },
  dateOutput: {
    type: DataTypes.DATE,
    allowNull: false,
    field: "date_output",
  },
  days: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  numChildrens: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: "num_childres",
  },
  numAdults: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: "num_adults",
  },
  state: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  createAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "create_at",
    defaultValue: Sequelize.fn("now"),
  },
};

class Reservation extends Model {
  static associate(models) {
    this.belongsTo(models.Room, { as: "room" });
    this.belongsTo(models.User, { as: "user" });
    this.belongsTo(models.Host, { as: "host" });
    this.hasOne(models.Register, {
      as: "registro",
      foreignKey: "reservationId",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: RESERVATION_TABLE,
      modelName: "Reservation",
      timestamps: false,
    };
  }
}

module.exports = { RESERVATION_TABLE, ReservationShema, Reservation };
