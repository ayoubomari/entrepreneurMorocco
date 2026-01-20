"use client";

import { useState } from "react";
import { useContactForm } from "@/hooks/useContactForm";
import { useIsVisible } from "@/hooks/useIsVisible";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// 1. Define Zod Schema
// Note: 'Phone' is omitted because it does not exist in the guideDownload Drizzle schema provided.
const formSchema = z.object({
  firstName: z.string().min(2, "Veuillez entrer votre prénom."),
  email: z.string().email("Format d'email invalide."),
});

type FormValues = z.infer<typeof formSchema>;

const GuideDownloadForm = () => {
  const [downloadTriggered, setDownloadTriggered] = useState(false);

  // Initialize visibility hook
  const { elementRef, isVisible } = useIsVisible({ threshold: 0.2 });

  // React Hook Form setup
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

  // Use existing hook for email sending (decoupled from DB logic)
  const {
    submitForm: submitEmail,
    isSubmitting: isEmailSubmitting,
    error: emailError,
  } = useContactForm({
    formId: "guide-download",
    onSuccess: () => {
      // Optional: Reset logic if needed, though usually we leave the success message up
      // setTimeout(() => {
      //   reset();
      //   setDownloadTriggered(false);
      // }, 5000);
    },
  });

  const triggerPDFDownload = () => {
    const pdfUrl = "/pdfs/Guide-7-erreurs-entrepreneur-maroc.pdf"; // Ensure this path is correct
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
    // 1. Immediate Feedback: Trigger Download
    triggerPDFDownload();
    setDownloadTriggered(true);

    try {
      // 2. Submit to Database (Drizzle)
      const dbResponse = await fetch("/api/guide-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.firstName,
          email: data.email,
          guideName: "7 Erreurs à Éviter - Entrepreneur Maroc",
          source: "Site Web - Page Guide",
        }),
      });

      if (!dbResponse.ok) {
        console.error("DB Save failed");
        // We do not stop execution here because the user already "got" the PDF
        // We silently log it or handle it for analytics
      }

      // 3. Send Notification Email (HubSpot/EmailJS etc)
      await submitEmail({
        Prénom: data.firstName,
        Email: data.email,
        "Guide demandé": "7 Erreurs à Éviter - Entrepreneur Maroc",
        "Date de téléchargement": new Date().toLocaleString("fr-FR", {
          timeZone: "Africa/Casablanca",
        }),
        Source: "Site Web - Page Guide",
      });

      reset(); // Clear form internals
    } catch (err) {
      console.error("Submission workflow failed:", err);
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
              <img
                src="/downloadpdf.png"
                alt="Guide PDF - 7 Erreurs à Éviter"
                className="lm-pdf-img"
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
                  border: "2px solid #ef4444",
                  padding: "24px",
                  textAlign: "center",
                  position: "relative",
                  animation: "successFadeIn 0.5s ease-out",
                }}
              >
                {/* Success icon */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "#ef4444",
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
                    stroke="#ffffff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>

                {/* Success text */}
                <h3
                  style={{
                    color: "#fff",
                    fontSize: "20px",
                    fontWeight: "700",
                    margin: "0 0 8px",
                    animation: "textFadeIn 0.5s ease-out 0.3s both",
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
                    animation: "textFadeIn 0.5s ease-out 0.4s both",
                  }}
                >
                  Le téléchargement du PDF a commencé automatiquement.
                  {emailError && (
                    <>
                      <br />
                      <span style={{ color: "#fca5a5", fontSize: "12px" }}>
                        Note: L'envoi par email a échoué, mais votre PDF est
                        téléchargé.
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
                    animation: "buttonFadeIn 0.5s ease-out 0.5s both",
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
                  @keyframes textFadeIn {
                    from {
                      opacity: 0;
                      transform: translateY(10px);
                    }
                    to {
                      opacity: 1;
                      transform: translateY(0);
                    }
                  }
                  @keyframes buttonFadeIn {
                    from {
                      opacity: 0;
                      transform: translateY(10px);
                    }
                    to {
                      opacity: 1;
                      transform: translateY(0);
                    }
                  }
                `}</style>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="lm-fields">
                {/* First Name */}
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

                {/* Email */}
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
    </section>
  );
};

export default GuideDownloadForm;
