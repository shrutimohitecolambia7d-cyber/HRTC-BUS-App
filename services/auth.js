const supabase = require("../config/supabase");

async function sendOTP(phone) {
    return await supabase.auth.signInWithOtp({
        phone: phone
    });
}

async function verifyOTP(phone, token) {
    return await supabase.auth.verifyOtp({
        phone: phone,
        token: token,
        type: "sms"
    });
}

async function logout() {
    return await supabase.auth.signOut();
}

async function getSession() {
    return await supabase.auth.getSession();
}

module.exports = {
    sendOTP,
    verifyOTP,
    logout,
    getSession
};