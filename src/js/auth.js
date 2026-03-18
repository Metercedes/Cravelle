import { supabase } from './supabase.js';

let banGuardActive = false;

// Wait for Supabase to finish processing auth params from URL (OAuth callback)
const initialSessionReady = new Promise((resolve) => {
  const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
    if (event === 'INITIAL_SESSION' || event === 'SIGNED_IN') {
      resolve();
      subscription.unsubscribe();
    }
  });
  // Timeout fallback — don't block forever if no auth params
  setTimeout(resolve, 3000);
});

export const auth = {
  async getSession() {
    await initialSessionReady;
    const { data: { session } } = await supabase.auth.getSession();
    return session;
  },

  async getUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  },

  async getProfile() {
    const user = await this.getUser();
    if (!user) return null;
    const { data } = await supabase
      .from('profiles')
      .select('role, status, totp_enabled, display_name')
      .eq('user_id', user.id)
      .single();
    return data;
  },

  async getRole() {
    const profile = await this.getProfile();
    return profile?.role || 'applicant';
  },

  async signIn(email, password, captchaToken) {
    const opts = {};
    if (captchaToken) opts.captchaToken = captchaToken;
    const { data, error } = await supabase.auth.signInWithPassword({ email, password, options: opts });
    if (error) throw error;
    return data;
  },

  async signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },

  /**
   * Real-time ban guard — subscribes to profile changes via Realtime
   * and polls as fallback. Immediately signs out banned/deleted users.
   */
  startBanGuard(userId) {
    if (banGuardActive || !userId) return;
    banGuardActive = true;

    const forceBan = async (reason) => {
      try { await supabase.auth.signOut(); } catch { /* best effort */ }
      window.location.href = `/login.html?reason=${reason}`;
    };

    // 1) Realtime subscription on profiles table
    supabase
      .channel('ban-guard')
      .on('postgres_changes', {
        event: 'UPDATE',
        schema: 'public',
        table: 'profiles',
        filter: `user_id=eq.${userId}`
      }, (payload) => {
        const status = payload.new?.status;
        if (status === 'banned' || status === 'deleted') {
          forceBan(status);
        }
      })
      .subscribe();

    // 2) Polling fallback every 30s (in case Realtime isn't enabled on the table)
    const poll = async () => {
      try {
        const { data } = await supabase
          .from('profiles')
          .select('status')
          .eq('user_id', userId)
          .single();
        if (data?.status === 'banned' || data?.status === 'deleted') {
          forceBan(data.status);
        }
      } catch { /* network error — skip this cycle */ }
    };
    setInterval(poll, 30000);
  },

  /**
   * Guard for admin routes. Redirects non-admins.
   */
  async requireAdmin() {
    const session = await this.getSession();
    if (!session) {
      window.location.href = '/admin/login.html';
      return null;
    }
    const profile = await this.getProfile();
    if (!profile || profile.role !== 'admin') {
      window.location.href = '/';
      return null;
    }
    if (profile.status === 'banned' || profile.status === 'deleted') {
      await this.signOut();
      window.location.href = '/login.html?reason=banned';
      return null;
    }
    // Start real-time ban guard
    this.startBanGuard(session.user.id);
    return session;
  },

  /**
   * Guard for authenticated user routes. Redirects unauthenticated users.
   */
  async requireAuth() {
    const session = await this.getSession();
    if (!session) {
      window.location.href = '/login.html?reason=session_expired';
      return null;
    }
    const profile = await this.getProfile();
    if (profile?.status === 'banned') {
      await this.signOut();
      window.location.href = '/login.html?reason=banned';
      return null;
    }
    if (profile?.status === 'deleted') {
      await this.signOut();
      window.location.href = '/login.html?reason=deleted';
      return null;
    }
    // Start real-time ban guard
    this.startBanGuard(session.user.id);
    return session;
  },

  onAuthStateChange(callback) {
    return supabase.auth.onAuthStateChange(callback);
  }
};
