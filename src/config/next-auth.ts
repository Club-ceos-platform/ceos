import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { getContext } from "@/database/context";
import { compare } from "bcryptjs";
import * as userRepository from "@/database/repository/user.repository";

const { prisma } = getContext();

export const AuthOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_URL,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "signin",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "johnDoe@gmail.com" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("Une erreur est survenue lors de l'authentification. Veuillez réessayer.");
        }

        const existingUser = await userRepository.findUnique({
          email: credentials.email,
        });


        if (!existingUser) {
          throw new Error("Aucun utilisateur trouvé avec cette adresse e-mail. Veuillez vérifier vos informations.");
        }
        
        if(!existingUser.isValidatedByAdmin){
          throw new Error("Votre demande est en cours de validation par un administrateur. Veuillez patienter.");
        }

        if(!existingUser.hasPaid){
          throw new Error("Le paiement des frais d'inscription est requis pour accéder à cette plateforme.");
        }

        const passwordMatch = await compare(credentials.password, existingUser.password as string);

        if (!passwordMatch) {
          throw new Error("Le mot de passe que vous avez entré est incorrect. Veuillez réessayer.");
        }

        const { hasPaid, password, isValidatedByAdmin, ...userWithoutSensitiveInfo } = existingUser;

        return userWithoutSensitiveInfo as any;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as any;
      return session;
    },
  },
};
