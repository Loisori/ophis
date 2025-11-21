import { NextResponse } from "next/server";

const ADMIN_COOKIE = "admin_auth";

export async function POST(request: Request) {
  const { password } = (await request.json()) as { password?: string };

  const expected = process.env.ADMIN_PASSWORD ?? "change-me";

  if (!password || password !== expected) {
    return NextResponse.json({ ok: false, error: "Invalid credentials" }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE, "true", {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 4, // 4 hours
    sameSite: "lax",
  });

  return response;
}


