import {HOST_TABLE} from './host.model.cjs'

const {DataTypes, Model, Sequelize} = require('sequelize')
const {USER_TABLE} = require('./user.model.cjs')

const EMERGENCY_CONTACT_TABLE = 'emergency_contacts'
const AssistanceSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  hostDocument: {
    allowNull: false,
    field: 'host_document',
    type: DataTypes.STRING,
    references: {
      model: HOST_TABLE,
      key: 'document',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  relationship: {
    type: DataTypes.STRING(100),
    allowNull: false,
    field: 'relationship',
  },
  numberPhone: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'number_phone',
  },
}

class EmergencyContact extends Model {
  static associate(models) {
    this.belongsTo(models.Host, {as: 'host'})
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ASSISTANCE_TABLE,
      modelName: 'EmergencyContact',
      timestamps: false,
    }
  }
}

module.exports = {ASSISTANCE_TABLE, AssistanceSchema, Assistance}
