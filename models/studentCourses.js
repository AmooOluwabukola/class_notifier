const { DataTypes } = require("sequelize");
const {sequelize }= require("../config/db");
const Student = require("./student");
const Course = require("./course");
const Lecturer = require("./lecturer");

const StudentCourse = sequelize.define("StudentCourse", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

// Many-to-Many: Students & Courses
Student.belongsToMany(Course, { through: StudentCourse, foreignKey: "student_id" });
Course.belongsToMany(Student, { through: StudentCourse, foreignKey: "course_id" });

// Student-Course also has a Lecturer (each course is taught by a lecturer)
Lecturer.hasMany(StudentCourse, { foreignKey: "lecturer_id" });
StudentCourse.belongsTo(Lecturer, { foreignKey: "lecturer_id" });

module.exports = StudentCourse;
