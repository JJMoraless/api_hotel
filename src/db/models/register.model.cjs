const {RATE_TABLE} = require('./rate.model.cjs')
const {DataTypes, Model} = require('sequelize')
const {USER_TABLE} = require('./user.model.cjs')
const {RESERVATION_TABLE} = require('./reservation.model.cjs')

const REGISTER_TABLE = 'registers'
const RegisterShema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  userId: {
    allowNull: false,
    field: 'user_id',
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },

  reservationId: {
    allowNull: false,
    field: 'reservation_id',
    unique: true,
    type: DataTypes.INTEGER,
    references: {
      model: RESERVATION_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  isCheckOut: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: 'is_check_out',
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at',
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: 'updated_at',
  },
  travel_reason: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  rateId: {
    type: DataTypes.INTEGER,
    field: 'rate_id',
    references: {
      model: RATE_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  regularPrice: {
    type: DataTypes.INTEGER,
    field: 'regular_price',
  },
  executivePrice: {
    type: DataTypes.INTEGER,
    field: 'executive_price',
  },
  priceSelected: {
    type: DataTypes.STRING,
    field: 'price_selected',
  },
  discount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  totalProducts: {
    type: DataTypes.VIRTUAL,
    get() {
      if (this?.products?.length > 0) {
        return this.products.reduce((total, product) => {
          return (
            total +
            product.RegisterProduct.amount * product.RegisterProduct.price
          )
        }, 0)
      }
      return null
    },
  },
  daysReserved: {
    type: DataTypes.VIRTUAL,
    get() {
      if (!this.reservation) return null
      const dateEntry = new Date(this.reservation.dateEntry)
      const dateOutput = new Date(this.reservation.dateOutput)
      const diferenciaEnMilisegundos = dateOutput - dateEntry
      const diferenciaEnDias = diferenciaEnMilisegundos / (1000 * 60 * 60 * 24)
      return Math.round(diferenciaEnDias)
    },
  },

  totalRoomReserved: {
    type: DataTypes.VIRTUAL,
    get() {
      if (!this.reservation) return null
      // const rate = this?.rate?.price || 1
      return this.reservation.priceRoom * Math.round(this.daysReserved)
    },
  },
}

class Register extends Model {
  static associate(models) {
    this.belongsTo(models.User, {
      as: 'user',
    })

    this.belongsTo(models.Reservation, {
      as: 'reservation',
    })

    this.belongsTo(models.Rate, {
      as: 'rate',
    })

    this.hasMany(models.Payment, {
      foreignKey: 'registerId',
      as: 'payments',
    })

    this.belongsToMany(models.Product, {
      through: models.RegisterProduct,
      as: 'products',
      foreignKey: 'registerId',
      otherKey: 'productId',
    })

    this.belongsToMany(models.Host, {
      through: models.RegisterCompanion,
      as: 'companions',
      foreignKey: 'registerId',
      otherKey: 'companionId',
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: REGISTER_TABLE,
      modelName: 'Register',
      timestamps: true,
    }
  }
}
module.exports = {
  REGISTER_TABLE,
  RegisterShema,
  Register,
}
