import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client"; 

interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function PATCH(request: Request, { params }: RouteContext) {
  try {
    const { id } = await params;
    const body = await request.json();

    console.log(`[PATCH] Updating Section ${id}`);

    // 1. ROBUST EXTRACTION:
    // The frontend might send { data: {...} } OR { content: { data: {...} } }
    // We check both places to ensure we catch the payload.
    let payloadData = body.data;
    
    // If not found at root, check inside 'content' object
    if (payloadData === undefined && body.content && body.content.data) {
      payloadData = body.content.data;
    }

    const { position, visible } = body;

    // DEBUG LOG: See exactly what we are about to save
    if (payloadData !== undefined) {
      console.log(`[PATCH] Found data to update:`, JSON.stringify(payloadData).slice(0, 100) + "...");
    } else {
      console.log(`[PATCH] No 'data' found. Skipping content update.`);
    }

    const section = await prisma.section.update({
      where: { id },
      data: {
        ...(typeof position === "number" ? { position } : {}),
        ...(typeof visible === "boolean" ? { visible } : {}),
        
        // 2. USE THE EXTRACTED PAYLOAD (payloadData):
        ...(payloadData !== undefined
          ? {
              content: {
                upsert: {
                  create: { data: payloadData as any }, 
                  update: { data: payloadData as any }, 
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