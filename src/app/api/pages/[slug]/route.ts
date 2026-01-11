import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const dynamic = 'force-dynamic';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug: rawSlug } = await params;
  const slug = rawSlug === "home" ? "/" : `/${rawSlug}`;

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

  return NextResponse.json(page, {
    headers: {
      'Cache-Control': 'no-store, max-age=0',
    },
  });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug: rawSlug } = await params;
    const slug = rawSlug === "home" ? "/" : `/${rawSlug}`;
    
    const body = await request.json();
    const { sections } = body;

    if (!Array.isArray(sections)) {
      return NextResponse.json({ error: "Invalid sections data" }, { status: 400 });
    }
    
    const updatePromises = sections.map((section: any, index: number) => {
      const contentData = section.content?.data ?? {}; 

      return prisma.section.upsert({
        where: { id: section.id || "new-id" },
        create: {
          page: { connect: { slug } },
          type: section.type,
          position: index,
          visible: section.visible ?? true,
          content: {
            create: {
              data: contentData as any,
            }
          }
        },
        update: {
          position: index,
          visible: section.visible ?? true,
          content: {
            upsert: {
              create: {
                data: contentData as any,
              },
              update: {
                data: contentData as any,
              }
            }
          }
        }
      });
    });

    await prisma.$transaction(updatePromises);

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Error updating page:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}