// const { pool } = require('../config/db');

// const createCourseTable = async () => {
//     try {
//         const query = `
//             CREATE TABLE IF NOT EXISTS courses (
//                 id SERIAL PRIMARY KEY,
//                 name VARCHAR(100) NOT NULL,
//                 code VARCHAR(20) UNIQUE NOT NULL,
//                 department_id INT NOT NULL
//             );
//         `;
//         await pool.query(query);
//         console.log("✅ Course table checked/created.");
//     } catch (error) {
//         console.error("❌ Error creating course table:", error);
//     }
// };

// // Course Model
// const Course = {
//     create: async ({ name, code, department_id }) => {
//         try {
//             const query = `
//                 INSERT INTO courses (name, code, department_id)
//                 VALUES ($1, $2, $3) RETURNING *;
//             `;
//             const values = [name, code, department_id];
//             const result = await pool.query(query, values);
//             return result.rows[0];
//         } catch (error) {
//             console.error("❌ Error creating course:", error);
//             throw error;
//         }
//     },

//     findAll: async () => {
//         try {
//             const result = await pool.query("SELECT * FROM courses;");
//             return result.rows;
//         } catch (error) {
//             console.error("❌ Error fetching courses:", error);
//             throw error;
//         }
//     },

//     findById: async (id) => {
//         try {
//             const result = await pool.query("SELECT * FROM courses WHERE id = $1;", [id]);
//             return result.rows[0];
//         } catch (error) {
//             console.error("❌ Error fetching course:", error);
//             throw error;
//         }
//     },

//     delete: async (id) => {
//         try {
//             await pool.query("DELETE FROM courses WHERE id = $1;", [id]);
//             return { message: "Course deleted successfully." };
//         } catch (error) {
//             console.error("❌ Error deleting course:", error);
//             throw error;
//         }
//     }
// };

// module.exports = { Course, createCourseTable };

const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Course = sequelize.define('Course', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    code: { type: DataTypes.STRING, allowNull: false, unique: true },
    department_id: { type: DataTypes.INTEGER, allowNull: false }
}, { timestamps: false });

module.exports = Course;

