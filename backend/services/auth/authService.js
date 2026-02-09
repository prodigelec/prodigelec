const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const {
  validateAccessCode,
  generateAccessCode,
} = require("../../utils/accessCode");
require("dotenv").config();

class AuthService {
  verifyCredentials(username, password) {
    const adminUser = process.env.CRM_ADMIN_USERNAME;
    const adminPassHash = process.env.CRM_ADMIN_PASSWORD_HASH;

    const inputHash = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");

    return username === adminUser && inputHash === adminPassHash;
  }

  validateAccessCode(code) {
    return validateAccessCode(code);
  }

  generateToken(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "8h",
    });
  }

  generateAccessCode() {
    return generateAccessCode();
  }
}

module.exports = new AuthService();
