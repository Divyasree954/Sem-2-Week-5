// src/models/index.js

const Sequelize = require('sequelize');
const sequelize = require('../config/config');

// Import all models
const User = require('./user')(sequelize, Sequelize.DataTypes);

// Export models and sequelize instance
module.exports = {
    User,
    sequelize,
};