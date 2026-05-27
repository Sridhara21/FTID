'use client';
import React, { type ReactNode } from 'react';
import { FirebaseProvider } from './provider';

export function initializeFirebase() {
    return {
        firebaseApp: {},
        auth: {},
        firestore: {}
    };
}

interface FirebaseClientProviderProps {
  children: ReactNode;
}

export function FirebaseClientProvider({ children }: FirebaseClientProviderProps) {
  return (
    <FirebaseProvider>
      {children}
    </FirebaseProvider>
  );
}
