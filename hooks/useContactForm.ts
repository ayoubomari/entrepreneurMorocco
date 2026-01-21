import { useState } from "react";
import emailjs from "@emailjs/browser";

// 1. Copy the exact configuration from your old route.ts
const FORM_TEMPLATES: Record<
  string,
  { title: string; description: string; color: string }
> = {
  "guide-download": {
    title: "Nouveau Téléchargement - Guide Entrepreneur",
    description: "Un visiteur a téléchargé le guide '7 Erreurs à Éviter'",
    color: "#2563eb",
  },
  "contact-form": {
    title: "Formulaire de Contact",
    description: "Nouveau message depuis le formulaire de contact",
    color: "#059669",
  },
  "profile-quiz": {
    title: "Quiz Profil Entrepreneur",
    description: "Résultats du questionnaire de profil",
    color: "#7c3aed",
  },
  "mini-test": {
    title: "Mini Test - Par où Commencer",
    description: "Résultats du mini test entrepreneurial",
    color: "#dc2626",
  },
  "premium-plan": {
    title: "Demande Accompagnement Premium",
    description: "Nouvelle demande d'accompagnement premium (3 mois)",
    color: "#f59e0b",
  },
  "brochure-download": {
    title: "Téléchargement Brochure Offre",
    description: "Téléchargement de la brochure détaillée",
    color: "#06b6d4",
  },
  "custom-quote": {
    title: "Demande de Devis Sur-Mesure",
    description: "Nouvelle demande de devis personnalisé",
    color: "#8b5cf6",
  },
  "diagnostic-maroc-2030": {
    title: "Diagnostic Projet Maroc 2030",
    description:
      "Nouveau diagnostic complet pour un projet d'installation au Maroc",
    color: "#e11d48",
  },
};

interface ContactFormData {
  [key: string]: string | string[];
}

interface UseContactFormProps {
  formId: string;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export function useContactForm({
  formId,
  onSuccess,
  onError,
}: UseContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitForm = async (formData: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);

    const templateInfo = FORM_TEMPLATES[formId] || {
      title: "Nouveau Formulaire",
      description: "Nouvelle soumission",
      color: "#ef4444",
    };

    // 2. Generate the HTML Rows exactly like the old server file did
    // This allows the email to look perfect without complex logic in EmailJS
    const tableRowsHTML = Object.entries(formData)
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

    const currentDate = new Date().toLocaleString("fr-FR", {
      timeZone: "Africa/Casablanca",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const userEmail =
      formData.email ||
      formData.Email ||
      formData.EMAIL ||
      "salam@entrepreneursmorocco.com";

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      await emailjs.send(
        serviceId,
        templateId,
        {
          // We pass these variables to the template
          page_title: templateInfo.title,
          page_description: templateInfo.description,
          theme_color: templateInfo.color,
          submission_date: currentDate,
          form_id: formId,
          table_rows: tableRowsHTML, // Passing raw HTML here
          reply_to: userEmail,
        },
        publicKey,
      );

      setIsSuccess(true);
      onSuccess?.();
    } catch (err) {
      console.error(err);
      setError("Une erreur est survenue lors de l'envoi.");
      onError?.("Erreur d'envoi");
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setIsSuccess(false);
    setError(null);
    setIsSubmitting(false);
  };

  return { submitForm, isSubmitting, isSuccess, error, reset };
}
