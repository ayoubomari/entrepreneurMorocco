"use client";

import { useState } from "react";
import { useContactForm } from "@/hooks/useContactForm";
import "./brochure.css";

export default function BrochurePage() {
  const [email, setEmail] = useState("");

  const { submitForm, isSubmitting, isSuccess, error } = useContactForm({
    formId: "brochure-download",
    onSuccess: () => {
      triggerPDFDownload();
      setTimeout(() => {
        setEmail("");
      }, 5000);
    },
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

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    await submitForm({
      Email: email,
      "Document demandé": "Brochure détaillée de l'offre",
      Source: "Site Web - Page Brochure",
      "Date de soumission": new Date().toLocaleString("fr-FR", {
        timeZone: "Africa/Casablanca",
      }),
    });
  };

  const canSubmit = !!email.trim();

  if (isSuccess) {
    return (
      <main className="dlb relative overflow-hidden">
        {/* Background Cloud Divs */}
        <div
          className="cloud-red"
          style={{
            position: "absolute",
            zIndex: 1,
            top: "0px",
            transform: "translateY(-50%)",
            left: "-10%",
          }}
        ></div>
        <div
          className="cloud-red"
          style={{
            position: "absolute",
            zIndex: 1,
            top: "400px",
            transform: "translateY(-50%)",
            right: "-10%",
          }}
        ></div>
        <div
          className="cloud-red"
          style={{
            position: "absolute",
            zIndex: 1,
            pointerEvents: "none",
            top: "800px",
            transform: "translateY(-50%)",
            left: "-30%",
          }}
        ></div>
        <div
          className="cloud-red"
          style={{
            position: "absolute",
            zIndex: 1,
            top: "1400px",
            transform: "translateY(-50%)",
            right: "-10%",
          }}
        ></div>

        <div className="dlb__wrap">
          <div
            className="dlb__success"
            style={{
              background: "#111",
              border: "1px solid rgba(255,255,255,0.1)",
              padding: "60px 24px",
              textAlign: "center",
              maxWidth: "800px",
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
                animation:
                  "iconScale 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) both",
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
            <h2 className="dlb__title">C'EST ENVOYÉ !</h2>
            <p className="dlb__lead">
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
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="dlb relative overflow-hidden">
      {/* Background Cloud Divs */}
      <div
        className="cloud-red"
        style={{
          position: "absolute",
          zIndex: 1,
          top: "0px",
          transform: "translateY(-50%)",
          left: "-10%",
        }}
      ></div>
      <div
        className="cloud-red"
        style={{
          position: "absolute",
          zIndex: 1,
          top: "400px",
          transform: "translateY(-50%)",
          right: "-10%",
        }}
      ></div>
      <div
        className="cloud-red"
        style={{
          position: "absolute",
          zIndex: 1,
          pointerEvents: "none",
          top: "800px",
          transform: "translateY(-50%)",
          left: "-30%",
        }}
      ></div>
      <div
        className="cloud-red"
        style={{
          position: "absolute",
          zIndex: 1,
          top: "1400px",
          transform: "translateY(-50%)",
          right: "-10%",
        }}
      ></div>

      <div className="dlb__wrap">
        <header className="dlb__head">
          <h1 className="dlb__title">TÉLÉCHARGER LA BROCHURE DE L’OFFRE</h1>
          <p className="dlb__lead">
            Lisez les détails complets de l'accompagnement (contenu, tarifs,
            délais…).
          </p>
        </header>

        <form className="dlb__form" onSubmit={onSubmit}>
          <section className="dlb__block">
            <div className="dlb__inputLabel">
              1. VOTRE EMAIL (OBLIGATOIRE) :
            </div>
            <div className="dlb__inputs">
              <div className="dlb__input-wrapper">
                <input
                  type="email"
                  className="dlb__input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="EMAIL OBLIGATOIRE :"
                  disabled={isSubmitting}
                  autoComplete="email"
                />
              </div>
            </div>
          </section>

          {error && (
            <div
              style={{
                color: "#ff4444",
                fontWeight: "700",
                marginBottom: "20px",
              }}
            >
              ⚠️ {error}
            </div>
          )}

          <div className="dlb__actions">
            <button
              type="submit"
              className="dlb__btn"
              disabled={!canSubmit || isSubmitting}
            >
              {isSubmitting ? "ENVOI EN COURS..." : "TÉLÉCHARGER LE PDF"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
