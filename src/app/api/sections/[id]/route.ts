import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Next.js 15+: params is a Promise
interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function PATCH(request: Request, { params }: RouteContext) {
  try {
    // 1. Await the params to get the ID
    const { id } = await params;

    const body = await request.json();

    const { position, visible, data } = body as {
      position?: number;
      visible?: boolean;
      data?: unknown;
    };

    const section = await prisma.section.update({
      where: { id }, // 2. Use the unwrapped 'id'
      data: {
        ...(typeof position === "number" ? { position } : {}),
        ...(typeof visible === "boolean" ? { visible } : {}),
        // Only update content if data is explicitly provided (not undefined)
        ...(data !== undefined
          ? {
              content: {
                upsert: {
                  create: { data },
                  update: { data },
                },
              },
            }
          : {}),
      },
      include: {
        content: true,
      },
    });

    return NextResponse.json(section);
  } catch (error) {
    console.error("Error updating section:", error);
    return NextResponse.json(
      { error: "Failed to update section" },
      { status: 500 }
    );
  }
}