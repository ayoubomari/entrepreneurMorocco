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
      <main className="qc relative overflow-hidden">
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

        <div className="qc__wrap">
          <div className="qc__success">
            <div className="qc__success-icon">
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
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="qc relative overflow-hidden">
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

        {/* BROCHURE BUTTON CENTERED BETWEEN CARDS AND FORM */}
        <div className="qc__brochure-container">
          <a href="/brochure" className="qc__brochure-btn">
            → Télécharger la brochure complète PDF
          </a>
        </div>

        <form className="qc__form" onSubmit={onSubmit}>
          <h2 className="qc__form-title">VOS INFORMATIONS</h2>

          <div className="qc__inputs-stack">
            {/* Full Name */}
            <div className="qc__field">
              <div className="qc__input-wrapper">
                <input
                  className="qc__input"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="NOM COMPLET *"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="qc__field">
              <div className="qc__input-wrapper">
                <input
                  className="qc__input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="EMAIL PRINCIPAL *"
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div className="qc__field">
              <div className="qc__input-wrapper">
                <input
                  className="qc__input"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="TÉLÉPHONE"
                />
              </div>
            </div>

            {/* Results Email */}
            <div className="qc__field">
              <div className="qc__input-wrapper">
                <input
                  className="qc__input"
                  type="email"
                  value={resultEmail}
                  onChange={(e) => setResultEmail(e.target.value)}
                  placeholder="EMAIL DE RÉCEPTION DU DEVIS *"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div className="qc__field">
              <div className="qc__input-wrapper is-textarea">
                <textarea
                  className="qc__textarea"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  placeholder="MESSAGE / DÉTAILS DE VOTRE PROJET (OPTIONNEL)"
                />
              </div>
            </div>
          </div>

          {error && <div className="qc__error">⚠️ {error}</div>}

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
