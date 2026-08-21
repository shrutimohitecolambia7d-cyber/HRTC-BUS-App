const supabase = require("../config/supabase");

async function register(email, password) {
    return await supabase.auth.signUp({ email, password });
}

async function login(email, password) {
    return await supabase.auth.signInWithPassword({ email, password });
}

async function logout() {
    return await supabase.auth.signOut();

    async function getSession() {
        return await supabase.auth.getSession();
    }
}

module.exports = {
    register,
    login,
    logout,
    getSession
};