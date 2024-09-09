const jwt = require('jsonwebtoken');

exports.generateToken = (employeeId, roleId) => {
    return jwt.sign(
        { id: employeeId, roleId: roleId },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
    );
};

exports.verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        throw new Error('Invalid token');
    }
};
