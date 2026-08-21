const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
    res.json({ message: "Register API ready" });
});

router.post("/login", (req, res) => {
    res.json({ message: "Login API ready" });
});

router.post("/logout", (req, res) => {
    res.json({ message: "Logout API ready" });
});

module.exports = router;