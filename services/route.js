const supabase = require("../config/supabase");

async function getRoutes() {
    return await supabase
        .from("routes")
        .select("*");
}

async function getRoute(route_id) {
    return await supabase
        .from("routes")
        .select("*")
        .eq("id", route_id)
        .single();
}

module.exports = {
    getRoutes,
    getRoute
};