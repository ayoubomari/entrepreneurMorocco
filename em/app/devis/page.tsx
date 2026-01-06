"use client";

import { useState } from "react";
import { useContactForm } from "@/hooks/useContactForm";
import "./devis.css";

export default function DevisPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [servicesOpen, setServicesOpen] = useState(false);

  const { submitForm, isSubmitting, isSuccess, error } = useContactForm({
    formId: "custom-quote",
    onSuccess: () => {
      setTimeout(() => {
        setFullName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setServices([]);
        setServicesOpen(false);
      }, 5000);
    },
  });

  const toggleService = (key: string) =>
    setServices((arr) =>
      arr.includes(key) ? arr.filter((k) => k !== key) : [...arr, key]
    );

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;

    const getServicesLabels = (keys: string[]) => {
      const map: Record<string, string> = {
        site: "Site web",
        seo: "SEO",
        content: "Contenu / blog",
        brand: "Branding / identité",
        ads: "Publicité en ligne",
        other: "Autre",
      };
      return keys.length > 0
        ? keys.map((k) => map[k] || k).join(", ")
        : "Aucun sélectionné";
    };

    await submitForm({
      "Nom complet": fullName,
      Email: email,
      Téléphone: phone || "Non renseigné",
      "Services demandés": getServicesLabels(services),
      Message: message || "Aucun message",
      Source: "Demande de devis sur-mesure",
      "Date de soumission": new Date().toLocaleString("fr-FR", {
        timeZone: "Africa/Casablanca",
      }),
    });
  };

  const options: Array<[string, string]> = [
    ["site", "Site web"],
    ["seo", "SEO"],
    ["content", "Contenu / blog"],
    ["brand", "Branding / identité"],
    ["ads", "Publicité en ligne"],
    ["other", "Autre"],
  ];

  if (isSuccess) {
    return (
      <main className="qf">
        <div className="qf__wrap">
          <div
            className="qf__success"
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
            <h2 className="qf__title">DEMANDE REÇUE !</h2>
            <p className="qf__lead">
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
    <main className="qf">
      <div className="qf__wrap">
        <header className="qf__head">
          <h1 className="qf__title">DEMANDE DE DEVIS SUR-MESURE</h1>
          <p className="qf__lead">
            Parlez-nous de vos besoins et nous vous répondrons avec une offre
            adaptée sous 48h.
          </p>
        </header>

        <form className="qf__form" onSubmit={onSubmit}>
          <div className="qf__field">
            <label className="qf__label">PRÉNOM & NOM :</label>
            <div className="qf__input-wrapper">
              <input
                className="qf__input"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                disabled={isSubmitting}
                required
              />
            </div>
          </div>

          <div className="qf__field">
            <label className="qf__label">EMAIL :</label>
            <div className="qf__input-wrapper">
              <input
                className="qf__input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                required
              />
            </div>
          </div>

          <div className="qf__field">
            <label className="qf__label">TÉLÉPHONE (OPTIONNEL) :</label>
            <div className="qf__input-wrapper">
              <input
                className="qf__input"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="qf__field">
            <label className="qf__label">SERVICES SOUHAITÉS :</label>
            <div className="qf__input-wrapper">
              <button
                type="button"
                className="qf__select-trigger"
                onClick={() => setServicesOpen(!servicesOpen)}
                disabled={isSubmitting}
              >
                <span>
                  {services.length > 0
                    ? `${services.length} sélectionné(s)`
                    : "SÉLECTIONNER..."}
                </span>
                <span
                  className={`qf__caret ${servicesOpen ? "is-open" : ""}`}
                />
              </button>
            </div>
            <div className={`qf__menu ${servicesOpen ? "is-open" : ""}`}>
              <div className="qf__menuGrid">
                {options.map(([key, label]) => (
                  <label key={key} className="qf__option">
                    <span>{label}</span>
                    <input
                      type="checkbox"
                      className="qf__check"
                      checked={services.includes(key)}
                      onChange={() => toggleService(key)}
                      disabled={isSubmitting}
                    />
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="qf__field">
            <label className="qf__label">VOTRE MESSAGE / PROJET :</label>
            <div className="qf__input-wrapper">
              <textarea
                className="qf__textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={isSubmitting}
                placeholder="Décrivez votre besoin en quelques lignes..."
              />
            </div>
          </div>

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

          <div className="qf__actions">
            <button
              type="submit"
              className="qf__btn"
              disabled={!fullName || !email || isSubmitting}
            >
              {isSubmitting ? "ENVOI EN COURS..." : "ENVOYER MA DEMANDE"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
