// const { DataTypes } = require('sequelize');
// const { sequelize } = require('../config/db');

// const ClassNotification = sequelize.define('ClassNotification', {
//     id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
//     message: { type: DataTypes.TEXT, allowNull: false },
//     course_id: { type: DataTypes.INTEGER, allowNull: false },
//     lecturer_id: { type: DataTypes.INTEGER, allowNull: false },
//     timestamp: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
// }, { timestamps: false });

// module.exports = ClassNotification;


const { DataTypes } = require("sequelize");
const {sequelize} = require("../config/db");
const Student = require("./student");
const Course = require("./course");
const Lecturer = require("./lecturer");

const ClassNotification = sequelize.define("ClassNotification", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  notification_time: { type: DataTypes.DATE, allowNull: false },
  status: { 
    type: DataTypes.ENUM("Pending", "Sent"),
    allowNull: false,
    defaultValue: "Pending"
  }
});

// Class Notification Associations
Student.hasMany(ClassNotification, { foreignKey: "student_id" });
ClassNotification.belongsTo(Student, { foreignKey: "student_id" });

Course.hasMany(ClassNotification, { foreignKey: "course_id" });
ClassNotification.belongsTo(Course, { foreignKey: "course_id" });

Lecturer.hasMany(ClassNotification, { foreignKey: "lecturer_id" });
ClassNotification.belongsTo(Lecturer, { foreignKey: "lecturer_id" });

module.exports = ClassNotification;

