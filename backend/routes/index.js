const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

const authRoutes = require('./auth/authRoutes');
const companyRoutes = require('./company/companyRoutes');
const customerRoutes = require('./customer/customerRoutes');
const quoteRoutes = require('./quote/quoteRoutes');
const signatureRoutes = require('./signature/signatureRoutes');
const siteRoutes = require('./site/siteRoutes');
const publicRoutes = require('./public');
const otpRoutes = require('./otp/otpRoutes');

// Public routes
router.use('/auth', authRoutes);
router.use('/public', publicRoutes);
router.use('/otp', otpRoutes); // OTP routes (public for signature verification)

// Protected routes
router.use('/company', companyRoutes);
router.use('/customers', customerRoutes);
router.use('/quotes', quoteRoutes);
router.use('/signatures', signatureRoutes);
router.use('/sites', siteRoutes);

module.exports = router;

