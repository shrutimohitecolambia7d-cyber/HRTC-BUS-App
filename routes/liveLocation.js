const express = require("express");
const router = express.Router();
const {
    updateLocation,
    getLocation
} = require("../services/liveLocation");

router.post("/", async (req, res) => {
    const { bus_id, latitude, longitude } = req.body;

    const result = await updateLocation(
        bus_id,
        latitude,
        longitude
    );

    res.json(result);
});

router.get("/:bus_id", async (req, res) => {
    const result = await getLocation(req.params.bus_id);
    res.json(result);
});

module.exports = router;