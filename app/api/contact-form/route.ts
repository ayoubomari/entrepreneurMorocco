import { NextResponse } from "next/server";
import { db } from "@/db";
import { contactForm } from "@/db/schema";
import { z } from "zod";

const schema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional().nullable(),
  message: z.string().optional().nullable(),
  sourcePage: z.string().optional().nullable(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { data, error } = schema.safeParse(body);
    if (error) {
      return NextResponse.json({ error: "Validation Error", details: error.format() }, { status: 400 });
    }

    await db.insert(contactForm).values({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone ?? null,
      message: data.message ?? null,
      sourcePage: data.sourcePage ?? null,
    });
    return NextResponse.json({ message: "OK" }, { status: 201 });
  } catch (err) {
    console.error("contact-form error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
