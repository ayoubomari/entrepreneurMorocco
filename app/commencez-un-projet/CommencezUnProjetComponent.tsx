"use client";

import { useState } from "react";
import { useContactForm } from "@/hooks/useContactForm";
import "./commencez-un-projet.css";
import { CloudRedEffect1 } from "@/components/CloudRedEffect";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { parsePhoneToE164 } from "@/lib/phone-utils";
import { supabase } from "@/lib/supabase"; // Import your Supabase client

// 1. Define Zod Schema
const formSchema = z.object({
  profile: z.string().min(1, "Veuillez sélectionner un profil."),
  stage: z.string().min(1, "Veuillez indiquer l'étape du projet."),
  needs: z.array(z.string()).optional(),
  email: z.email("Format d'email invalide"),
  phone: z.string().refine((val) => {
    if (!val) return true; // Optional field
    return !!parsePhoneToE164(val);
  }, "Numéro invalide. Ex: 06 61... ou +33 6..."),
});

type FormValues = z.infer<typeof formSchema>;

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

export default function CommencezUnProjetComponent() {
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
      needs: [],
      email: "",
      phone: "",
    },
  });

  // We still use the hook for the email part, but we decouple the UI success from it
  const { submitForm: submitEmail, isSubmitting: isEmailSubmitting } =
    useContactForm({
      formId: "profile-quiz",
      onError: (err) => console.error("Email sending failed:", err), // Log email errors silently if DB succeeded
    });

  // Helper to format labels for the Email
  const getLabel = (
    key: string | null | undefined,
    map: [string, string][],
  ) => {
    const found = map.find(([k]) => k === key);
    return found ? found[1] : "Non renseigné";
  };

  const getNeedsLabels = (keys: string[] | undefined) => {
    if (!keys || keys.length === 0) return "Aucun besoin sélectionné";
    return keys
      .map((k) => {
        const found = NEEDS_OPTS.find(([optKey]) => optKey === k);
        return found ? found[1] : k;
      })
      .join(", ");
  };

  const onSubmit = async (data: FormValues) => {
    setGlobalError(null);

    try {
      // Prepare Data
      const formattedPhone = parsePhoneToE164(data.phone);

      // Send Email (via your existing hook logic)
      submitEmail({
        Email: data.email,
        Téléphone: formattedPhone || "Non renseigné",
        Profil: getLabel(data.profile, PROFIL_OPTS),
        "Étape du projet": getLabel(data.stage, STAGE_OPTS),
        "Besoins d'accompagnement": getNeedsLabels(data.needs),
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

      // Submit directly to Supabase
      // Note: Ensure table name matches your DB exactly (usually snake_case)
      const { error } = await supabase.from("profile_quiz").insert([
        {
          profile: data.profile,
          stage: data.stage,
          needs: data.needs || [],
          email: data.email,
          phone: formattedPhone || null, // Send null if phone is empty
        },
      ]);

      if (error) {
        console.error("Supabase insertion error:", error);
        throw new Error(error.message || "Erreur lors de l'enregistrement");
      }

      // Trigger UI Success
      setShowSuccess(true);

      setTimeout(() => {
        reset();
      }, 3000);
    } catch (err: any) {
      console.error("Submission error:", err);
      setGlobalError("Une erreur est survenue, veuillez réessayer plus tard.");
    }
  };

  const isSubmitting = isRHFSubmitting || isEmailSubmitting;

  if (showSuccess) {
    return (
      <main className="cproj relative overflow-hidden">
        <CloudRedEffect1 />
        <div className="cproj__wrap">
          <div
            className="cproj__success"
            style={{
              background: "#000",
              border: "2px solid #fff",
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
                background: "#fff",
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

        <form className="cproj__form" onSubmit={handleSubmit(onSubmit)}>
          {/* ... Profile Section ... */}
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
                    value={key}
                    className="cproj__radio"
                    disabled={isSubmitting}
                    {...register("profile")}
                  />
                </label>
              ))}
            </div>
            {errors.profile && (
              <p className="cproj__error-msg">{errors.profile.message}</p>
            )}
          </section>

          {/* ... Stage Section ... */}
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
                    value={key}
                    className="cproj__radio"
                    disabled={isSubmitting}
                    {...register("stage")}
                  />
                </label>
              ))}
            </div>
            {errors.stage && (
              <p className="cproj__error-msg">{errors.stage.message}</p>
            )}
          </section>

          {/* ... Needs Section ... */}
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
                    value={key}
                    className="cproj__check"
                    disabled={isSubmitting}
                    {...register("needs")}
                  />
                </label>
              ))}
            </div>
          </section>

          {/* Inputs: Email & Phone */}
          <div className="cproj__inputs">
            <div className="cproj__inputRow">
              <div
                className={`cproj__input-wrapper ${errors.email ? "error" : ""}`}
              >
                <input
                  type="email"
                  className="cproj__input"
                  placeholder="EMAIL (OBLIGATOIRE) :"
                  autoComplete="email"
                  disabled={isSubmitting}
                  {...register("email")}
                />
              </div>
              {errors.email && (
                <p className="cproj__error-msg">{errors.email.message}</p>
              )}
            </div>

            <div className="cproj__inputRow">
              <div
                className={`cproj__input-wrapper ${errors.phone ? "error" : ""}`}
              >
                <input
                  type="tel"
                  className="cproj__input"
                  placeholder="TÉLÉPHONE (OPTIONNEL) :"
                  autoComplete="tel"
                  disabled={isSubmitting}
                  {...register("phone")}
                />
              </div>
              {errors.phone && (
                <p className="cproj__error-msg">{errors.phone.message}</p>
              )}
            </div>
          </div>

          {globalError && (
            <div className="cproj__error-global">⚠️ {globalError}</div>
          )}

          <div className="cproj__actions">
            <button
              type="submit"
              className="cproj__btn"
              disabled={isSubmitting || !isValid}
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
