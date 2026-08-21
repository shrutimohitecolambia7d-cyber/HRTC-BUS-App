require("dotenv").config();

const express = require("express");
const { createClient } = require("@supabase/supabase-js");

const app = express();
app.use(express.json());

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

const busRoutes = require("./routes/bus");
app.use("/api/buses", busRoutes);

const routeRoutes = require("./routes/route");
app.use("/api/routes", routeRoutes);

const stopRoutes = require("./routes/stop");
app.use("/api/stops", stopRoutes);

const liveLocationRoutes = require("./routes/liveLocation");
app.use("/api/live-location", liveLocationRoutes);

const supabase =
    process.env.SUPABASE_URL && process.env.SUPABASE_KEY
        ? createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)
        : null;

app.get("/", (req, res) => {
    res.json({ message: "HRTC Backend is running!" });
});

const PORT = 3000;

app.get("/health", (req, res) => {
    res.json({
        status: "OK",
        service: "HRTC Backend"
    });
});

app.listen(PORT, () => {
    console.log(`HRTC Backend running on port ${PORT}`);
});

module.exports = { supabase };