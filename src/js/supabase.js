// supabase.js

// Replace with your Supabase project URL and anon key
const SUPABASE_URL = 'https://your-project.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-key';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function supabaseLogin(email, password) {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
        alert('Login failed: ' + error.message);
    } else {
        alert('Login successful!');
        // Redirect or update UI
    }
}

async function supabaseRegister(email, password) {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
        alert('Registration failed: ' + error.message);
    } else {
        alert('Registration successful!');
        // Redirect or update UI
    }
}

async function supabaseResetPassword(email) {
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) {
        alert('Reset failed: ' + error.message);
    } else {
        alert('Password reset email sent!');
    }
}
