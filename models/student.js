
const { DataTypes } = require("sequelize");
const {sequelize }= require("../config/db");
const Program = require("./program");
const Department = require("./department");
const Course = require("./course");

const Student = sequelize.define("Student", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(100), allowNull: false },
  email: { type: DataTypes.STRING(100), unique: true, allowNull: false },
  telegram_id: { type: DataTypes.INTEGER, unique: true, allowNull: false },
});

// Student belongs to a Program
Student.belongsTo(Program, { foreignKey: "program_id" });
Program.hasMany(Student, { foreignKey: "program_id" });

// Student belongs to a Department
Student.belongsTo(Department, { foreignKey: "department_id" });
Department.hasMany(Student, { foreignKey: "department_id" });

// Many-to-Many: Students can take many Courses
Student.belongsToMany(Course, { through: "student_courses", foreignKey: "student_id" });
Course.belongsToMany(Student, { through: "student_courses", foreignKey: "course_id" });

module.exports = Student;


  