const authService = require('../../services/auth/authService');
const prisma = require('../../config/prisma');
require('dotenv').config();

exports.login = async (req, res) => {
    const { username, password, accessCode } = req.body;

    if (!authService.validateAccessCode(accessCode)) {
        return res.status(403).json({ error: 'Code d\'accès invalide ou expiré.' });
    }

    if (!authService.verifyCredentials(username, password)) {
        return res.status(401).json({ error: 'Identifiants incorrects.' });
    }

    // Récupérer l'ID de l'entreprise principale
    const company = await prisma.company.findFirst();
    const companyId = company ? company.id : null;

    const token = authService.generateToken({
        user: 'admin',
        role: 'admin',
        company_id: companyId
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
        accessCode: authService.generateAccessCode()
    });
};

exports.logout = (req, res) => {
    res.clearCookie('token');
    res.json({ success: true, message: 'Déconnexion réussie.' });
};

exports.getAccessCode = (req, res) => {
    const code = authService.generateAccessCode();
    res.json({ code });
};

exports.validateCode = (req, res) => {
    const { code } = req.body;
    const isValid = authService.validateAccessCode(code);
    res.json({ valid: isValid });
};
