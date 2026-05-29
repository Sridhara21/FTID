import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Space_Grotesk, Inter } from 'next/font/google';
import { FirebaseClientProvider } from '@/local/client-provider';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });
const inter = Inter({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: 'FTID — Sovereign Financial Infrastructure',
  description: 'Sovereign Financial Infrastructure Platform for Citizens and Governments.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased bg-[#020810] text-foreground relative min-h-screen`} suppressHydrationWarning>
        <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-10 pointer-events-none z-0"></div>
        <FirebaseClientProvider>
          {children}
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
