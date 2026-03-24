import { NextResponse } from "next/server";
import { db } from "@/db";
import { diagnosticMaroc2030 } from "@/db/schema";
import { z } from "zod";

const schema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  projectDate: z.string().min(1),
  situation: z.string().min(1),
  familyStatus: z.string().min(1),
  childrenCount: z.string().optional().nullable(),
  childrenAges: z.string().optional().nullable(),
  motivations: z.array(z.string()),
  mainSkill: z.string().min(1),
  expYears: z.string().min(1),
  revenueGen: z.string().min(1),
  budget: z.string().min(1),
  runway: z.string().min(1),
  path: z.string().min(1),
  network: z.string().min(1),
  message: z.string().optional().nullable(),
  callOptIn: z.string().min(1),
  availabilities: z.array(z.string()).optional(),
  score: z.number().optional().nullable(),
  resultLabel: z.string().optional().nullable(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { data, error } = schema.safeParse(body);
    if (error) {
      return NextResponse.json({ error: "Validation Error", details: error.format() }, { status: 400 });
    }

    await db.insert(diagnosticMaroc2030).values({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      projectDate: data.projectDate,
      situation: data.situation,
      familyStatus: data.familyStatus,
      childrenCount: data.childrenCount ?? null,
      childrenAges: data.childrenAges ?? null,
      motivations: data.motivations,
      mainSkill: data.mainSkill,
      expYears: data.expYears,
      revenueGen: data.revenueGen,
      budget: data.budget,
      runway: data.runway,
      path: data.path,
      network: data.network,
      message: data.message ?? null,
      callOptIn: data.callOptIn,
      availabilities: data.availabilities ?? [],
      score: data.score ?? null,
      resultLabel: data.resultLabel ?? null,
    });
    return NextResponse.json({ message: "OK" }, { status: 201 });
  } catch (err) {
    console.error("diagnostic-maroc-2030 error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
