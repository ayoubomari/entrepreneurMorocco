import { NextResponse } from "next/server";
import { db } from "@/db";
import { customQuote } from "@/db/schema";
import { z } from "zod";
import { parsePhoneToE164 } from "@/lib/phone-utils";

// Server-side validation schema matching the DB and Client form
const customQuoteSchema = z.object({
  fullName: z.string().min(1, "Le nom est requis"),
  email: z.email("Format d'email invalide").max(255),
  phone: z.string().optional().or(z.literal("")).nullable(),
  services: z.array(z.string()).optional().default([]),
  message: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validation = customQuoteSchema.safeParse(body);

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

    // Use smart helper to cleanup phone
    // 336... -> +336...
    // 06... -> +2126...
    const cleanPhone = parsePhoneToE164(data.phone || "");

    await db.insert(customQuote).values({
      fullName: data.fullName,
      email: data.email,
      phone: cleanPhone,
      services: data.services,
      message: data.message,
    });

    return NextResponse.json(
      { message: "Quote request submitted successfully" },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error submitting custom quote:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
