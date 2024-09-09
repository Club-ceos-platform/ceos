import { NextResponse } from "next/server";
import { handleCreate } from "./user.handler";
import { handleError } from "../utils/request";
import { userSchema } from "@/validators/user.validation";

export async function POST(req:Request){
  try {
    const body = await req.json();
    const request = userSchema.parse(body);
    const user = await handleCreate(request);
    return NextResponse.json({ user },{ status : 201 })
  } catch (error) {
   return handleError(error)
  }
}

export async function GET(){
  try {
    
  } catch (error) {
    return handleError(error)
  }
}

export async function PUT(request:Request){
  try {
    console.log(request);
  } catch (error) {
    return handleError(error)
  }
}