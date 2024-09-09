const Employee = require('../models/employee');
const Attendance = require('../models/attendance');
const { generateToken } = require('../../utils/jwt');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.signup = async (employeeData) => {
    const { name, email, password, roleId } = employeeData;
    const employee = await Employee.create({ name, email, password, roleId });
    return employee;
};

exports.login = async (loginData) => {
    const { email, password } = loginData;
    const employee = await Employee.findOne({ where: { email } });
    
    if (!employee || !(await bcrypt.compare(password, employee.password))) {
        throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ id: employee.id, roleId: employee.roleId }, process.env.JWT_SECRET, { expiresIn: '1d' });
    return token;
};
exports.checkIn = async (employeeId) => {
    const attendance = await Attendance.create({ employeeId, checkInTime: new Date() });
    return attendance;
};

exports.checkOut = async (employeeId) => {
    const attendance = await Attendance.findOne({ where: { employeeId, checkOutTime: null } });
    if (!attendance) throw new Error('No active check-in found');
    
    attendance.checkOutTime = new Date();
    await attendance.save();
    return attendance;
};
