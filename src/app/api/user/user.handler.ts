import { User } from "@prisma/client"
import { UserInput } from "@/typings"
import * as userRepository from "@/database/repository/user.repository"

const handleCreate = async (data: UserInput): Promise<Omit<User, 'password'>> => {
  const user = await userRepository.save(data);
  return user
}

export { handleCreate }