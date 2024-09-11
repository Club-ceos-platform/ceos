import { User as PrismaUser } from "@prisma/client";

declare module "next-auth" {
  interface User extends Omit<PrismaUser, 'password' | 'hasPaid' | 'isValidatedByAdmin'> {}
  interface Session {
    user: User;
  }
}