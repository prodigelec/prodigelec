const { generateAccessCode } = require('../utils/accessCode');
require('dotenv').config();

try {
    const code = generateAccessCode();
    console.log('Generated Code:', code);
} catch (error) {
    console.error('Error generating code:', error);
}
