import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { User as PrismaUser } from '@prisma/client';
import { getContext } from '@/database/context';
import { JWTToken } from '@/services/auth/auth.types';
import { NextAuthOptions } from 'next-auth';
import {PrismaAdapter} from '@next-auth/prisma-adapter'
import { mapPrismaUserToJWT, mapJWTToSessionUser } from '@/services/auth/auth.mappers';

const { prisma } = getContext();

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !(await bcrypt.compare(credentials.password, user.password))) {
          throw new Error('Invalid credentials');
        }

        return mapPrismaUserToJWT(user);
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return mapPrismaUserToJWT(user as PrismaUser);
      }
      return token as JWTToken;
    },
    async session({ session, token }) {
      if (token) {
        session.user = mapJWTToSessionUser(token as JWTToken);
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
  },
  session: {
    strategy: 'jwt',
  },
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
};
