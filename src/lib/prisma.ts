import { PrismaClient } from "@/generated/prisma/client";

// 1. HANDLE GLOBAL SCOPE FOR TYPESCRIPT:
// We access the global `globalThis` object (which exists in Node.js environment).
// We cast it to a custom type so TypeScript knows that a 'prisma' property *might* exist there.
const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

// 2. INSTANTIATE THE CLIENT (SINGLETON PATTERN):
// This logic says: "Use the existing global instance if it exists. If not, create a new one."
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    // Optional: Configure logs to see errors and warnings in your terminal.
    log: ["error", "warn"],
  });

// 3. SAVE TO GLOBAL (DEVELOPMENT ONLY):
// In production, we don't need to attach to global, because the app runs once and stays running.
// However, in Next.js DEVELOPMENT ("npm run dev"), files are re-run every time you save.
// Without this check, Next.js would create a NEW database connection on every file save,
// quickly crashing your database with a "Too many connections" error.
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}