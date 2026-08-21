const supabase = require("../config/supabase");

async function getBuses() {
    return await supabase
        .from("buses")
        .select("*");
}

async function getBus(bus_id) {
    return await supabase
        .from("buses")
        .select("*")
        .eq("id", bus_id)
        .single();
}

module.exports = {
    getBuses,
    getBus
};