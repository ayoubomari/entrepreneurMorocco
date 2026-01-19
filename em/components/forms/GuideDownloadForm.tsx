"use client";

import { useState } from "react";
import { useContactForm } from "@/hooks/useContactForm";
import { useIsVisible } from "@/hooks/useIsVisible";

const GuideDownloadForm = () => {
  const [formData, setFormData] = useState({ firstName: "", email: "" });
  const [downloadTriggered, setDownloadTriggered] = useState(false);

  // Initialize visibility hook
  const { elementRef, isVisible } = useIsVisible({ threshold: 0.2 });

  const { submitForm, isSubmitting, isSuccess, error } = useContactForm({
    formId: "guide-download",
    onSuccess: () => {
      setTimeout(() => {
        setFormData({ firstName: "", email: "" });
        setDownloadTriggered(false);
      }, 5000);
    },
  });

  const triggerPDFDownload = () => {
    const pdfPaths = [
      "/pdfs/Guide-7-erreurs-entrepreneur-maroc.pdf",
      "/Guide-7-erreurs-entrepreneur-maroc.pdf",
      "/assets/pdfs/Guide-7-erreurs-entrepreneur-maroc.pdf",
    ];
    const pdfUrl = pdfPaths[0];
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName.trim() || !formData.email.trim()) {
      return;
    }

    triggerPDFDownload();
    setDownloadTriggered(true);

    try {
      await submitForm({
        Prénom: formData.firstName,
        Email: formData.email,
        "Guide demandé": "7 Erreurs à Éviter - Entrepreneur Maroc",
        "Date de téléchargement": new Date().toLocaleString("fr-FR", {
          timeZone: "Africa/Casablanca",
        }),
        Source: "Site Web - Page Guide",
      });
    } catch (err) {
      console.log("Email submission failed, but PDF was downloaded:", err);
    }
  };

  return (
    <section className="lm-section">
      {/* 
         Attached ref={elementRef} 
         Added conditional class ${isVisible ? "visible" : ""} 
      */}
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

            {isSuccess || downloadTriggered ? (
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
                  {error && (
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
                    color: "#ef4444",
                    border: "1px solid #ef4444",
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
                    e.currentTarget.style.background = "#ef4444";
                    e.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#ef4444";
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
                {/* Internal styles for success box omitted for brevity, same as before */}
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
              <form onSubmit={handleSubmit} className="lm-fields">
                <div className="lm-field">
                  <input
                    className="lm-input"
                    type="text"
                    name="firstName"
                    placeholder="VOTRE PRÉNOM:"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    required
                  />
                </div>

                <div className="lm-field">
                  <input
                    className="lm-input"
                    type="email"
                    name="email"
                    placeholder="VOTRE EMAIL:"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    required
                  />
                </div>

                {error && (
                  <div
                    style={{
                      background: "rgba(239, 68, 68, 0.1)",
                      border: "1px solid rgba(239, 68, 68, 0.3)",
                      borderRadius: "6px",
                      padding: "12px 16px",
                      color: "#fca5a5",
                      fontSize: "14px",
                    }}
                  >
                    {error}
                  </div>
                )}

                <button
                  className="lm-btn-left"
                  type="submit"
                  disabled={
                    isSubmitting ||
                    !formData.firstName.trim() ||
                    !formData.email.trim()
                  }
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
