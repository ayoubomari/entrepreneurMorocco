// app/api/profile-quiz
import { NextResponse } from "next/server";
import { db } from "@/db";
import { profileQuiz } from "@/db/schema";
import { z } from "zod";
import { parsePhoneToE164 } from "@/lib/phone-utils";

const profileQuizSchema = z.object({
  profile: z.string().min(1, "Le profil est requis"),
  stage: z.string().min(1, "L'étape du projet est requise"),
  needs: z.array(z.string()).optional().default([]),
  email: z.email("Format d'email invalide").max(255),
  phone: z.string().optional().or(z.literal("")).nullable(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validation = profileQuizSchema.safeParse(body);

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

    await db.insert(profileQuiz).values({
      profile: data.profile,
      stage: data.stage,
      needs: data.needs,
      email: data.email,
      phone: cleanPhone,
    });

    return NextResponse.json(
      { message: "Profile quiz submitted successfully" },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error submitting profile quiz:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
