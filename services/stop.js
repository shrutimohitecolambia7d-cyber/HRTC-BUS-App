const supabase = require("../config/supabase");

async function getStops(route_id) {
    return await supabase
        .from("stops")
        .select("*")
        .eq("route_id", route_id);
}

module.exports = {
    getStops
};