import { LoginForm } from '@/components/auth/login-form';
import { Bot } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-background">
      <div className="flex flex-col items-center justify-center text-center space-y-4 relative z-10">
        <div className="p-3 bg-primary rounded-full">
          <Bot className="h-10 w-10 text-primary-foreground" />
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
    </main>
  );
}
