import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  _request: NextRequest,
  // 1. HANDLE NEXT.JS 15 PARAMS:
  // In Next.js 15, params is a Promise that must be awaited.
  { params }: { params: Promise<{ slug: string }> }
) {
  // 2. AWAIT PARAMS:
  // We extract the raw slug from the promise before using it.
  const { slug: rawSlug } = await params;

  // 3. SLUG NORMALIZATION:
  // The database stores the homepage simply as "/".
  // However, you cannot easily fetch "/api/pages/" with a trailing slash as a param.
  // Usually, the frontend calls "/api/pages/home".
  // This logic converts "home" -> "/" and "about" -> "/about" to match your DB format.
  const slug = rawSlug === "home" ? "/" : `/${rawSlug}`;

  // 4. DATABASE QUERY:
  // Find the specific page that matches the normalized URL slug.
  const page = await prisma.page.findUnique({
    where: { slug },
    // 5. JOIN RELATIONS:
    // We need the page data AND all the sections inside it.
    include: {
      sections: {
        // Also get the content JSON for each section.
        include: { content: true },
        // Critical: Sort sections so the Hero stays at the top, etc.
        orderBy: { position: "asc" },
      },
    },
  });

  // 6. HANDLE 404:
  // If the user requests a page that doesn't exist (e.g., /contact),
  // return a standard 404 error so the frontend can show a "Page Not Found" screen.
  if (!page) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  // 7. SUCCESS:
  // Return the full page object (Page -> Sections[] -> Content)
  return NextResponse.json(page);
}