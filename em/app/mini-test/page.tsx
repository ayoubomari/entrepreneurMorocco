"use client";

import { useState } from "react";
import { useContactForm } from "@/hooks/useContactForm";
import "./mini-test.css";

export default function MiniTestPage() {
  const [project, setProject] = useState<string | null>(null);
  const [obstacles, setObstacles] = useState<string[]>([]);
  const [email, setEmail] = useState("");

  const { submitForm, isSubmitting, isSuccess, error } = useContactForm({
    formId: "mini-test",
    onSuccess: () => {
      setTimeout(() => {
        setProject(null);
        setObstacles([]);
        setEmail("");
      }, 5000);
    },
  });

  const toggleObstacle = (key: string) =>
    setObstacles((arr) =>
      arr.includes(key) ? arr.filter((k) => k !== key) : [...arr, key]
    );

  const canSubmit = !!email.trim();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    const getProjectLabel = (key: string | null) => {
      const map: Record<string, string> = {
        create: "Créer une entreprise",
        family: "S'installer en famille",
        invest: "Investir au Maroc",
      };
      return key ? map[key] : "Non renseigné";
    };

    const getObstaclesLabels = (keys: string[]) => {
      const map: Record<string, string> = {
        tax: "Statut / fiscalité",
        housing: "Logement / papiers",
        info: "Manque d'infos fiables",
        start: "Je ne sais pas par où commencer",
      };
      return keys.length > 0
        ? keys.map((k) => map[k] || k).join(", ")
        : "Aucun";
    };

    await submitForm({
      Email: email,
      "Projet principal": getProjectLabel(project),
      Obstacles: getObstaclesLabels(obstacles),
      Source: "Mini Test - Plan Action",
      "Date de soumission": new Date().toLocaleString("fr-FR", {
        timeZone: "Africa/Casablanca",
      }),
    });
  };

  if (isSuccess) {
    return (
      <main className="mintest">
        <div className="mt__wrap">
          <div
            className="mt__success"
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
            <h2 className="mt__title">C'EST ENVOYÉ !</h2>
            <p className="mt__lead">
              Vos recommandations personnalisées arrivent dans votre boîte mail.
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
    <main className="mintest">
      <div className="mt__wrap">
        <header className="mt__head">
          <h1 className="mt__title">MINI TEST : PAR OÙ COMMENCER ?</h1>
          <p className="mt__lead">
            Répondez à ces questions pour clarifier votre situation et recevoir
            les prochaines étapes concrètes par email.
          </p>
        </header>

        <form className="mt__form" onSubmit={onSubmit}>
          <section className="mt__block">
            <div className="mt__qtitle">
              1. Quel est votre projet principal ?
            </div>
            <div className="mt__group">
              {[
                ["create", "Créer une entreprise"],
                ["family", "S'installer en famille"],
                ["invest", "Investir au Maroc"],
              ].map(([key, label]) => (
                <label key={key} className="mt__row">
                  <span>{label}</span>
                  <input
                    type="radio"
                    name="project"
                    className="mt__radio"
                    checked={project === key}
                    onChange={() => setProject(key)}
                    disabled={isSubmitting}
                  />
                </label>
              ))}
            </div>
          </section>

          <section className="mt__block">
            <div className="mt__qtitle">2. Votre principal obstacle ?</div>
            <div className="mt__group">
              {[
                ["tax", "Statut / fiscalité"],
                ["housing", "Logement / papiers"],
                ["info", "Manque d'infos fiables"],
                ["start", "Je ne sais pas par où commencer"],
              ].map(([key, label]) => (
                <label key={key} className="mt__row">
                  <span>{label}</span>
                  <input
                    type="checkbox"
                    className="mt__check"
                    checked={obstacles.includes(key)}
                    onChange={() => toggleObstacle(key)}
                    disabled={isSubmitting}
                  />
                </label>
              ))}
            </div>
          </section>

          <div className="mt__inputs">
            <div className="mt__input-wrapper">
              <input
                type="email"
                className="mt__input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="VOTRE EMAIL (OBLIGATOIRE) :"
                disabled={isSubmitting}
                autoComplete="email"
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

          <div className="mt__actions">
            <button
              type="submit"
              className="mt__btn"
              disabled={!canSubmit || isSubmitting}
            >
              {isSubmitting ? "ENVOI EN COURS..." : "VOIR MES RECOMMANDATIONS"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
