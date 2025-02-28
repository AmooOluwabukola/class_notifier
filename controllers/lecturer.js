const { Lecturer } = require('../models/lecturer');

// Add a new lecturer
const addLecturer = async (req, res) => {
    try {
        const { name, email } = req.body;
        const lecturer = await Lecturer.create({ name, email });
        return res.status(201).json({ message: "Lecturer added successfully", lecturer });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// Get all lecturers
const getAllLecturers = async (req, res) => {
    try {
        const lecturers = await Lecturer.findAll();
        return res.status(200).json(lecturers);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = { addLecturer, getAllLecturers };
