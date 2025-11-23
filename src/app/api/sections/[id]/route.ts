import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client"; 

// Next.js 15+ Requirement: Dynamic route parameters are now Promises.
interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function PATCH(request: Request, { params }: RouteContext) {
  try {
    // 1. UNWRAP PARAMS (Next.js 15 Specific):
    const { id } = await params;

    // 2. PARSE REQUEST BODY:
    const body = await request.json();

    // 3. DESTRUCTURE INPUTS:
    const { position, visible, data } = body as {
      position?: number;
      visible?: boolean;
      data?: unknown;
    };

    // 4. PERFORM UPDATE:
    const section = await prisma.section.update({
      where: { id },
      data: {
        // --- CONDITIONAL SPREAD SYNTAX ---
        ...(typeof position === "number" ? { position } : {}),
        ...(typeof visible === "boolean" ? { visible } : {}),
        
        // --- NESTED UPSERT ---
        ...(data !== undefined
          ? {
              content: {
                upsert: {
                  // FIX: Use 'any' to bypass the "InputJsonValue" error.
                  // This is safe because Prisma runtime will still validate it's valid JSON.
                  create: { data: data as any }, 
                  update: { data: data as any }, 
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