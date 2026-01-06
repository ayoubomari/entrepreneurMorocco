"use client";

import { useState } from "react";
import { useContactForm } from "@/hooks/useContactForm";
import "./contact-quiz.css";

export default function DevisPage() {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resultEmail, setResultEmail] = useState("");
  const [message, setMessage] = useState("");

  const { submitForm, isSubmitting, isSuccess, error } = useContactForm({
    formId: "plan-selection",
    onSuccess: () => {
      setTimeout(() => {
        setSelectedPlan("");
        setFullName("");
        setEmail("");
        setPhone("");
        setResultEmail("");
        setMessage("");
      }, 5000);
    },
  });

  const plans = [
    {
      id: "starter",
      title: "PLAN 1 - Starter",
      subtitle: "(solo / indépendant)",
      price: "2999 €",
      description:
        "Idéal pour tester et valider rapidement le marché marocain.",
      features: [
        "Bilan & audit projet",
        "Création d'entreprise complète",
        "Setup administratif de base",
      ],
    },
    {
      id: "family",
      title: "PLAN 2 - Family",
      subtitle: "(MRE & installation)",
      price: "Sur devis",
      description:
        "Parfait pour les Marocains du monde qui souhaitent revenir en famille.",
      features: [
        "Accompagnement administratif",
        "Aide logement & écoles",
        "Réseau business local",
      ],
    },
    {
      id: "growth",
      title: "PLAN 3 - Growth",
      subtitle: "(startups / business)",
      price: "Sur devis",
      description: "Pour les entrepreneurs qui veulent accélérer au Maroc.",
      features: [
        "Stratégie go-to-market",
        "Recrutement & Bureaux",
        "Réseau investisseurs",
      ],
    },
  ];

  const canSubmit =
    fullName.trim() && email.trim() && resultEmail.trim() && selectedPlan;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    const selectedPlanData = plans.find((p) => p.id === selectedPlan);

    await submitForm({
      "Nom complet": fullName,
      "Email principal": email,
      Téléphone: phone || "Non renseigné",
      "Email pour résultats": resultEmail,
      Message: message || "Aucun message",
      "Plan sélectionné": selectedPlanData?.title || selectedPlan,
      "Prix du plan": selectedPlanData?.price || "Non défini",
      Source: "Sélection de plan - Page devis",
      "Date de soumission": new Date().toLocaleString("fr-FR", {
        timeZone: "Africa/Casablanca",
      }),
    });
  };

  if (isSuccess) {
    return (
      <main className="qc">
        <div className="qc__wrap">
          <div
            className="qc__success"
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
            <h2 className="qc__title">DEMANDE VALIDÉE !</h2>
            <p className="qc__lead">
              Notre équipe vous recontactera rapidement pour finaliser votre
              projet.
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
    <main className="qc">
      <div className="qc__wrap">
        <header className="qc__head">
          <h1 className="qc__title">CHOISISSEZ VOTRE PACK D'ACCOMPAGNEMENT</h1>
          <p className="qc__lead">
            Installation rapide, retour en famille ou croissance accélérée :
            sélectionnez la formule qui vous correspond.
          </p>
        </header>

        <div className="qc__plans">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`qc__card ${
                selectedPlan === plan.id ? "is-selected" : ""
              }`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              <div className="qc__card-head">
                <h3 className="qc__card-title">{plan.title}</h3>
                <span className="qc__card-price">{plan.price}</span>
              </div>
              <p className="qc__card-desc">{plan.description}</p>
              <ul className="qc__features">
                {plan.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <form className="qc__form" onSubmit={onSubmit}>
          <h2 className="qc__form-title">VOS INFORMATIONS</h2>

          <div className="qc__grid">
            <div className="qc__field">
              <label className="qc__label">NOM COMPLET *</label>
              <div className="qc__input-wrapper">
                <input
                  className="qc__input"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="qc__field">
              <label className="qc__label">EMAIL *</label>
              <div className="qc__input-wrapper">
                <input
                  className="qc__input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="qc__field">
              <label className="qc__label">TÉLÉPHONE</label>
              <div className="qc__input-wrapper">
                <input
                  className="qc__input"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="qc__field">
              <label className="qc__label">
                EMAIL DE RÉCEPTION DES RÉSULTATS *
              </label>
              <div className="qc__input-wrapper">
                <input
                  className="qc__input"
                  type="email"
                  value={resultEmail}
                  onChange={(e) => setResultEmail(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          <div className="qc__field">
            <label className="qc__label">MESSAGE (OPTIONNEL)</label>
            <div className="qc__input-wrapper" style={{ height: "auto" }}>
              <textarea
                className="qc__textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
              />
            </div>
          </div>

          <div className="qc__brochure-box">
            <a href="/brochure" className="qc__brochure-link">
              → Télécharger la brochure complète PDF
            </a>
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

          <div className="qc__actions">
            <button
              type="submit"
              className="qc__btn"
              disabled={!canSubmit || isSubmitting}
            >
              {isSubmitting
                ? "ENVOI EN COURS..."
                : "RECEVOIR MON DEVIS PERSONNALISÉ"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
