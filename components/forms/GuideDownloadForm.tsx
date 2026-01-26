"use client";

import { useState } from "react";
import { useContactForm } from "@/hooks/useContactForm";
import { useIsVisible } from "@/hooks/useIsVisible";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/lib/supabase"; // Import du client Supabase
import Image from "next/image";

// 1. Définition du schéma Zod (aligné avec la table guide_download)
const formSchema = z.object({
  firstName: z.string().min(2, "Veuillez entrer votre prénom."),
  email: z.string().email("Format d'email invalide."),
});

type FormValues = z.infer<typeof formSchema>;

const GuideDownloadForm = () => {
  const [downloadTriggered, setDownloadTriggered] = useState(false);
  const [globalError, setGlobalError] = useState<string | null>(null);

  const { elementRef, isVisible } = useIsVisible({ threshold: 0.2 });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting: isRHFSubmitting, isValid },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      email: "",
    },
  });

  const {
    submitForm: submitEmail,
    isSubmitting: isEmailSubmitting,
    error: emailError,
  } = useContactForm({
    formId: "guide-download",
    onSuccess: () => {
      console.log("Notification email sent");
    },
  });

  const triggerPDFDownload = () => {
    const pdfUrl = "/pdfs/Guide-7-erreurs-entrepreneur-maroc.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Guide-7-erreurs-entrepreneur-maroc.pdf";
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      document.body.removeChild(link);
    }, 100);
  };

  const onSubmit = async (data: FormValues) => {
    setGlobalError(null);

    // 1. Feedback immédiat : Lancer le téléchargement
    triggerPDFDownload();
    setDownloadTriggered(true);

    try {
      // 2. Insertion directe dans Supabase
      const { error: dbError } = await supabase
        .from("guide_download") // Nom exact de votre table Drizzle
        .insert([
          {
            first_name: data.firstName, // Note: Supabase utilise souvent snake_case par défaut
            email: data.email,
            guide_name: "7 Erreurs à Éviter - Entrepreneur Maroc",
            source: "Site Web - Page Guide",
          },
        ]);

      if (dbError) {
        console.error("Supabase Save failed:", dbError);
        // On ne bloque pas l'utilisateur car le PDF est déjà lancé
      }

      // 3. Envoi de l'email de notification
      await submitEmail({
        Prénom: data.firstName,
        Email: data.email,
        "Guide demandé": "7 Erreurs à Éviter - Entrepreneur Maroc",
        "Date de téléchargement": new Date().toLocaleString("fr-FR", {
          timeZone: "Africa/Casablanca",
        }),
        Source: "Site Web - Page Guide",
      });

      reset();
    } catch (err) {
      console.error("Submission workflow failed:", err);
      setGlobalError("Une erreur est survenue lors de l'enregistrement.");
    }
  };

  const isSubmitting = isRHFSubmitting || isEmailSubmitting;

  return (
    <section className="lm-section">
      <div ref={elementRef} className={`lm-wrap ${isVisible ? "visible" : ""}`}>
        <header className="lm-head">
          <h2 className="lm-title">
            LES 7 ERREURS À ÉVITER QUAND
            <br />
            ON VEUT ENTREPRENDRE AU MAROC
          </h2>

          <div className="lm-head-copy">
            <p>
              Avant de lancer votre projet au Maroc, assurez-vous d&apos;éviter
              ces pièges courants.
            </p>
            <p>
              Ce guide pratique vous donne les clés pour démarrer sereinement,
              que vous soyez MRE, investisseur ou en reconversion.
            </p>
          </div>
        </header>

        <div className="lm-grid">
          {/* Left: Image */}
          <figure className="lm-pdf">
            <div className="lm-pdf-link">
              <Image
                width={300}
                height={600}
                src="/7-errors.webp"
                alt="Guide PDF - 7 Erreurs à Éviter"
                className="lm-pdf-img"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </figure>

          {/* Right: Form */}
          <div className="lm-form">
            <h3 className="lm-subtitle">
              TÉLÉCHARGEZ NOTRE GUIDE GRATUIT :
              <br />
              <span className="lm-sub-accent">7 ERREURS À ÉVITER</span>
            </h3>

            {downloadTriggered ? (
              <div
                className="lm-success"
                style={{
                  background: "#1a1a1a",
                  border: "2px solid #fff",
                  padding: "24px",
                  textAlign: "center",
                  position: "relative",
                  animation: "successFadeIn 0.5s ease-out",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "#fff",
                    borderRadius: "50%",
                    margin: "0 auto 16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    animation:
                      "iconScale 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.2s both",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>

                <h3
                  style={{
                    color: "#fff",
                    fontSize: "20px",
                    fontWeight: "700",
                    margin: "0 0 8px",
                  }}
                >
                  Parfait ! Votre guide a été téléchargé
                </h3>

                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "14px",
                    margin: "0 0 20px",
                    lineHeight: "1.4",
                  }}
                >
                  Le téléchargement du PDF a commencé automatiquement.
                  {(emailError || globalError) && (
                    <>
                      <br />
                      <span style={{ color: "#fca5a5", fontSize: "12px" }}>
                        Note: Un problème technique est survenu pour l'email,
                        mais votre PDF est prêt.
                      </span>
                    </>
                  )}
                </p>

                <button
                  onClick={triggerPDFDownload}
                  style={{
                    background: "transparent",
                    color: "#fff",
                    border: "1px solid #fff",
                    padding: "10px 20px",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#fff";
                    e.currentTarget.style.color = "#ef4444";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#fff";
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7,10 12,15 17,10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Télécharger à nouveau
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="lm-fields">
                <div className="lm-field">
                  <input
                    className={`lm-input ${errors.firstName ? "border-red-500" : ""}`}
                    type="text"
                    placeholder="VOTRE PRÉNOM:"
                    disabled={isSubmitting}
                    {...register("firstName")}
                  />
                  {errors.firstName && (
                    <span
                      style={{
                        color: "#ef4444",
                        fontSize: "12px",
                        marginTop: "4px",
                        display: "block",
                      }}
                    >
                      {errors.firstName.message}
                    </span>
                  )}
                </div>

                <div className="lm-field">
                  <input
                    className={`lm-input ${errors.email ? "border-red-500" : ""}`}
                    type="email"
                    placeholder="VOTRE EMAIL:"
                    disabled={isSubmitting}
                    {...register("email")}
                  />
                  {errors.email && (
                    <span
                      style={{
                        color: "#ef4444",
                        fontSize: "12px",
                        marginTop: "4px",
                        display: "block",
                      }}
                    >
                      {errors.email.message}
                    </span>
                  )}
                </div>

                {globalError && (
                  <p
                    style={{
                      color: "#ef4444",
                      fontSize: "12px",
                      marginBottom: "10px",
                    }}
                  >
                    {globalError}
                  </p>
                )}

                <button
                  className="lm-btn-left"
                  type="submit"
                  disabled={isSubmitting || !isValid}
                >
                  {isSubmitting
                    ? "Téléchargement..."
                    : "Je télécharge mon guide"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

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
        @keyframes iconScale {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default GuideDownloadForm;
