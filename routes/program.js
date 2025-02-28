const express = require('express');
const {registerProgram, getPrograms } = require('../controllers/program');

const router = express.Router();
router.post('/register',registerProgram)
router.get('/programs', getPrograms);

module.exports = router;
