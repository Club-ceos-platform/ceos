import { User } from "@prisma/client";
import { UserInput } from "@/typings";
import { Context,getContext } from "../context";

const ctx:Context = getContext();

export async function save(data:UserInput):Promise<User>{
  return ctx.prisma.user.create({
    data
  })
}

export async function findUserById(userId:number):Promise<User | null>{
  return ctx.prisma.user.findUnique({
    where:{ id : userId }
  })
}

export async function update(data:UserInput,userId:number):Promise<User>{
  return ctx.prisma.user.update({
    where:{id:userId},
    data
  })
}

export async function deleteByUserId(userId:number):Promise<User>{
  return ctx.prisma.user.delete({
    where:{ id : userId}
  })
}