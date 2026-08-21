const express = require("express");
const router = express.Router();
const {
    register,
    login,
    logout,
    getSession
} = require("../services/auth");

router.post("/register", async (req, res) => {
    const { email, password } = req.body;
    const result = await register(email, password);
    res.json(result);
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const result = await login(email, password);
    res.json(result);
});

router.post("/logout", async (req, res) => {
    const result = await logout();
    res.json(result);
});

router.get("/session", async (req, res) => {
    const result = await getSession();
    res.json(result);
});

module.exports = router;