// app/api/mini-test/route.ts
import { NextResponse } from "next/server";
import { db } from "@/db";
import { miniTest } from "@/db/schema";
import { z } from "zod";

// Define validation schema matching the table structure
const miniTestSchema = z.object({
  project: z.string().min(1, "Le projet est requis"),
  obstacles: z.array(z.string()).optional().default([]),
  email: z.email("Format d'email invalide").max(255),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request body
    const validation = miniTestSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          error: "Validation Error",
          details: validation.error.format(),
        },
        { status: 400 },
      );
    }

    const { data } = validation;

    // Insert into 'mini_test' table
    await db.insert(miniTest).values({
      project: data.project,
      obstacles: data.obstacles,
      email: data.email,
    });

    return NextResponse.json(
      { message: "Mini test submitted successfully" },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error submitting mini test:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
