const jwt = require('jsonwebtoken');
const { verifyToken } = require('../../utils/jwt');

module.exports = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.employeeId = decoded.id;
        req.roleId = decoded.roleId;
        next();
    } catch (error) {
        res.status(403).json({ message: 'Forbidden' });
    }
};
