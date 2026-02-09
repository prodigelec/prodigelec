const express = require("express");
const router = express.Router();
const newsletterController = require("../../controllers/newsletter/newsletterController");

// Newsletter subscription
router.post("/subscribe", newsletterController.subscribe);

// Newsletter unsubscription
router.post("/unsubscribe", newsletterController.unsubscribe);

module.exports = router;