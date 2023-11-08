const {DataTypes, Model} = require('sequelize')

const RATE_TABLE = 'rates'
const RateSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  type: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  price: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
}
class Rate extends Model {
  static associate(models) {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: RATE_TABLE,
      modelName: 'Rate',
      timestamps: false,
    }
  }
}
module.exports = {
  RATE_TABLE,
  RateSchema,
  Rate,
}
