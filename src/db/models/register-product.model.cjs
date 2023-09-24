const { DataTypes, Model, Sequelize } = require("sequelize");

const { REGISTER_TABLE } = require("./register.model.cjs");
const { PRODUCT_TABLE } = require("./product.model.cjs");

const REGISTER_PRODUCT_TABLE = "register_product";
const RegisterProductSchema = {
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
  productId: {
    allowNull: false,
    field: "product_id",
    type: DataTypes.INTEGER,
    references: {
      model: PRODUCT_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  amount: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  price: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  createAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "create_at",
    defaultValue: Sequelize.fn("now"),
  },
  total: {
    type: DataTypes.VIRTUAL,
    get() {
      return this.price * this.amount;
    },
  },
};

class RegisterProduct extends Model {
  static associate(models) {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: REGISTER_PRODUCT_TABLE,
      modelName: "RegisterProduct",
      timestamps: false,
    };
  }
}

module.exports = {
  REGISTER_PRODUCT_TABLE,
  RegisterProductSchema,
  RegisterProduct,
};
