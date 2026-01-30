const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ error: 'Accès non autorisé. Token manquant.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.clearCookie('token');
        return res.status(401).json({ error: 'Session expirée ou invalide. Veuillez vous reconnecter.' });
    }
};

module.exports = authMiddleware;
