const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Attendance = sequelize.define('Attendance', {
    checkInTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    checkOutTime: {
        type: DataTypes.DATE,
    },
    employeeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = Attendance;
