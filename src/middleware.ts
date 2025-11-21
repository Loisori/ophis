import { NextRequest, NextResponse } from "next/server";

const ADMIN_COOKIE = "admin_auth";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect admin dashboard and future admin routes
  const isAdminRoute = pathname.startsWith("/dashboard");
  const isAuthRoute = pathname.startsWith("/login");

  if (!isAdminRoute) return NextResponse.next();

  const cookie = request.cookies.get(ADMIN_COOKIE)?.value;

  if (cookie === "true") {
    return NextResponse.next();
  }

  if (!isAuthRoute) {
    const url = new URL("/login", request.url);
    url.searchParams.set("from", pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};


