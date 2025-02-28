const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const Course = require('./course');
const Lecturer = require('./lecturer');

const CourseLecturer = sequelize.define('CourseLecturer', {
    course_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: Course, key: 'id' } },
    lecturer_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: Lecturer, key: 'id' } }
}, { timestamps: false });

module.exports = CourseLecturer;
