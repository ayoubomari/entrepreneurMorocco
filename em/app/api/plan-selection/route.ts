// plan-selection
import { NextResponse } from "next/server";
import { db } from "@/db";
import { planSelection } from "@/db/schema";
import { z } from "zod";
import { parsePhoneToE164 } from "@/lib/phone-utils";

// Define schema matching the Drizzle table structure
const planSelectionSchema = z.object({
  selectedPlan: z.string().min(1, "Le plan est requis"),
  fullName: z.string().min(1, "Le nom complet est requis"),
  email: z.string().email("Format d'email invalide").max(255),
  phone: z.string().optional().or(z.literal("")).nullable(),
  resultEmail: z.string().email("Format d'email de résultat invalide").max(255),
  message: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validation = planSelectionSchema.safeParse(body);

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
    const cleanPhone = parsePhoneToE164(data.phone || "");

    await db.insert(planSelection).values({
      selectedPlan: data.selectedPlan,
      fullName: data.fullName,
      email: data.email,
      phone: cleanPhone,
      resultEmail: data.resultEmail,
      message: data.message,
    });

    return NextResponse.json(
      { message: "Plan selection submitted successfully" },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error submitting plan selection:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
