"use client"; // Required because we use hooks like useState and useRouter

import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

export default function LoginPage() {
  // 1. HOOKS SETUP:
  // useRouter: Allows us to programmatically change the page (redirect) after login.
  const router = useRouter();
  
  // useSearchParams: Allows us to read the URL query string (e.g., ?from=/dashboard/settings).
  // This was set by your Middleware when it kicked the user out.
  const searchParams = useSearchParams();

  // Local state for form handling
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // Prevent the browser from reloading the page (standard SPA behavior)
    event.preventDefault();
    
    setLoading(true);
    setError(null);

    try {
      // 2. API CALL:
      // Send the password to the API route we created earlier (app/api/admin/login/route.ts).
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      // 3. ERROR HANDLING:
      // If the API returns 401 (Unauthorized) or 500, handle it here.
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error ?? "Login failed");
        setLoading(false);
        return;
      }

      // 4. INTELLIGENT REDIRECT:
      // If the Middleware sent the user here, it added a "?from=/..." parameter.
      // We check for that parameter. If it exists, we send them back there.
      // If not (direct visit), we send them to the main dashboard.
      const redirectTo = searchParams.get("from") || "/dashboard";
      
      router.push(redirectTo);
      
      // Note: We don't set loading(false) here because the page is about to change anyway.
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Try again.");
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-purple-950 text-white px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-6 bg-white/10 border border-white/10 rounded-2xl p-6 shadow-lg"
      >
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold">Admin login</h1>
          <p className="text-sm text-white/70">
            Enter the admin password to access the dashboard.
          </p>
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // Styling: dark background with a purple focus ring
            className="w-full rounded-lg border border-white/20 bg-black/20 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Conditional Error Message */}
        {error && <p className="text-sm text-red-300">{error}</p>}

        <button
          type="submit"
          className="w-full rounded-lg bg-purple-500 py-2 text-sm font-medium hover:bg-purple-400 transition disabled:opacity-60"
          // Disable the button while loading to prevent double-clicks
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>

        <p className="text-xs text-white/60">
          Change the password via <code>ADMIN_PASSWORD</code> env. Default is{" "}
          <code>change-me</code>.
        </p>
      </form>
    </main>
  );
}