// const { pool } = require('../config/db');

// const createNotificationTable = async () => {
//     try {
//         const query = `
//             CREATE TABLE IF NOT EXISTS notifications (
//                 id SERIAL PRIMARY KEY,
//                 message TEXT NOT NULL,
//                 student_id INT NOT NULL,
//                 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//             );
//         `;
//         await pool.query(query);
//         console.log("✅ Notification table checked/created.");
//     } catch (error) {
//         console.error("❌ Error creating notification table:", error);
//     }
// };

// // Notification Model
// const Notification = {
//     create: async ({ message, student_id }) => {
//         try {
//             const query = `
//                 INSERT INTO notifications (message, student_id)
//                 VALUES ($1, $2) RETURNING *;
//             `;
//             const values = [message, student_id];
//             const result = await pool.query(query, values);
//             return result.rows[0];
//         } catch (error) {
//             console.error("❌ Error creating notification:", error);
//             throw error;
//         }
//     },

//     findAll: async () => {
//         try {
//             const result = await pool.query("SELECT * FROM notifications;");
//             return result.rows;
//         } catch (error) {
//             console.error("❌ Error fetching notifications:", error);
//             throw error;
//         }
//     },

//     findByStudentId: async (student_id) => {
//         try {
//             const result = await pool.query("SELECT * FROM notifications WHERE student_id = $1;", [student_id]);
//             return result.rows;
//         } catch (error) {
//             console.error("❌ Error fetching notifications:", error);
//             throw error;
//         }
//     },

//     delete: async (id) => {
//         try {
//             await pool.query("DELETE FROM notifications WHERE id = $1;", [id]);
//             return { message: "Notification deleted successfully." };
//         } catch (error) {
//             console.error("❌ Error deleting notification:", error);
//             throw error;
//         }
//     }
// };

// module.exports = { Notification, createNotificationTable };


const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const ClassNotification = sequelize.define('ClassNotification', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    message: { type: DataTypes.TEXT, allowNull: false },
    course_id: { type: DataTypes.INTEGER, allowNull: false },
    lecturer_id: { type: DataTypes.INTEGER, allowNull: false },
    timestamp: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { timestamps: false });

module.exports = ClassNotification;
