const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/signup', employeeController.signup);
router.post('/login', employeeController.login);
router.get('/profile', authMiddleware, employeeController.getProfile);
router.put('/profile', authMiddleware, employeeController.updateProfile);
router.post('/attendance/check-in', authMiddleware, employeeController.checkIn);
router.post('/attendance/check-out', authMiddleware, employeeController.checkOut);

module.exports = router;
