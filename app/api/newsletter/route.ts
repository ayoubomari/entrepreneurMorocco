import { NextResponse } from "next/server";
import { db } from "@/db";
import { newsletterSubscription } from "@/db/schema";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { data, error } = schema.safeParse(body);
    if (error) {
      return NextResponse.json({ error: "Validation Error", details: error.format() }, { status: 400 });
    }

    await db.insert(newsletterSubscription).values({ email: data.email });
    return NextResponse.json({ message: "OK" }, { status: 201 });
  } catch (err: any) {
    // MySQL error 1062 = duplicate entry (unique constraint)
    if (err?.cause?.errno === 1062 || err?.message?.includes("Duplicate entry")) {
      return NextResponse.json({ error: "already_subscribed" }, { status: 409 });
    }
    console.error("newsletter error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
