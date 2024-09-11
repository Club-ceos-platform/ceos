import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { User as PrismaUser } from "@prisma/client";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const token = await getToken({ req: request });
  const user: PrismaUser | null = token?.user as PrismaUser;

  const isAuthRoute = ["/signin", "/signup"].includes(pathname);
  const isAdminRoute = pathname.startsWith("/admin");
  const isMemberRoute = pathname.startsWith("/member");

  if (token) {
    if (isAuthRoute) {
      if (user.role === "ADMIN") {
        return NextResponse.redirect(new URL("/admin/dashboard", request.nextUrl));
      } else if (user.role === "MEMBER") {
        return NextResponse.redirect(new URL("/member", request.nextUrl));
      }
    }

    if ((isAdminRoute && user.role !== "ADMIN") || (isMemberRoute && user.role !== "MEMBER")) {
      return NextResponse.redirect(new URL("/signin", request.nextUrl));
    }

    if (pathname.startsWith("/api/admin") && user.role !== "ADMIN") {
      return new NextResponse(
        JSON.stringify({ success: false, message: "Accès refusé." }),
        { status: 403, headers: { "Content-Type": "application/json" } }
      );
    }

    if ((pathname.startsWith("/api/member") && user.role !== "MEMBER") || (pathname.startsWith("/api/member") && user.role !== "ADMIN") ) {
      return new NextResponse(
        JSON.stringify({ success: false, message: "Accès refusé." }),
        { status: 403, headers: { "Content-Type": "application/json" } }
      );
    }
  } else {
    if (isAdminRoute || isMemberRoute) {
      return NextResponse.redirect(new URL("/signin", request.nextUrl));
    }

    if (pathname.startsWith("/api/admin") || pathname.startsWith("/api/member")) {
      return new NextResponse(
        JSON.stringify({ success: false, message: "Authentification requise." }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/signin",
    "/signup",
    "/admin/:path*",
    "/member/:path*",
    "/api/admin/:function",
    "/api/member/:function",
  ],
};
