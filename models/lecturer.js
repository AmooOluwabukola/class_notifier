const { DataTypes } = require("sequelize");
const {sequelize} = require("../config/db");

const Lecturer = sequelize.define("Lecturer", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(100), allowNull: false },
  email: { type: DataTypes.STRING(100), unique: true, allowNull: false },
  telegram_id: { type: DataTypes.INTEGER, unique: true, allowNull: false },
});

module.exports = Lecturer;
