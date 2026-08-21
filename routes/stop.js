const express = require("express");
const router = express.Router();
const { getStops } = require("../services/stop");

router.get("/:route_id", async (req, res) => {
    const result = await getStops(req.params.route_id);
    res.json(result);
});

module.exports = router;