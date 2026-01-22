"use client";

import { useState } from "react";
import { useContactForm } from "@/hooks/useContactForm";
import "./brochure.css";
import { CloudRedEffect1 } from "@/components/CloudRedEffect";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/lib/supabase"; // Import du client Supabase

// 1. Define Zod Schema
const brochureSchema = z.object({
  email: z.email("Veuillez entrer une adresse email valide."),
});

type FormValues = z.infer<typeof brochureSchema>;

export default function BrochurePageComponent() {
  // Local state for UI feedback
  const [showSuccess, setShowSuccess] = useState(false);
  const [globalError, setGlobalError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting: isRHFSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(brochureSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  // Email hook - used for notification
  const { submitForm: submitEmail, isSubmitting: isEmailSubmitting } =
    useContactForm({
      formId: "brochure-download",
      onError: (err) => console.error("Email sending failed:", err),
    });

  const triggerPDFDownload = () => {
    const a = document.createElement("a");
    a.href = "/pdfs/EM Pitch Deck Fr V1.pdf";
    a.download = "brochure.pdf";
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const onSubmit = async (data: FormValues) => {
    setGlobalError(null);

    try {
      // 1. Submit directly to Supabase
      // Le nom de la table correspond au schéma Drizzle : "brochure_download"
      const { error } = await supabase.from("brochure_download").insert([
        {
          email: data.email,
        },
      ]);

      if (error) {
        console.error("Supabase insertion error:", error);
        throw new Error(error.message || "Erreur lors de l'enregistrement");
      }

      // 2. Trigger Success UI & Download
      setShowSuccess(true);
      triggerPDFDownload();

      setTimeout(() => {
        reset();
      }, 5000);

      // 3. Send Email (Background notification)
      submitEmail({
        Email: data.email,
        "Document demandé": "Brochure détaillée de l'offre",
        Source: "Site Web - Page Brochure",
        "Date de soumission": new Date().toLocaleString("fr-FR", {
          timeZone: "Africa/Casablanca",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      });
    } catch (err: any) {
      console.error("Submission error:", err);
      setGlobalError("Une erreur est survenue, veuillez réessayer plus tard.");
    }
  };

  const isSubmitting = isRHFSubmitting || isEmailSubmitting;

  if (showSuccess) {
    return (
      <main className="dlb relative overflow-hidden">
        <CloudRedEffect1 />

        <div className="dlb__wrap">
          <div
            className="dlb__success"
            style={{
              background: "#000",
              border: "2px solid #fff",
              padding: "40px",
              textAlign: "center",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                width: "64px",
                height: "64px",
                background: "#fff",
                borderRadius: "50%",
                margin: "0 auto 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000"
                strokeWidth="3"
              >
                <path
                  d="M20 6L9 17l-5-5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2
              style={{
                color: "#fff",
                fontSize: "28px",
                fontWeight: "700",
                margin: "0 0 16px",
              }}
            >
              C'EST ENVOYÉ !
            </h2>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                fontSize: "18px",
                lineHeight: "1.5",
                marginBottom: "24px",
              }}
            >
              Votre brochure est en cours de téléchargement.
            </p>
            <button
              onClick={triggerPDFDownload}
              style={{
                background: "transparent",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.3)",
                padding: "12px 24px",
                fontSize: "12px",
                fontWeight: "700",
                cursor: "pointer",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Relancer le téléchargement
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="dlb relative overflow-hidden">
      <CloudRedEffect1 />

      <div className="dlb__wrap">
        <header className="dlb__head">
          <h1 className="dlb__title">TÉLÉCHARGER LA BROCHURE DE L’OFFRE</h1>
          <p className="dlb__lead">
            Lisez les détails complets de l'accompagnement (contenu, tarifs,
            délais…).
          </p>
        </header>

        <form className="dlb__form" onSubmit={handleSubmit(onSubmit)}>
          <section className="dlb__block">
            <div className="dlb__inputLabel">
              1. VOTRE EMAIL (OBLIGATOIRE) :
            </div>
            <div className="dlb__inputs">
              <div
                className={`dlb__input-wrapper ${errors.email ? "error" : ""}`}
              >
                <input
                  type="email"
                  className="dlb__input"
                  placeholder="EMAIL OBLIGATOIRE :"
                  disabled={isSubmitting}
                  autoComplete="email"
                  {...register("email")}
                />
              </div>
              {errors.email && (
                <p className="dlb__error-msg">{errors.email.message}</p>
              )}
            </div>
          </section>

          {globalError && (
            <div
              style={{
                color: "#ff4444",
                fontWeight: "700",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              ⚠️ {globalError}
            </div>
          )}

          <div className="dlb__actions">
            <button
              type="submit"
              className="dlb__btn"
              disabled={isSubmitting || !isValid}
            >
              {isSubmitting
                ? "Envoi en cours..."
                : "Télécharger la brochure pdf"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
