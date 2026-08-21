const supabase = require("../config/supabase");

async function getNotifications(user_id) {
    return await supabase
        .from("notifications")
        .select("*")
        .eq("user_id", user_id)
        .order("created_at", { ascending: false });
}

module.exports = {
    getNotifications
};