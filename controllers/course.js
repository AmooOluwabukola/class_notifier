const { Course } = require('../models/course');

// Create a new course
const createCourse = async (req, res) => {
    try {
        const { name, code, department_id } = req.body;
        const course = await Course.create({ name, code, department_id });
        return res.status(201).json({ message: "Course created successfully", course });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// Get all courses
const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.findAll();
        return res.status(200).json(courses);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = { createCourse, getAllCourses };
