const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

const authRoutes = require('./auth');
const companyRoutes = require('./company');
const customerRoutes = require('./customer');
const quoteRoutes = require('./quote');

// Public routes
router.use('/auth', authRoutes);

// Protected routes
router.use('/company', companyRoutes);
router.use('/customers', customerRoutes);
router.use('/quotes', quoteRoutes);

module.exports = router;
