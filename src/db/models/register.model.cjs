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
  createdAt: {
    type: DataTypes.DATE,
    field: "created_at",
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: "updated_at",
  },

  totalProducts: {
    type: DataTypes.VIRTUAL,
    get() {
      if (this?.products?.length > 0) {
        return this.products.reduce((total, product) => {
          return (
            total +
            product.RegisterProduct.amount * product.RegisterProduct.price
          );
        }, 0);
      }
      return 0;
    },
  },

  daysReserved: {
    type: DataTypes.VIRTUAL,
    get() {
      if (!this.reservation) return 0;
      const dateEntry = new Date(this.reservation.dateEntry);
      const dateOutput = new Date(this.reservation.dateOutput);
      const diferenciaEnMilisegundos = dateOutput - dateEntry;
      const diferenciaEnDias = diferenciaEnMilisegundos / (1000 * 60 * 60 * 24);
      return diferenciaEnDias;
    },
  },

  // daysStayed: {
  //   type: DataTypes.VIRTUAL,
  //   get() {
  //     if (!this.reservation) return 0;
  //     const dateEntry = new Date(this.createdAt);
  //     const dateOutput = new Date(this.updatedAt);
  //     const diferenciaEnMilisegundos = dateOutput - dateEntry;
  //     const diferenciaEnDias = diferenciaEnMilisegundos / (1000 * 60 * 60 * 24);
  //     return diferenciaEnDias;
  //   },
  // },

  totalReservation: {
    type: DataTypes.VIRTUAL,
    get() {
      if (!this.reservation) return 0;
      const dateEntry = new Date(this.reservation.dateEntry);
      const dateOutput = new Date(this.reservation.dateOutput);
      const diferenciaEnMilisegundos = dateOutput - dateEntry;
      const diferenciaEnDias = diferenciaEnMilisegundos / (1000 * 60 * 60 * 24);
      return this.reservation.priceRoom * diferenciaEnDias;
    },
  },
};

class Register extends Model {
  static associate(models) {
    this.belongsTo(models.User, { as: "user" });
    this.belongsTo(models.Reservation, { as: "reservation" });

    this.belongsToMany(models.Product, {
      through: models.RegisterProduct,
      as: "products",
      foreignKey: "registerId",
      otherKey: "productId",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: REGISTER_TABLE,
      modelName: "Register",
      timestamps: true,
    };
  }
}

module.exports = { REGISTER_TABLE, RegisterShema, Register };
