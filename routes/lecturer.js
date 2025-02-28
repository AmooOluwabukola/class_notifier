const express = require('express');
const { addLecturer, getAllLecturers } = require('../controllers/lecturer');

const router = express.Router();

router.post('/add', addLecturer);
router.get('/lecturers', getAllLecturers);

module.exports = router;
