import { LoginForm } from '@/components/auth/login-form';
import { Bot } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-background">
      <div className="flex flex-col items-center justify-center text-center space-y-4 relative z-10">
        <div className="p-3 bg-primary/10 rounded-full border border-primary/20">
          <Bot className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
          FTID Vision
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          A new era of financial transparency and empowerment for citizens and governments.
        </p>
      </div>
      <div className="mt-12 w-full max-w-md relative z-10">
        <LoginForm />
      </div>
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/20 rounded-full filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
      </div>
    </main>
  );
}
