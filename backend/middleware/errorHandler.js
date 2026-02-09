const errorHandler = (err, req, res, next) => {
    // Log complet de l'erreur pour le debug
    console.error('--- Backend Error ---');
    console.error('Path:', req.path);
    console.error('Method:', req.method);
    console.error('Body:', req.body);
    console.error('Error Stack:', err.stack);
    console.error('----------------------');

    const statusCode = err.statusCode || 500;
    const message = err.message || 'Une erreur interne est survenue.';

    res.status(statusCode).json({
        success: false,
        error: message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
};

module.exports = errorHandler;
