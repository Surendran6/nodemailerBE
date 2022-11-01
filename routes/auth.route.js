const express = require("express");
const router = express.Router();
const authController = require("../controller/auth.controller");

router.post("/register",authController.register);

router.post("/login", authController.login);

router.post("/authorized/user", authController.sendMails);

router.post("/forgotpassword", authController.forgotpassword);

module.exports = router;
