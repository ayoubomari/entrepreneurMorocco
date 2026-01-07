// app/api/contact/route.ts - Optimized for Hostinger SMTP
import { Console } from "console";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const FORM_TEMPLATES: Record<string, any> = {
  "guide-download": {
    title: "Nouveau Téléchargement - Guide Entrepreneur",
    icon: "https://cdn.jsdelivr.net/npm/lucide@latest/icons/file-text.svg",
    color: "#2563eb",
    description: "Un visiteur a téléchargé le guide '7 Erreurs à Éviter'",
  },
  "contact-form": {
    title: "Formulaire de Contact",
    icon: "https://cdn.jsdelivr.net/npm/lucide@latest/icons/mail.svg",
    color: "#059669",
    description: "Nouveau message depuis le formulaire de contact",
  },
  "profile-quiz": {
    title: "Quiz Profil Entrepreneur",
    icon: "https://cdn.jsdelivr.net/npm/lucide@latest/icons/target.svg",
    color: "#7c3aed",
    description: "Résultats du questionnaire de profil",
  },
  "mini-test": {
    title: "Mini Test - Par où Commencer",
    icon: "https://cdn.jsdelivr.net/npm/lucide@latest/icons/zap.svg",
    color: "#dc2626",
    description: "Résultats du mini test entrepreneurial",
  },
  "premium-plan": {
    title: "Demande Accompagnement Premium",
    icon: "https://cdn.jsdelivr.net/npm/lucide@latest/icons/gem.svg",
    color: "#f59e0b",
    description: "Nouvelle demande d'accompagnement premium (3 mois)",
  },
  "brochure-download": {
    title: "Téléchargement Brochure Offre",
    icon: "https://cdn.jsdelivr.net/npm/lucide@latest/icons/download.svg",
    color: "#06b6d4",
    description: "Téléchargement de la brochure détaillée",
  },
  "custom-quote": {
    title: "Demande de Devis Sur-Mesure",
    icon: "https://cdn.jsdelivr.net/npm/lucide@latest/icons/calculator.svg",
    color: "#8b5cf6",
    description: "Nouvelle demande de devis personnalisé",
  },
};

function generateEmailHTML(formId: string, fields: Record<string, any>) {
  const template = FORM_TEMPLATES[formId] || {
    title: "Nouveau Formulaire",
    icon: "https://cdn.jsdelivr.net/npm/lucide@latest/icons/form-input.svg",
    color: "#ef4444",
    description: "Nouvelle soumission de formulaire",
  };

  const fieldsHTML = Object.entries(fields)
    .map(([key, value]) => {
      const displayValue = Array.isArray(value)
        ? value.join(", ")
        : String(value);
      return `
        <tr>
          <td style="padding: 20px 24px; border-bottom: 1px solid #333; font-weight: 600; color: #ffffff; background-color: #111; width: 200px; font-family: 'Montserrat', Arial, sans-serif; font-size: 14px;">
            ${key}
          </td>
          <td style="padding: 20px 24px; border-bottom: 1px solid #333; color: #ffffff; background-color: #000; font-family: 'Montserrat', Arial, sans-serif; font-size: 14px;">
            ${displayValue}
          </td>
        </tr>
      `;
    })
    .join("");

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${template.title}</title>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet">
    </head>
    <body style="margin: 0; padding: 20px; font-family: 'Montserrat', Arial, sans-serif; background-color: #000; color: #ffffff;">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 650px; margin: 0 auto; background-color: #000; border-radius: 16px; overflow: hidden; border: 2px solid #ef4444;">
        
        <!-- Header -->
        <tr>
          <td style="background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); padding: 40px 30px; text-align: center; position: relative;">
            <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; font-family: 'Montserrat', Arial, sans-serif; text-transform: uppercase; letter-spacing: 1px;">
              ${template.title}
            </h1>
            <p style="margin: 12px 0 0; color: rgba(255, 255, 255, 0.95); font-size: 16px; font-family: 'Montserrat', Arial, sans-serif; font-weight: 400;">
              ${template.description}
            </p>
          </td>
        </tr>

        <!-- Info Section with left border accent -->
        <tr>
          <td style="padding: 30px;">
            <div style="background-color: #111; border-radius: 12px; border-left: 6px solid #ef4444; padding: 24px; margin-bottom: 30px;">
              <p style="margin: 0 0 12px; color: #ffffff; font-size: 14px; font-family: 'Montserrat', Arial, sans-serif; font-weight: 600;">
                <strong>Reçu le:</strong> ${new Date().toLocaleString("fr-FR", {
                  timeZone: "Africa/Casablanca",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              
              <p style="margin: 0; color: #ffffff; font-size: 14px; font-family: 'Montserrat', Arial, sans-serif; font-weight: 600;">
                <strong>Formulaire:</strong> ${formId}
              </p>
            </div>
          </td>
        </tr>

        <!-- Data Table -->
        <tr>
          <td style="padding: 0 30px 30px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; border: 2px solid #333; border-radius: 12px; overflow: hidden; background-color: #000;">
              ${fieldsHTML}
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background-color: #111; padding: 30px; text-align: center; border-top: 2px solid #ef4444;">
            <p style="margin: 0 0 8px; color: #ffffff; font-size: 18px; font-weight: 700; font-family: 'Montserrat', Arial, sans-serif;">
              Entrepreneurs Morocco
            </p>
            <p style="margin: 0; color: rgba(255, 255, 255, 0.7); font-size: 12px; font-family: 'Montserrat', Arial, sans-serif; font-weight: 400;">
              Email automatique depuis entrepreneursmorocco.com
            </p>
          </td>
        </tr>

      </table>
    </body>
    </html>
  `;
}

export async function POST(req: Request) {
  try {
    const { formId, subject, fields } = await req.json();

    // Validation
    if (!formId || !fields) {
      return NextResponse.json(
        { ok: false, error: "Form ID and fields are required" },
        { status: 400 }
      );
    }

    // Dynamic import to avoid build issues
    const nodemailer = await import("nodemailer");

    // Hostinger SMTP configuration - exactly as provided
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.hostinger.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_IS_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Verify SMTP connection
    try {
      await transporter.verify();
      console.log("✅ SMTP connection successful with Hostinger");
    } catch (e) {
      console.error("error", e);
      console.error("❌ SMTP verify error:", JSON.stringify(e));
      return NextResponse.json(
        { ok: false, error: `SMTP connection failed: ${e}` },
        { status: 500 }
      );
    }

    const toAddress = "salam@entrepreneursmorocco.com";
    const template = FORM_TEMPLATES[formId];
    const mailSubject =
      subject ||
      `${template?.title || "Nouveau formulaire"} - entrepreneursmorocco.com`;

    // Generate HTML email
    const html = generateEmailHTML(formId, fields);

    // Generate plain text version
    const text = `
${template?.title || "Nouveau formulaire"} 

${template?.description || "Nouvelle soumission de formulaire"}

Reçu le: ${new Date().toLocaleString("fr-FR", {
      timeZone: "Africa/Casablanca",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })}

Formulaire: ${formId}

Détails:
${Object.entries(fields)
  .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : v}`)
  .join("\n")}

---
Entrepreneurs Morocco
entrepreneursmorocco.com
    `.trim();

    // Send email
    const result = await transporter.sendMail({
      from: "Entrepreneurs Morocco <salam@entrepreneursmorocco.com>",
      to: toAddress,
      subject: mailSubject,
      text,
      html,
      replyTo: fields?.Email || fields?.email || fields?.EMAIL,
    });

    console.log("✅ Email sent successfully:", result.messageId);

    return NextResponse.json({
      ok: true,
      messageId: result.messageId,
    });
  } catch (e) {
    console.error("❌ Email error:", e);
    return NextResponse.json(
      { ok: false, error: `Failed to send email: ${e}` },
      { status: 500 }
    );
  }
}
