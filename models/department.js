
const { DataTypes } = require("sequelize");
const {sequelize }= require("../config/db");
const Program = require("./program");

const Department = sequelize.define("Department", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(100), unique: true, allowNull: false },
});

Program.hasMany(Department, { foreignKey: "program_id" });
Department.belongsTo(Program, { foreignKey: "program_id" });

module.exports = Department;

