import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const pages = await prisma.page.findMany({
    orderBy: { slug: "asc" },
  });

  return NextResponse.json(pages);
}


