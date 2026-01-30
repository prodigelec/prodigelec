import CryptoJS from 'crypto-js';

/**
 * Generates a rotating access code based on the current time.
 * The code changes every 5 minutes.
 */
export const generateAccessCode = () => {
    const secret = process.env.CRM_ACCESS_SECRET;
    if (!secret) throw new Error('CRM_ACCESS_SECRET is not defined');

    const timestamp = Math.floor(Date.now() / (1000 * 60 * 5)); // 5 minute window
    const raw = `${secret}-${timestamp}`;
    return CryptoJS.SHA256(raw).toString(CryptoJS.enc.Hex).substring(0, 16);
};

/**
 * Validates a provided code against the current or previous 5-minute window.
 */
export const validateAccessCode = (code) => {
    const secret = process.env.CRM_ACCESS_SECRET;
    if (!secret) return false;

    const now = Math.floor(Date.now() / (1000 * 60 * 5));

    // Check current and previous window to handle edge cases
    for (let i = 0; i >= -1; i--) {
        const timestamp = now + i;
        const raw = `${secret}-${timestamp}`;
        const expected = CryptoJS.SHA256(raw).toString(CryptoJS.enc.Hex).substring(0, 16);
        if (code === expected) return true;
    }

    return false;
};
