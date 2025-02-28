const express = require('express');
const { createCourse, getAllCourses } = require('../controllers/course');

const router = express.Router();

router.post('/create', createCourse);
router.get('/courses', getAllCourses);

module.exports = router;
