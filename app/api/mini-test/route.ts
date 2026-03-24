import { NextResponse } from "next/server";
import { db } from "@/db";
import { miniTest } from "@/db/schema";
import { z } from "zod";

const schema = z.object({
  project: z.string().min(1),
  obstacles: z.array(z.string()).optional(),
  email: z.string().email(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { data, error } = schema.safeParse(body);
    if (error) {
      return NextResponse.json({ error: "Validation Error", details: error.format() }, { status: 400 });
    }

    await db.insert(miniTest).values({
      project: data.project,
      obstacles: data.obstacles ?? [],
      email: data.email,
    });
    return NextResponse.json({ message: "OK" }, { status: 201 });
  } catch (err) {
    console.error("mini-test error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
