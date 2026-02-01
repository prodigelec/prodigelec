const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

const authRoutes = require('./auth');
const companyRoutes = require('./company');

// Public routes
router.use('/auth', authRoutes);

// Protected routes
router.use('/company', companyRoutes);

module.exports = router;
