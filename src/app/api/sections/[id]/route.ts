import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface Params {
  params: { id: string };
}

export async function PATCH(request: Request, { params }: Params) {
  const body = await request.json();

  const { position, visible, data } = body as {
    position?: number;
    visible?: boolean;
    data?: unknown;
  };

  const section = await prisma.section.update({
    where: { id: params.id },
    data: {
      ...(typeof position === "number" ? { position } : {}),
      ...(typeof visible === "boolean" ? { visible } : {}),
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
}


