import { NextResponse } from "next/server";
import { db } from "@/db";
import { guideDownload } from "@/db/schema";
import { z } from "zod";

// Define validation schema matching the table structure
const guideDownloadSchema = z.object({
  firstName: z.string().min(1, "Le prénom est requis").max(100),
  email: z.email("Format d'email invalide").max(255),
  guideName: z.string().max(255).optional(),
  source: z.string().max(255).optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request body
    const validation = guideDownloadSchema.safeParse(body);

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

    // Insert into 'guide_download' table
    await db.insert(guideDownload).values({
      firstName: data.firstName,
      email: data.email,
      guideName: data.guideName,
      source: data.source,
    });

    return NextResponse.json(
      { message: "Guide download registered successfully" },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error registering guide download:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
