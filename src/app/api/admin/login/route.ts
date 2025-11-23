import { NextResponse } from "next/server";

const ADMIN_COOKIE = "admin_auth";

export async function POST(request: Request) {
  const { password } = (await request.json()) as { password?: string };

  // UPDATED: We now strictly read from the environment variable.
  // If process.env.ADMIN_PASSWORD is not read, this will be undefined.
  const expected = process.env.ADMIN_PASSWORD;

  // Safety Check: If the server environment variable is missing, we block everything.
  // This prevents the system from working if you forget to set the .env file.
  if (!expected) {
    console.error("Error: ADMIN_PASSWORD is not defined in .env file");
    return NextResponse.json({ ok: false, error: "Server configuration error" }, { status: 500 });
  }

  // Compare the user's input against the environment variable
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