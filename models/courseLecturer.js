
const { DataTypes } = require("sequelize");
const {sequelize} = require("../config/db");
const Course = require("./course");
const Lecturer = require("./lecturer");

const CourseLecturer = sequelize.define("CourseLecturer", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  schedule_day: { type: DataTypes.STRING(50), allowNull: false },
  schedule_time: { type: DataTypes.TIME, allowNull: false },
});

Course.belongsToMany(Lecturer, { through: CourseLecturer, foreignKey: "course_id" });
Lecturer.belongsToMany(Course, { through: CourseLecturer, foreignKey: "lecturer_id" });

module.exports = CourseLecturer;
