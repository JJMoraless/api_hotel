const { DataTypes, Model, Sequelize } = require("sequelize");

const HOST_TABLE = "host";
const HostShema = {
  document: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  birthdayDate: {
    allowNull: true,
    type: DataTypes.DATE,
    field: "birthday_date",
  },
  email: {
    allowNull: true,
    type: DataTypes.STRING,
    unique: true,
  },
  addres: {
    allowNull: true,
    type: DataTypes.STRING(100),
  },
  city: {
    allowNull: true,
    type: DataTypes.STRING(50),
  },
  country: {
    allowNull: true,
    type: DataTypes.STRING(50),
  },
  createAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "create_at",
    defaultValue: Sequelize.fn("now"),
  },
  numberPhone: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "number_phone",
  },
  occupation: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  company: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  document_type: {
    allowNull: true,
    type: DataTypes.STRING,
  },
};

class Host extends Model {
  static associate() {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: HOST_TABLE,
      modelName: "Host",
      timestamps: false,
    };
  }
}

module.exports = { HOST_TABLE, HostShema, Host };
