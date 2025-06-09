import bcrypt from "bcryptjs";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Étendre les types NextAuth
declare module "next-auth" {
  interface User {
    role?: string;
  }

  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      role: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
  }
}

// Configuration d'un seul utilisateur administrateur via variables d'environnement
const ADMIN_USER = {
  id: "1",
  email: process.env.ADMIN_EMAIL || "admin@velorunfestival.fr",
  password:
    process.env.ADMIN_PASSWORD_HASH ||
    "$2b$12$HJ2kPX5l5AGJjOSm6BIE3eX2ovkWjQtzBCiIoOAWxCJoVfPP5JM8S", // fallback pour dev
  name: process.env.ADMIN_NAME || "Administrateur VeloRunFestival",
  role: "ADMIN",
};

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Mot de passe", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Vérifier si c'est l'utilisateur administrateur
        if (credentials.email === ADMIN_USER.email) {
          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            ADMIN_USER.password
          );

          if (isPasswordValid) {
            return {
              id: ADMIN_USER.id,
              email: ADMIN_USER.email,
              name: ADMIN_USER.name,
              role: ADMIN_USER.role,
            };
          }
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.sub!;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/connexion",
  },
  secret: process.env.NEXTAUTH_SECRET || "your-secret-key",
};
