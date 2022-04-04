const express = require("express");
const router = express.Router();
const {
    register: register,
    login: login,
} = require("../controllers/auth");

//REGISTER
router.post("/register", register)

//LOGIN
router.post("/login", login)

module.exports = router;