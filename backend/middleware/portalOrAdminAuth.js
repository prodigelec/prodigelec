const jwt = require('jsonwebtoken');
const { validateAccessCode } = require('../utils/accessCode');
require('dotenv').config();

const portalOrAdminAuth = (req, res, next) => {
    // 1. Check for Admin Token (Cookie)
    const token = req.cookies.token;
    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            return next();
        } catch (error) {
            // Token invalid, but check for access code before failing
        }
    }

    // 2. Check for Access Code (Header)
    const accessCode = req.headers['x-crm-access-code'];
    if (accessCode && validateAccessCode(accessCode)) {
        return next();
    }

    // 3. Neither valid
    return res.status(401).json({ error: 'Accès non autorisé. Token ou Code manquant/invalide.' });
};

module.exports = portalOrAdminAuth;
