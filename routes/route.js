const express = require("express");
const router = express.Router();
const { getRoutes, getRoute } = require("../services/route");

router.get("/", async (req, res) => {
    const result = await getRoutes();
    res.json(result);
});

router.get("/:id", async (req, res) => {
    const result = await getRoute(req.params.id);
    res.json(result);
});

module.exports = router;