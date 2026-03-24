import { NextResponse } from "next/server";
import { db } from "@/db";
import { customQuote } from "@/db/schema";
import { z } from "zod";

const schema = z.object({
  fullName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional().nullable(),
  services: z.array(z.string()).optional(),
  message: z.string().optional().nullable(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { data, error } = schema.safeParse(body);
    if (error) {
      return NextResponse.json({ error: "Validation Error", details: error.format() }, { status: 400 });
    }

    await db.insert(customQuote).values({
      fullName: data.fullName,
      email: data.email,
      phone: data.phone ?? null,
      services: data.services ?? [],
      message: data.message ?? null,
    });
    return NextResponse.json({ message: "OK" }, { status: 201 });
  } catch (err) {
    console.error("custom-quote error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
