import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface Params {
  params: { slug: string };
}

export async function GET(_request: Request, { params }: Params) {
  const slug = params.slug === "home" ? "/" : `/${params.slug}`;

  const page = await prisma.page.findUnique({
    where: { slug },
    include: {
      sections: {
        include: { content: true },
        orderBy: { position: "asc" },
      },
    },
  });

  if (!page) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(page);
}


