const {RATE_TABLE} = require('./rate.model.cjs')
const {DataTypes, Model, Sequelize} = require('sequelize')
const ROOM_TABLE = 'rooms'

const RoomShema = {
  number: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  pricePerNight: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'price_per_night',
  },
  floor: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  type: {
    allowNull: false,
    type: DataTypes.STRING(50),
  },
  available: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
  },
  description: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  imgUrl: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'img_url',
  },
  createAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.fn('now'),
  },
}
class Room extends Model {
  static associate(models) {
    this.hasMany(models.Reservation, {
      foreignKey: 'roomNumber',
      as: 'reservations',
    })

    this.belongsToMany(models.Product, {
      through: models.Inventary,
      as: 'products',
      foreignKey: 'roomNumber',
      otherKey: 'productId',
    })
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: ROOM_TABLE,
      modelName: 'Room',
      timestamps: false,
    }
  }
}

module.exports = {
  ROOM_TABLE,
  RoomShema,
  Room,
}
