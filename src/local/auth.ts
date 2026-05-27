'use client';

type User = { uid: string; email?: string };
let currentUser: User | null = null;
const listeners: ((u: User | null) => void)[] = [];

export const onAuthStateChanged = (auth: any, cb: (u: User | null) => void, errorCb?: (e: any) => void) => {
  listeners.push(cb);
  cb(currentUser);
  return () => {
    const i = listeners.indexOf(cb);
    if (i >= 0) listeners.splice(i, 1);
  };
};

const notify = () => listeners.forEach((c) => c(currentUser));

export const signInAnonymously = async (auth: any) => {
  currentUser = { uid: crypto.randomUUID() };
  notify();
  return { user: currentUser };
};

export const signInWithEmail = async (auth: any, email: string, password?: string) => {
  currentUser = { uid: crypto.randomUUID(), email };
  notify();
  return { user: currentUser };
};

export const signOut = async (auth: any) => {
  currentUser = null;
  notify();
};

export const getCurrentUser = () => currentUser;

// Mock Auth object
export const mockAuth = {
    currentUser: null as User | null
};

// Keep it updated
onAuthStateChanged(mockAuth, (u) => { mockAuth.currentUser = u; });
