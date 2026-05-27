'use client';

import { signInAnonymously, signInWithEmail } from './auth';

export function initiateAnonymousSignIn(auth: any) {
    signInAnonymously(auth).catch(console.error);
}

export function initiateEmailSignIn(auth: any, email: string, password?: string) {
    signInWithEmail(auth, email, password).catch(console.error);
}

export function initiateEmailSignUp(auth: any, email: string, password?: string) {
    signInWithEmail(auth, email, password).catch(console.error);
}
