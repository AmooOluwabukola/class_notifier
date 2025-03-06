

const { DataTypes } = require("sequelize");
const {sequelize} = require("../config/db");

const Program = sequelize.define("Program", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(100), unique: true, allowNull: false },
});

module.exports = Program;

