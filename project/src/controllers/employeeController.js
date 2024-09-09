const employeeService = require('../services/employeeService');

exports.signup = async (req, res) => {
    try {
        const employee = await employeeService.signup(req.body);
        res.status(201).json({ employee });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const token = await employeeService.login(req.body);
        res.status(200).json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Additional methods for profile and attendance


