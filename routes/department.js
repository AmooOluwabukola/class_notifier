const express = require('express');
const {registerDepartment, getDepartments } = require('../controllers/department');

const router = express.Router();

router.post('/register', registerDepartment)
router.get('/departments', getDepartments);

module.exports = router;
