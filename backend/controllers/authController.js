const jwt = require('jsonwebtoken');
const { validateAccessCode, generateAccessCode } = require('../utils/accessCode');
require('dotenv').config();

exports.login = async (req, res) => {
    const { password, accessCode } = req.body;

    if (!validateAccessCode(accessCode)) {
        return res.status(403).json({ error: 'Code d\'accès invalide ou expiré.' });
    }

    // Placeholder password check
    if (password !== 'admin123') {
        return res.status(401).json({ error: 'Mot de passe incorrect.' });
    }

    const token = jwt.sign({ user: 'admin', role: 'admin' }, process.env.JWT_SECRET, {
        expiresIn: '8h',
    });

    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 8 * 60 * 60 * 1000,
    });

    res.json({
        success: true,
        message: 'Connexion réussie.',
        accessCode: generateAccessCode()
    });
};

exports.logout = (req, res) => {
    res.clearCookie('token');
    res.json({ success: true, message: 'Déconnexion réussie.' });
};

exports.getAccessCode = (req, res) => {
    const code = generateAccessCode();
    res.json({ code });
};
