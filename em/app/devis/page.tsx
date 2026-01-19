"use client";

import { useState } from "react";
import { useContactForm } from "@/hooks/useContactForm";
import "./devis.css";
import { CloudRedEffect1 } from "@/components/CloudRedEffect";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// Replaced libphonenumber-js with your helper
import { parsePhoneToE164 } from "@/lib/phone-utils";

// 1. Define Zod Schema
const formSchema = z.object({
  fullName: z.string().min(2, "Le nom est requis."),
  email: z.email("Format d'email invalide."),
  // Updated phone validation to match profile-quiz example
  phone: z.string().refine((val) => {
    if (!val) return true; // Optional field
    return !!parsePhoneToE164(val);
  }, "Numéro invalide. Ex: 06 61... ou +33 6..."),
  services: z.array(z.string()).optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const SERVICES_OPTS: Array<[string, string]> = [
  ["site", "Site web"],
  ["seo", "SEO"],
  ["content", "Contenu / blog"],
  ["brand", "Branding / identité"],
  ["ads", "Publicité en ligne"],
  ["other", "Autre"],
];

export default function DevisPage() {
  const [servicesOpen, setServicesOpen] = useState(false);

  // Local state for DB success/error priority
  const [showSuccess, setShowSuccess] = useState(false);
  const [globalError, setGlobalError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting: isRHFSubmitting, isValid },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      services: [],
      message: "",
    },
  });

  // Watch services to update the placeholder text dynamically
  const selectedServices = watch("services") || [];

  // Decoupled Email submission
  const { submitForm: submitEmail, isSubmitting: isEmailSubmitting } =
    useContactForm({
      formId: "custom-quote",
      onError: (err) => console.error("Email sending failed:", err),
    });

  const isSubmitting = isRHFSubmitting || isEmailSubmitting;

  const onSubmit = async (data: FormValues) => {
    setGlobalError(null);

    try {
      // 1. Prepare Data
      const formattedPhone = parsePhoneToE164(data.phone) || "";

      // 2. Submit to Database (New API Route)
      const dbResponse = await fetch("/api/custom-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.fullName,
          email: data.email,
          phone: data.phone,
          services: data.services || [],
          message: data.message,
        }),
      });

      const contentType = dbResponse.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Erreur de connexion au serveur");
      }

      if (!dbResponse.ok) {
        const errData = await dbResponse.json();
        throw new Error(errData.error || "Erreur lors de l'enregistrement");
      }

      // 3. Trigger UI Success
      setShowSuccess(true);

      setTimeout(() => {
        reset();
        setServicesOpen(false);
      }, 5000);

      // 4. Send Email (Fire and forget or subsequent)
      const getServicesLabels = (keys: string[] | undefined) => {
        if (!keys || keys.length === 0) return "Aucun sélectionné";
        return keys
          .map((k) => {
            const found = SERVICES_OPTS.find(([optKey]) => optKey === k);
            return found ? found[1] : k;
          })
          .join(", ");
      };

      submitEmail({
        "Nom complet": data.fullName,
        Email: data.email,
        Téléphone: formattedPhone || "Non renseigné",
        "Services demandés": getServicesLabels(data.services),
        Message: data.message || "Aucun message",
        Source: "Demande de devis sur-mesure",
        "Date de soumission": new Date().toLocaleString("fr-FR", {
          timeZone: "Africa/Casablanca",
        }),
      });
    } catch (err: any) {
      console.error("Submission error:", err);
      setGlobalError("Une erreur est survenue, veuillez réessayer plus tard.");
    }
  };

  if (showSuccess) {
    return (
      <main className="qf relative overflow-hidden">
        <CloudRedEffect1 />

        <div className="qf__wrap">
          <div
            className="qf__success"
            style={{
              background: "#000",
              border: "2px solid #fff",
              padding: "40px",
              textAlign: "center",
              maxWidth: "900px",
              margin: "0 auto",
              animation: "successFadeIn 0.5s ease-out",
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
              className="qf__title"
              style={{
                color: "#fff",
                fontSize: "28px",
                fontWeight: "700",
                marginBottom: "16px",
              }}
            >
              DEMANDE REÇUE !
            </h2>
            <p
              className="qf__lead"
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                fontSize: "18px",
                lineHeight: "1.5",
                marginBottom: 0,
              }}
            >
              Notre équipe analyse votre projet. Vous recevrez une offre
              personnalisée sous 48h.
            </p>
            <style jsx>{`
              @keyframes successFadeIn {
                from {
                  opacity: 0;
                  transform: translateY(20px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}</style>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="qf relative overflow-hidden">
      <CloudRedEffect1 />

      <div className="qf__wrap">
        <header className="qf__head">
          <h1 className="qf__title">DEMANDE DE DEVIS SUR-MESURE</h1>
          <p className="qf__lead">
            Parlez-nous de vos besoins et nous vous répondrons avec une offre
            adaptée sous 48h.
          </p>
        </header>

        <form className="qf__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="qf__field">
            <div
              className={`qf__input-wrapper ${errors.fullName ? "error" : ""}`}
            >
              <input
                className="qf__input"
                type="text"
                placeholder="PRÉNOM & NOM :"
                disabled={isSubmitting}
                {...register("fullName")}
              />
            </div>
            {errors.fullName && (
              <p className="qf__error-msg">{errors.fullName.message}</p>
            )}
          </div>

          <div className="qf__field">
            <div className={`qf__input-wrapper ${errors.email ? "error" : ""}`}>
              <input
                className="qf__input"
                type="email"
                placeholder="EMAIL :"
                disabled={isSubmitting}
                {...register("email")}
              />
            </div>
            {errors.email && (
              <p className="qf__error-msg">{errors.email.message}</p>
            )}
          </div>

          <div className="qf__field">
            <div className={`qf__input-wrapper ${errors.phone ? "error" : ""}`}>
              <input
                className="qf__input"
                type="tel"
                placeholder="TÉLÉPHONE :"
                disabled={isSubmitting}
                {...register("phone")}
              />
            </div>
            {errors.phone && (
              <p className="qf__error-msg">{errors.phone.message}</p>
            )}
          </div>

          <div className="qf__field">
            <div className="qf__input-wrapper">
              <button
                type="button"
                className="qf__select-trigger"
                onClick={() => setServicesOpen(!servicesOpen)}
                disabled={isSubmitting}
              >
                <span>
                  {selectedServices.length > 0
                    ? `${selectedServices.length} SÉLECTIONNÉ(S)`
                    : "SERVICES DEMANDÉS (CASE À COCHER) :"}
                </span>
                <span
                  className={`qf__caret ${servicesOpen ? "is-open" : ""}`}
                />
              </button>
            </div>

            <div className={`qf__menu ${servicesOpen ? "is-open" : ""}`}>
              <div className="qf__menuGrid">
                {SERVICES_OPTS.map(([key, label]) => (
                  <label key={key} className="qf__option">
                    <span>{label}</span>
                    <input
                      type="checkbox"
                      value={key}
                      className="qf__check"
                      disabled={isSubmitting}
                      {...register("services")}
                    />
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="qf__field">
            <div className="qf__input-wrapper">
              <textarea
                className="qf__textarea"
                placeholder="DÉTAIL OU MESSAGE LIBRE :"
                disabled={isSubmitting}
                {...register("message")}
              />
            </div>
          </div>

          {globalError && (
            <div className="qf__error-global">⚠️ {globalError}</div>
          )}

          <div className="qf__actions">
            <button
              type="submit"
              className="qf__btn"
              disabled={isSubmitting || !isValid}
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
