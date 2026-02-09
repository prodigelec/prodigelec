const express = require("express");
const router = express.Router();
const authController = require("../../controllers/auth/authController");
const validate = require("../../middleware/validate");
const { loginSchema } = require("../../validations/auth");

router.post("/login", validate(loginSchema), authController.login);
router.post("/logout", authController.logout);
router.get("/access-code", authController.getAccessCode);
router.post("/validate-code", authController.validateCode);

module.exports = router;
