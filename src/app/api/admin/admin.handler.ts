import { User } from "@prisma/client";
import * as userRepository from '@/database/repository/user.repository';

const handleGetUsersAwaitingApproval = async (): Promise<Omit<User, 'password'>[] | null> => {
  const users = await userRepository.findMany({ isValidatedByAdmin: false });

  if (!users) return null;

  const usersWithoutPassword = users.map(({ password, ...userWithoutPassword }) => userWithoutPassword);

  return usersWithoutPassword;
};

const handleGetUsersPendingPayment = async (): Promise<Omit<User, 'password'>[] | null> => {
  const users = await userRepository.findMany({ hasPaid: false });

  if (!users) return null;

  const usersWithoutPassword = users.map(({ password, ...userWithoutPassword }) => userWithoutPassword);

  return usersWithoutPassword;

}

export { handleGetUsersAwaitingApproval, handleGetUsersPendingPayment }