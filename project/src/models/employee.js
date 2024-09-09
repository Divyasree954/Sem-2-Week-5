const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcryptjs');

const Employee = sequelize.define('Employee', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    hooks: {
        beforeCreate: async (employee) => {
            employee.password = await bcrypt.hash(employee.password, 10);
        }
    }
});

module.exports = Employee;
