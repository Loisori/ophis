import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// This function handles HTTP GET requests sent to this specific API route.
// Example usage: fetching this route to populate a list of pages in your Admin Dashboard.
export async function GET() {
  
  // 1. DATABASE QUERY:
  // Use Prisma to retrieve all records from the "Page" table.
  const pages = await prisma.page.findMany({
    // Sort the results alphabetically by the 'slug' field.
    // Example: "/about" will appear before "/contact" or "/home".
    orderBy: { slug: "asc" },
  });

  // 2. RETURN JSON:
  // Convert the array of page objects into a JSON response 
  // and send it back to the client (browser or frontend component).
  return NextResponse.json(pages);
}