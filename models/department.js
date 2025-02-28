const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Department = sequelize.define("Department", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  program_id: { type: DataTypes.INTEGER, allowNull: false },
}, { timestamps: true });

module.exports = Department;
