const { Student } = require('../models/student');

// Register a new student
const registerStudent = async (req, res) => {
    try {
        const { name, email, telegram_id,program_id, department_id } = req.body;
        const student = await Student.create({ name, email, telegram_id, program_id,department_id });
        return res.status(201).json({ message: "Student registered successfully", student });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// Get all students
const getAllStudents = async (req, res) => {
    try {
        const students = await Student.findAll();
        return res.status(200).json(students);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = { registerStudent, getAllStudents };
