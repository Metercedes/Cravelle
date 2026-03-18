import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

let supabase;

if (SUPABASE_URL && SUPABASE_ANON_KEY) {
  supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
      flowType: 'pkce',
      detectSessionFromUrl: true,
      autoRefreshToken: true,
      persistSession: true
    }
  });
} else {
  console.warn('[Supabase] Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY env vars. Auth features disabled.');
  // Provide a stub so imports don't crash
  supabase = {
    auth: {
      getSession: async () => ({ data: { session: null } }),
      getUser: async () => ({ data: { user: null } }),
      signUp: async () => { throw new Error('Supabase not configured'); },
      signInWithPassword: async () => { throw new Error('Supabase not configured'); },
      signOut: async () => {},
      resetPasswordForEmail: async () => { throw new Error('Supabase not configured'); },
      exchangeCodeForSession: async () => ({ data: { session: null }, error: { message: 'Supabase not configured' } }),
      onAuthStateChange: (cb) => { setTimeout(() => cb('INITIAL_SESSION', null), 0); return { data: { subscription: { unsubscribe: () => {} } } }; },
      mfa: {
        enroll: async () => { throw new Error('Supabase not configured'); },
        challenge: async () => { throw new Error('Supabase not configured'); },
        verify: async () => { throw new Error('Supabase not configured'); },
        listFactors: async () => ({ data: [], error: null }),
      }
    },
    from: () => ({
      select: () => ({ eq: () => ({ single: async () => ({ data: null, error: null }), order: async () => ({ data: [], error: null }) }) }),
    }),
    channel: () => ({ on: function() { return this; }, subscribe: () => {} }),
  };
}

export { supabase };
