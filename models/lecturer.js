// const { pool } = require('../config/db');

// const createLecturerTable = async () => {
//     try {
//         const query = `
//             CREATE TABLE IF NOT EXISTS lecturers (
//                 id SERIAL PRIMARY KEY,
//                 name VARCHAR(100) NOT NULL,
//                 email VARCHAR(100) UNIQUE NOT NULL,
//                 department_id INT NOT NULL
//             );
//         `;
//         await pool.query(query);
//         console.log("✅ Lecturer table checked/created.");
//     } catch (error) {
//         console.error("❌ Error creating lecturer table:", error);
//     }
// };

// // Lecturer Model
// const Lecturer = {
//     create: async ({ name, email, department_id }) => {
//         try {
//             const query = `
//                 INSERT INTO lecturers (name, email, department_id)
//                 VALUES ($1, $2, $3) RETURNING *;
//             `;
//             const values = [name, email, department_id];
//             const result = await pool.query(query, values);
//             return result.rows[0];
//         } catch (error) {
//             console.error("❌ Error creating lecturer:", error);
//             throw error;
//         }
//     },

//     findAll: async () => {
//         try {
//             const result = await pool.query("SELECT * FROM lecturers;");
//             return result.rows;
//         } catch (error) {
//             console.error("❌ Error fetching lecturers:", error);
//             throw error;
//         }
//     },

//     findById: async (id) => {
//         try {
//             const result = await pool.query("SELECT * FROM lecturers WHERE id = $1;", [id]);
//             return result.rows[0];
//         } catch (error) {
//             console.error("❌ Error fetching lecturer:", error);
//             throw error;
//         }
//     },

//     delete: async (id) => {
//         try {
//             await pool.query("DELETE FROM lecturers WHERE id = $1;", [id]);
//             return { message: "Lecturer deleted successfully." };
//         } catch (error) {
//             console.error("❌ Error deleting lecturer:", error);
//             throw error;
//         }
//     }
// };

// module.exports = { Lecturer, createLecturerTable };


const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Lecturer = sequelize.define('Lecturer', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true }
}, { timestamps: false });

module.exports = Lecturer;

