"use client";

import { useState } from "react";
import { useContactForm } from "@/hooks/useContactForm";
import "./mini-test.css";
import { CloudRedEffect1 } from "@/components/CloudRedEffect";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/lib/supabase"; // Import your Supabase client

// 1. Define Zod Schema
const formSchema = z.object({
  project: z.string().min(1, "Veuillez sélectionner un projet."),
  obstacles: z.array(z.string()).optional(),
  email: z.email("Format d'email invalide"),
});

type FormValues = z.infer<typeof formSchema>;

export default function MiniTestComponent() {
  // Local state for DB success/error priority
  const [showSuccess, setShowSuccess] = useState(false);
  const [globalError, setGlobalError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting: isRHFSubmitting, isValid },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      project: "",
      obstacles: [],
      email: "",
    },
  });

  // Decoupled Email hook: we log errors but don't block the user if DB succeeded
  const { submitForm: submitEmail, isSubmitting: isEmailSubmitting } =
    useContactForm({
      formId: "mini-test",
      onError: (err) => console.error("Email sending failed:", err),
    });

  const isSubmitting = isRHFSubmitting || isEmailSubmitting;

  const onSubmit = async (data: FormValues) => {
    setGlobalError(null);

    // Helpers for Email formatting
    const getProjectLabel = (key: string | null) => {
      const map: Record<string, string> = {
        create: "Créer une entreprise",
        family: "S'installer en famille",
        invest: "Investir au Maroc",
      };
      return key ? map[key] || key : "Non renseigné";
    };

    const getObstaclesLabels = (keys: string[] | undefined | null) => {
      if (!keys || keys.length === 0) return "Aucun";
      const map: Record<string, string> = {
        tax: "Statut / fiscalité",
        housing: "Logement / papiers",
        info: "Manque d'infos fiables",
        start: "Je ne sais pas par où commencer",
      };
      return keys.map((k) => map[k] || k).join(", ");
    };

    try {
      // Send Email (Secondary Action - Fire and Forget)
      submitEmail({
        Email: data.email,
        "Projet principal": getProjectLabel(data.project),
        Obstacles: getObstaclesLabels(data.obstacles),
        Source: "Mini Test - Plan Action",
        "Date de soumission": new Date().toLocaleString("fr-FR", {
          timeZone: "Africa/Casablanca",
        }),
      });

      // Submit directly to Supabase
      const { error } = await supabase.from("mini_test").insert([
        {
          project: data.project,
          obstacles: data.obstacles || [], // Supabase handles array -> jsonb automatic conversion
          email: data.email,
        },
      ]);

      if (error) {
        console.error("Supabase insertion error:", error);
        throw new Error(error.message || "Erreur lors de l'enregistrement");
      }

      // Trigger UI Success Immediately
      setShowSuccess(true);

      setTimeout(() => {
        reset();
      }, 5000);
    } catch (err: any) {
      console.error("Submission error:", err);
      setGlobalError("Une erreur est survenue, veuillez réessayer plus tard.");
    }
  };

  if (showSuccess) {
    return (
      <main className="mintest relative overflow-hidden">
        <CloudRedEffect1 />

        <div className="mt__wrap">
          <div
            className="mt__success"
            style={{
              background: "#000",
              border: "1px solid #fff",
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
    <main className="mintest relative overflow-hidden">
      <CloudRedEffect1 />

      <div className="mt__wrap">
        <header className="mt__head">
          <h1 className="mt__title">MINI TEST : PAR OÙ COMMENCER ?</h1>
          <p className="mt__lead">
            Répondez à ces questions pour clarifier votre situation et recevoir
            les prochaines étapes concrètes par email.
          </p>
        </header>

        <form className="mt__form" onSubmit={handleSubmit(onSubmit)}>
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
                    value={key}
                    className="mt__radio"
                    disabled={isSubmitting}
                    {...register("project")}
                  />
                </label>
              ))}
            </div>
            {errors.project && (
              <p className="mt__error-msg">{errors.project.message}</p>
            )}
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
                    value={key}
                    className="mt__check"
                    disabled={isSubmitting}
                    {...register("obstacles")}
                  />
                </label>
              ))}
            </div>
          </section>

          <div className="mt__inputs">
            <div className={`mt__input-wrapper ${errors.email ? "error" : ""}`}>
              <input
                type="email"
                className="mt__input"
                placeholder="EMAIL (OBLIGATOIRE) :"
                disabled={isSubmitting}
                autoComplete="email"
                {...register("email")}
              />
            </div>
            {errors.email && (
              <p className="mt__error-msg">{errors.email.message}</p>
            )}
          </div>

          {globalError && (
            <div
              style={{
                color: "#ff4444",
                fontWeight: "700",
                marginBottom: "20px",
                textAlign: "right",
              }}
            >
              ⚠️ {globalError}
            </div>
          )}

          <div className="mt__actions">
            <button
              type="submit"
              className="mt__btn"
              disabled={isSubmitting || !isValid}
            >
              {isSubmitting ? "Envoi en cours..." : "Voir mes recommandations"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
