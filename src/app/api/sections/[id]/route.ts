import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client"; 
import { revalidatePath } from "next/cache"; // 1. IMPORT THIS

interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function PATCH(request: Request, { params }: RouteContext) {
  try {
    const { id } = await params;
    const body = await request.json();

    console.log(`[PATCH] Updating Section ${id}`);

    // Robust extraction logic
    let payloadData = body.data;
    if (payloadData === undefined && body.content && body.content.data) {
      payloadData = body.content.data;
    }

    const { position, visible } = body;

    const section = await prisma.section.update({
      where: { id },
      data: {
        ...(typeof position === "number" ? { position } : {}),
        ...(typeof visible === "boolean" ? { visible } : {}),
        
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

    // 2. ADD REVALIDATION HERE
    // This tells Vercel: "The data for the homepage changed, please clear the cache!"
    revalidatePath("/");          // Clear the public homepage cache
    revalidatePath("/dashboard"); // Clear the admin dashboard cache
    
    // Log for debugging
    console.log("[PATCH] Cache revalidated for '/' and '/dashboard'");

    return NextResponse.json(section);
  } catch (error) {
    console.error("Error updating section:", error);
    return NextResponse.json(
      { error: "Failed to update section" },
      { status: 500 }
    );
  }
}