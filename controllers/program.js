const { Program } = require('../models/program');


// Register a new program
const registerProgram = async (req, res) => {
    try {
        const { name, department_id } = req.body;
        const program = await Program.create({ name, department_id });
        return res.status(201).json({ message: "Program registered successfully", program });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
const getPrograms = async (req, res) => {
    try {
        const programs = await Program.findAll();
        return res.status(200).json(programs);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {registerProgram, getPrograms };
