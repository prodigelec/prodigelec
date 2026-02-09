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

    console.log("🔍 Vérification des identifiants:");
    console.log("- Username reçu:", username);
    console.log("- Username attendu:", adminUser);
    console.log("- Username match:", username === adminUser);

    const inputHash = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");

    console.log("- Password hash reçu:", inputHash);
    console.log("- Password hash attendu:", adminPassHash);
    console.log("- Password match:", inputHash === adminPassHash);

    return username === adminUser && inputHash === adminPassHash;
  }

  validateAccessCode(code) {
    const isValid = validateAccessCode(code);
    console.log("🔐 Validation code d'accès:", code, "->", isValid);
    return isValid;
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
