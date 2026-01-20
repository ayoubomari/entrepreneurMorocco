import { NextResponse } from "next/server";
import { db } from "@/db"; // Adjust this import based on where your db instance is exported
import { contactForm } from "@/db/schema"; // Adjust path to your schema

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, message, sourcePage } = body;

    // Basic server-side validation
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants" },
        { status: 400 },
      );
    }

    // Insert into MySQL via Drizzle
    await db.insert(contactForm).values({
      firstName,
      lastName,
      email,
      phone, // Can be null/empty based on your schema
      message,
      sourcePage,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Database insertion error (contact-form):", error);
    return NextResponse.json(
      { error: "Erreur lors de l'enregistrement de votre demande." },
      { status: 500 },
    );
  }
}
