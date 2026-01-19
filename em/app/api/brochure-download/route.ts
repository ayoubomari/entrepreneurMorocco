import { NextResponse } from "next/server";
import { db } from "@/db";
import { brochureDownload } from "@/db/schema";
import { z } from "zod";

// Define validation schema based on the DB table
const brochureSchema = z.object({
  email: z.string().email("Format d'email invalide").max(255),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request body
    const validation = brochureSchema.safeParse(body);

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

    // Insert into MySQL via Drizzle
    await db.insert(brochureDownload).values({
      email: data.email,
    });

    return NextResponse.json(
      { message: "Brochure download recorded successfully" },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error recording brochure download:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
