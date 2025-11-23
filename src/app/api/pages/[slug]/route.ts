import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Define the shape of the dynamic route parameters (e.g., /api/pages/[slug])
interface Params {
  // NOTE: If you are on Next.js 15, this type should be: Promise<{ slug: string }>
  params: { slug: string };
}

export async function GET(_request: Request, { params }: Params) {
  // 1. HANDLE NEXT.JS 15 PARAMS (If needed):
  // If you get an error here, change the line below to: const { slug: rawSlug } = await params;
  
  // 2. SLUG NORMALIZATION:
  // The database stores the homepage simply as "/".
  // However, you cannot easily fetch "/api/pages/" with a trailing slash as a param.
  // Usually, the frontend calls "/api/pages/home".
  // This logic converts "home" -> "/" and "about" -> "/about" to match your DB format.
  const slug = params.slug === "home" ? "/" : `/${params.slug}`;

  // 3. DATABASE QUERY:
  // Find the specific page that matches the normalized URL slug.
  const page = await prisma.page.findUnique({
    where: { slug },
    // 4. JOIN RELATIONS:
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

  // 5. HANDLE 404:
  // If the user requests a page that doesn't exist (e.g., /contact),
  // return a standard 404 error so the frontend can show a "Page Not Found" screen.
  if (!page) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  // 6. SUCCESS:
  // Return the full page object (Page -> Sections[] -> Content)
  return NextResponse.json(page);
}