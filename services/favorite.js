const supabase = require("../config/supabase");

async function getFavorites(user_id) {
    return await supabase
        .from("favorites")
        .select("*")
        .eq("user_id", user_id);
}

async function addFavorite(user_id, route_id) {
    return await supabase
        .from("favorites")
        .insert({
            user_id,
            route_id
        });
}

async function removeFavorite(user_id, route_id) {
    return await supabase
        .from("favorites")
        .delete()
        .eq("user_id", user_id)
        .eq("route_id", route_id);
}

module.exports = {
    getFavorites,
    addFavorite,
    removeFavorite
};