import { DefaultSession } from "next-auth";
import { Role } from '@prisma/client'

declare module "next-auth" {
  interface User {
    id: number;
    email: string;
    name: string;
    role: Role;
  }
  
  interface Session {
    user: {
      id: number;
      email: string;
      name: string;
      role: Role;
    } & DefaultSession["user"];
  }
}