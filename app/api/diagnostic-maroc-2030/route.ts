import { NextResponse } from "next/server";
import { db } from "@/db";
import { diagnosticMaroc2030 } from "@/db/schema";
import { z } from "zod";
import { parsePhoneToE164 } from "@/lib/phone-utils";

// API Validation Schema matches the DB structure
const diagnosticSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.email(),
  phone: z.string().min(1),

  // Project details
  projectDate: z.string(),
  situation: z.string(),
  familyStatus: z.string(),
  childrenCount: z.string().optional().nullable(),
  childrenAges: z.string().optional().nullable(),

  // JSON fields
  motivations: z.array(z.string()),

  // Skills & Finance
  mainSkill: z.string(),
  expYears: z.string(),
  revenueGen: z.string(),
  budget: z.string(),
  runway: z.string(),

  // Path & Network
  path: z.string(),
  network: z.string(),
  message: z.string().optional().nullable(),

  // Contact preferences
  callOptIn: z.string(),
  availabilities: z.array(z.string()).optional().nullable(),

  // Scoring (Calculated on client)
  score: z.number(),
  resultLabel: z.string(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validation = diagnosticSchema.safeParse(body);

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

    // Clean phone number (e.g., 06 61... -> +212 6 61...)
    const cleanPhone = parsePhoneToE164(data.phone) || data.phone;

    await db.insert(diagnosticMaroc2030).values({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: cleanPhone,
      projectDate: data.projectDate,
      situation: data.situation,
      familyStatus: data.familyStatus,
      childrenCount: data.childrenCount || null,
      childrenAges: data.childrenAges || null,
      motivations: data.motivations,
      mainSkill: data.mainSkill,
      expYears: data.expYears,
      revenueGen: data.revenueGen,
      budget: data.budget,
      runway: data.runway,
      path: data.path,
      network: data.network,
      message: data.message || null,
      callOptIn: data.callOptIn,
      availabilities: data.availabilities || [],
      score: data.score,
      resultLabel: data.resultLabel,
    });

    return NextResponse.json(
      { message: "Diagnostic submitted successfully" },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error submitting diagnostic:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
