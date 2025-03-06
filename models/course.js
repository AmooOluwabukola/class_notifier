const { DataTypes } = require("sequelize");
const {sequelize }= require("../config/db");
const Department = require("./department");



const Course = sequelize.define("Course", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(100), allowNull: false },
});

Department.hasMany(Course, { foreignKey: "department_id" });
Course.belongsTo(Department, { foreignKey: "department_id" });

module.exports = Course;


