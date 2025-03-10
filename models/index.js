const { Sequelize} = require("sequelize");
const sequelize = require("../config/db"); // Ensure correct path

// Import models properly
const Student = require("./student");
const Course = require("./course");
const Lecturer = require("./lecturer");
const ClassNotification= require("./notification");
const Department = require("./department");
const Program = require("./program");
const CourseLecturer= require("./courseLecturer");



// Define Associations
Student.belongsTo(Department, { foreignKey: "department_id" });
Course.belongsTo(Department, { foreignKey: "department_id" });
ClassNotification.belongsTo(Course, { foreignKey: "course_id" });
ClassNotification.belongsTo(Lecturer, { foreignKey: "lecturer_id" });
CourseLecturer.belongsTo(Course, { foreignKey: "course_id" });
CourseLecturer.belongsTo(Lecturer, { foreignKey: "lecturer_id" });

// Sync Models
const syncModels = async () => {
  await sequelize.sync({ alter: true });
  console.log("Database models synchronized");
};

module.exports = {
  sequelize, 
  Student,
  Course,
  Lecturer,
  ClassNotification,
  Department,
  Program,
  CourseLecturer,
  syncModels,
};
