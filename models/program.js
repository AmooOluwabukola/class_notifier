const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Program = sequelize.define('Program', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false, unique: true }
}, { timestamps: false });

module.exports = Program;
