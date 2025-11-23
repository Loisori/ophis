import { NextRequest, NextResponse } from "next/server";

// Define the specific name of the cookie where the authentication token/status is stored.
const ADMIN_COOKIE = "admin_auth";

// This function runs before a request is completed.
export function middleware(request: NextRequest) {
  // Extract the current path (e.g., "/dashboard" or "/login") from the request URL.
  const { pathname } = request.nextUrl;

  // Helper booleans to determine what kind of page the user is trying to visit.
  // isAdminRoute: true if the URL starts with "/dashboard".
  const isAdminRoute = pathname.startsWith("/dashboard");
  // isAuthRoute: true if the URL starts with "/login".
  const isAuthRoute = pathname.startsWith("/login");

  // 1. INITIAL CHECK:
  // If the user is NOT trying to access a protected admin route, 
  // we let them pass immediately without checking cookies.
  if (!isAdminRoute) return NextResponse.next();

  // 2. GET COOKIE:
  // Attempt to retrieve the "admin_auth" cookie from the user's browser.
  // The '?.value' safely gets the value if the cookie exists, or returns undefined.
  const cookie = request.cookies.get(ADMIN_COOKIE)?.value;

  // 3. VERIFY COOKIE:
  // If the cookie exists and equals the specific string "true", 
  // the user is authenticated. Allow the request to proceed.
  if (cookie === "true") {
    return NextResponse.next();
  }

  // 4. REDIRECT LOGIC:
  // If we reached this point, the user is trying to visit a dashboard page
  // but does NOT have the correct cookie.
  
  // We ensure they aren't already on the login page (to prevent infinite loops),
  // though the 'isAdminRoute' check at the top mostly handles this.
  if (!isAuthRoute) {
    // Create a new URL pointing to the login page.
    const url = new URL("/login", request.url);
    
    // Add a query parameter (e.g., /login?from=/dashboard/settings).
    // This allows you to redirect them back to their original destination after they log in.
    url.searchParams.set("from", pathname);
    
    // Redirect the user to the constructed Login URL.
    return NextResponse.redirect(url);
  }

  // Default fallback: allow the request (rarely reached due to logic above).
  return NextResponse.next();
}

// Configuration to limit where this middleware runs.
export const config = {
  // This middleware will ONLY execute on routes starting with /dashboard.
  // It will not run on homepage, /login, or static files.
  matcher: ["/dashboard/:path*"],
};