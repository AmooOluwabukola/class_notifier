const { Department } = require('../models/department');


const registerDepartment = async (req, res) => {
    try {
        const { name } = req.body;
        const department = await Department.create({ name });
        return res.status(201).json({ message: "Department registered successfully", department });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


const getDepartments = async (req, res) => {
    try {
        const departments = await Department.findAll();
        return res.status(200).json(departments);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = { registerDepartment,getDepartments };
