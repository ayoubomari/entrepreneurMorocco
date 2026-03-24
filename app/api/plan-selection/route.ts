import { NextResponse } from "next/server";
import { db } from "@/db";
import { planSelection } from "@/db/schema";
import { z } from "zod";

const schema = z.object({
  selectedPlan: z.string().min(1),
  fullName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional().nullable(),
  resultEmail: z.string().email(),
  message: z.string().optional().nullable(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { data, error } = schema.safeParse(body);
    if (error) {
      return NextResponse.json({ error: "Validation Error", details: error.format() }, { status: 400 });
    }

    await db.insert(planSelection).values({
      selectedPlan: data.selectedPlan,
      fullName: data.fullName,
      email: data.email,
      phone: data.phone ?? null,
      resultEmail: data.resultEmail,
      message: data.message ?? null,
    });
    return NextResponse.json({ message: "OK" }, { status: 201 });
  } catch (err) {
    console.error("plan-selection error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
