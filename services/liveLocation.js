const supabase = require("../config/supabase");
async function updateLocation(bus_id, latitude, longitude) {
    return await supabase
        .from("bus_locations")
        .upsert({
            bus_id,
            latitude,
            longitude,
            timestamp: new Date().toISOString()
        });
}

async function getLocation(bus_id) {
    return await supabase
        .from("bus_locations")
        .select("*")
        .eq("bus_id", bus_id)
        .single();
}

module.exports = {
    updateLocation,
    getLocation
};