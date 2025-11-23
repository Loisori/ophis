import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Next.js 15+ Requirement: Dynamic route parameters are now Promises.
// We define the type to match this new behavior so TypeScript is happy.
interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function PATCH(request: Request, { params }: RouteContext) {
  try {
    // 1. UNWRAP PARAMS (Next.js 15 Specific):
    // We must 'await' the params object to extract the dynamic 'id' (e.g., section-123).
    const { id } = await params;

    // 2. PARSE REQUEST BODY:
    // Get the JSON payload sent from the client.
    const body = await request.json();

    // 3. DESTRUCTURE INPUTS:
    // We extract only the fields we expect. 'data' here refers to the actual JSON content 
    // inside the section (e.g., the text of a Hero, or image URLs).
    const { position, visible, data } = body as {
      position?: number;
      visible?: boolean;
      data?: unknown;
    };

    // 4. PERFORM UPDATE:
    const section = await prisma.section.update({
      where: { id }, // Target the specific section by ID
      data: {
        // --- CONDITIONAL SPREAD SYNTAX ---
        // These lines look complex, but they are very efficient.
        // We check if 'position' was actually sent (is a number). 
        // If yes, we add { position: value } to the update object.
        // If no, we add {} (nothing), so the existing value in the DB remains unchanged.
        ...(typeof position === "number" ? { position } : {}),
        ...(typeof visible === "boolean" ? { visible } : {}),
        
        // --- NESTED UPSERT ---
        // Only attempt to update the 'content' relation if 'data' was provided.
        ...(data !== undefined
          ? {
              content: {
                // 'upsert' is a combination of Update and Insert.
                // It solves the problem: "Does this section already have a content row?"
                upsert: {
                  create: { data }, // If no content record exists, create one.
                  update: { data }, // If a content record exists, update it.
                },
              },
            }
          : {}),
      },
      // Return the updated Section AND the nested Content object in the response.
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