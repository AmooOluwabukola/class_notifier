const express = require('express');
const { registerStudent, getAllStudents } = require('../controllers/student');
const router = express.Router();

router.post('/register', registerStudent);
router.get('/get', getAllStudents);


module.exports = router;
