import { NextResponse } from "next/server";
import { db } from "@/db";
import { profileQuiz } from "@/db/schema";
import { z } from "zod";

const schema = z.object({
  profile: z.string().min(1),
  stage: z.string().min(1),
  needs: z.array(z.string()).optional(),
  email: z.string().email(),
  phone: z.string().optional().nullable(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { data, error } = schema.safeParse(body);
    if (error) {
      return NextResponse.json({ error: "Validation Error", details: error.format() }, { status: 400 });
    }

    await db.insert(profileQuiz).values({
      profile: data.profile,
      stage: data.stage,
      needs: data.needs ?? [],
      email: data.email,
      phone: data.phone ?? null,
    });
    return NextResponse.json({ message: "OK" }, { status: 201 });
  } catch (err) {
    console.error("profile-quiz error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
