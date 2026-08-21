const express = require("express");
const router = express.Router();
const { getBuses, getBus } = require("../services/bus");

router.get("/", async (req, res) => {
    const result = await getBuses();
    res.json(result);
});

router.get("/:id", async (req, res) => {
    const result = await getBus(req.params.id);
    res.json(result);
});

module.exports = router;