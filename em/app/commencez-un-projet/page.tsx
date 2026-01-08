"use client";

import { useState } from "react";
import { useContactForm } from "@/hooks/useContactForm";
import "./commencez-un-projet.css";
import { CloudRedEffect1 } from "@/components/CloudRedEffect";

export default function CommencezUnProjetPage() {
  const [profile, setProfile] = useState<string | null>(null);
  const [stage, setStage] = useState<string | null>(null);
  const [needs, setNeeds] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const { submitForm, isSubmitting, isSuccess, error } = useContactForm({
    formId: "profile-quiz",
    onSuccess: () => {
      setTimeout(() => {
        setProfile(null);
        setStage(null);
        setNeeds([]);
        setEmail("");
        setPhone("");
      }, 3000);
    },
  });

  const canSubmit = !!email.trim();

  const toggleNeed = (key: string) =>
    setNeeds((arr) =>
      arr.includes(key) ? arr.filter((k) => k !== key) : [...arr, key]
    );

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    const getProfileLabel = (key: string | null) => {
      const map: Record<string, string> = {
        mre: "Marocain du monde",
        freelance: "Freelance",
        family: "Famille en retour",
        invest: "Investisseur",
        reconv: "En reconversion",
      };
      return key ? map[key] : "Non renseigné";
    };

    const getStageLabel = (key: string | null) => {
      const map: Record<string, string> = {
        idea: "J'ai une idée",
        prep: "Je prépare mon départ",
        launch: "Je veux lancer mon activité",
        structure: "J'ai déjà une structure",
      };
      return key ? map[key] : "Non renseigné";
    };

    const getNeedsLabels = (keys: string[]) => {
      const map: Record<string, string> = {
        creation: "Création d'entreprise",
        tax: "Fiscalité / Statut",
        housing: "Séjour / logement",
        digital: "Digitalisation",
        school: "Scolarité / santé",
      };
      return keys.length > 0
        ? keys.map((k) => map[k] || k).join(", ")
        : "Aucun besoin sélectionné";
    };

    await submitForm({
      Email: email,
      Téléphone: phone || "Non renseigné",
      Profil: getProfileLabel(profile),
      "Étape du projet": getStageLabel(stage),
      "Besoins d'accompagnement": getNeedsLabels(needs),
      "Date de soumission": new Date().toLocaleString("fr-FR", {
        timeZone: "Africa/Casablanca",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
      Source: "Questionnaire - Plan personnalisé",
    });
  };

  const PROFIL_OPTS: [string, string][] = [
    ["mre", "Marocain du monde"],
    ["freelance", "Freelance"],
    ["family", "Famille en retour"],
    ["invest", "Investisseur"],
    ["reconv", "En reconversion"],
  ];

  const STAGE_OPTS: [string, string][] = [
    ["idea", "J'ai une idée"],
    ["prep", "Je prépare mon départ"],
    ["launch", "Je veux lancer mon activité"],
    ["structure", "J'ai déjà une structure"],
  ];

  const NEEDS_OPTS: [string, string][] = [
    ["creation", "Création d'entreprise"],
    ["tax", "Fiscalité / Statut"],
    ["housing", "Séjour / logement"],
    ["digital", "Digitalisation"],
    ["school", "Scolarité / santé"],
  ];

  if (isSuccess) {
    return (
      <main className="cproj relative overflow-hidden">
        <CloudRedEffect1 />

        <div className="cproj__wrap">
          <div
            className="cproj__success"
            style={{
              background: "#1a1a1a",
              border: "2px solid #ef4444",
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
                background: "#ef4444",
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
                stroke="#fff"
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
              }}
            >
              Notre équipe analyse vos réponses et vous enverra votre plan
              d'action personnalisé par email.
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="cproj relative overflow-hidden">
      <CloudRedEffect1 />

      <div className="cproj__wrap">
        <header className="cproj__head">
          <h1 className="cproj__title">DITES-NOUS OÙ VOUS EN ÊTES</h1>
          <p className="cproj__lead">
            Répondez à 3 questions rapides pour recevoir votre plan d'action
            personnalisé par email.
          </p>
        </header>

        <form className="cproj__form" onSubmit={onSubmit}>
          <section className="cproj__block">
            <div className="cproj__qtitle">1. Quel est votre profil ?</div>
            <div className="cproj__group">
              {PROFIL_OPTS.map(([key, label]) => (
                <label
                  key={key}
                  className="cproj__row"
                  htmlFor={`profile-${key}`}
                >
                  <span>{label}</span>
                  <input
                    id={`profile-${key}`}
                    type="radio"
                    name="profile"
                    className="cproj__radio"
                    checked={profile === key}
                    onChange={() => setProfile(key)}
                    disabled={isSubmitting}
                  />
                </label>
              ))}
            </div>
          </section>

          <section className="cproj__block">
            <div className="cproj__group">
              <div className="cproj__qtitle">
                2. Où en êtes-vous dans votre projet ?
              </div>
              {STAGE_OPTS.map(([key, label]) => (
                <label
                  key={key}
                  className="cproj__row"
                  htmlFor={`stage-${key}`}
                >
                  <span>{label}</span>
                  <input
                    id={`stage-${key}`}
                    type="radio"
                    name="stage"
                    className="cproj__radio"
                    checked={stage === key}
                    onChange={() => setStage(key)}
                    disabled={isSubmitting}
                  />
                </label>
              ))}
            </div>
          </section>

          <section className="cproj__block">
            <div className="cproj__group">
              <div className="cproj__qtitle">
                3. Sur quoi souhaitez-vous être accompagné ?
              </div>
              {NEEDS_OPTS.map(([key, label]) => (
                <label key={key} className="cproj__row" htmlFor={`need-${key}`}>
                  <span>{label}</span>
                  <input
                    id={`need-${key}`}
                    type="checkbox"
                    className="cproj__check"
                    checked={needs.includes(key)}
                    onChange={() => toggleNeed(key)}
                    disabled={isSubmitting}
                  />
                </label>
              ))}
            </div>
          </section>

          <div className="cproj__inputs">
            <div className="cproj__inputRow">
              <div className="cproj__input-wrapper">
                <input
                  type="email"
                  className="cproj__input"
                  placeholder="EMAIL (OBLIGATOIRE) :"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  disabled={isSubmitting}
                  required
                />
              </div>
            </div>
            <div className="cproj__inputRow">
              <div className="cproj__input-wrapper">
                <input
                  type="tel"
                  className="cproj__input"
                  placeholder="TÉLÉPHONE (OPTIONNEL) :"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  autoComplete="tel"
                  disabled={isSubmitting}
                />
              </div>
            </div>
          </div>

          {error && (
            <div
              style={{
                color: "#fca5a5",
                fontSize: "14px",
                margin: "16px 0",
                textAlign: "center",
              }}
            >
              ⚠️ {error}
            </div>
          )}

          <div className="cproj__actions">
            <button
              type="submit"
              className="cproj__btn"
              disabled={!canSubmit || isSubmitting}
            >
              {isSubmitting
                ? "Envoi en cours..."
                : "Recevoir mon plan personnalisé"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
