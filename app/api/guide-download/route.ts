import { NextResponse } from "next/server";
import { db } from "@/db";
import { guideDownload } from "@/db/schema";
import { z } from "zod";

const schema = z.object({
  firstName: z.string().min(1),
  email: z.string().email(),
  guideName: z.string().optional().nullable(),
  source: z.string().optional().nullable(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { data, error } = schema.safeParse(body);
    if (error) {
      return NextResponse.json({ error: "Validation Error", details: error.format() }, { status: 400 });
    }

    await db.insert(guideDownload).values({
      firstName: data.firstName,
      email: data.email,
      guideName: data.guideName ?? null,
      source: data.source ?? null,
    });
    return NextResponse.json({ message: "OK" }, { status: 201 });
  } catch (err) {
    console.error("guide-download error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
