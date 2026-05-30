import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "FTID Node Credentials",
      credentials: {
        role: { label: "Role", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials?.role) return null;
        
        // In a real app, this would check against the Prisma DB for password/OTP.
        // For the FTID simulation, selecting a role grants a valid JWT for that role.
        const validRoles = ['citizen', 'business', 'bank', 'institution', 'auditor', 'government', 'regulator', 'developer', 'gateway'];
        
        if (validRoles.includes(credentials.role)) {
          return {
            id: credentials.role + "_id_123",
            name: credentials.role.toUpperCase() + " User",
            role: credentials.role,
          };
        }
        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).role = token.role;
      }
      return session;
    }
  },
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
