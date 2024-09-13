import { NextResponse } from "next/server";
import { handleError } from "../utils/request";
import { handleGetUsersAwaitingApproval, handleGetUsersPendingPayment } from "./admin.handler";

export async function POST(req: Request) {

}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const action = searchParams.get('action');

    if (action === "getUsersAwaitingApproval") {

      const users = await handleGetUsersAwaitingApproval();

      return NextResponse.json({ users }, { status: 201 })

    } else if (action === 'getUsersPendingPayment') {

      const users = await handleGetUsersPendingPayment();

      return NextResponse.json({ users }, { status: 201 })

    } else {
      throw new Error('Action non définie ou invalide')
    }
  } catch (error) {
    return handleError(error)
  }
}