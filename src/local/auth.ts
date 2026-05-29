'use client';

// Completely mocked authentication to avoid Supabase "Failed to fetch" errors
// We use localStorage to persist a mock session.

type User = { uid: string; email?: string };

let currentUser: User | null = null;
let listeners: Array<(u: User | null) => void> = [];

export const mockAuth = {
    get currentUser(): User | null { return currentUser; }
};

const persistSession = (user: User | null) => {
    currentUser = user;
    if (typeof window !== 'undefined') {
        if (user) {
            localStorage.setItem('ftid_mock_auth', JSON.stringify(user));
        } else {
            localStorage.removeItem('ftid_mock_auth');
        }
    }
    listeners.forEach(cb => cb(user));
};

const loadSession = () => {
    if (typeof window !== 'undefined') {
        const stored = localStorage.getItem('ftid_mock_auth');
        if (stored) {
            try {
                currentUser = JSON.parse(stored);
            } catch (e) {
                currentUser = null;
            }
        }
    }
    return currentUser;
};

// Initialize
loadSession();

export const onAuthStateChanged = (auth: any, cb: (u: User | null) => void, errorCb?: (e: any) => void) => {
  listeners.push(cb);
  
  // Return current state immediately
  setTimeout(() => cb(currentUser), 0);

  return () => {
    listeners = listeners.filter(l => l !== cb);
  };
};

export const signInAnonymously = async (auth: any) => {
  const user = { uid: `mock-anon-${Math.floor(Math.random() * 10000)}` };
  persistSession(user);
  return { user };
};

export const signInWithEmail = async (auth: any, email: string, password?: string) => {
  const emailToUse = email.includes('@') ? email : `${email}@ftid.local`;
  // Mock successful sign in
  const user = { uid: `mock-user-${Date.now()}`, email: emailToUse };
  persistSession(user);
  return { user };
};

export const signUpWithEmail = async (auth: any, email: string, password?: string) => {
  const emailToUse = email.includes('@') ? email : `${email}@ftid.local`;
  const user = { uid: `mock-new-user-${Date.now()}`, email: emailToUse };
  persistSession(user);
  return { user };
};

export const signOut = async (auth: any) => {
  persistSession(null);
};
