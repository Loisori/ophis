"use client"; // Required because we use hooks like useState and useRouter

import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState, Suspense } from "react";

// 1. SUB-COMPONENT: Contains all your original logic
function LoginForm() {
  // HOOKS SETUP:
  const router = useRouter();
  
  // useSearchParams: Allows us to read the URL query string.
  // This causes the build error if not wrapped in Suspense!
  const searchParams = useSearchParams();

  // Local state for form handling
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // Prevent the browser from reloading the page
    event.preventDefault();
    
    setLoading(true);
    setError(null);

    try {
      // API CALL:
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      // ERROR HANDLING:
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error ?? "Login failed");
        setLoading(false);
        return;
      }

      // INTELLIGENT REDIRECT:
      const redirectTo = searchParams.get("from") || "/dashboard";
      
      router.push(redirectTo);
      
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Try again.");
      setLoading(false);
    }
  }

  return (
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
          className="w-full rounded-lg border border-white/20 bg-black/20 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>

      {/* Conditional Error Message */}
      {error && <p className="text-sm text-red-300">{error}</p>}

      <button
        type="submit"
        className="w-full rounded-lg bg-purple-500 py-2 text-sm font-medium hover:bg-purple-400 transition disabled:opacity-60"
        disabled={loading}
      >
        {loading ? "Signing in..." : "Sign in"}
      </button>

      <p className="text-xs text-white/60">
        Change the password via <code>ADMIN_PASSWORD</code> env. Default is{" "}
        <code>change-me</code>.
      </p>
    </form>
  );
}

// 2. MAIN EXPORT: Wraps the form in Suspense
export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-purple-950 text-white px-4">
      <Suspense fallback={<div className="text-white/70">Loading login...</div>}>
        <LoginForm />
      </Suspense>
    </main>
  );
}