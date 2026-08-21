const supabase = require("../config/supabase");

function subscribeToBus(bus_id, callback) {
    if (!supabase) {
        console.log("Supabase is not connected yet.");
        return null;
    }

    return supabase
        .channel(`bus-${bus_id}`)
        .on(
            "postgres_changes",
            {
                event: "*",
                schema: "public",
                table: "bus_locations",
                filter: `bus_id=eq.${bus_id}`
            },
            (payload) => {
                callback(payload.new);
            }
        )
        .subscribe();
}

module.exports = {
    subscribeToBus
};