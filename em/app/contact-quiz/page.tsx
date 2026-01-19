"use client";

import { useContactForm } from "@/hooks/useContactForm";
import "./contact-quiz.css";
import { CloudRedEffect1 } from "@/components/CloudRedEffect";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { parsePhoneNumberFromString } from "libphonenumber-js";

// 1. Define Zod Schema
const formSchema = z.object({
  selectedPlan: z.string().min(1, "Veuillez sélectionner une formule."),
  fullName: z.string().min(2, "Le nom complet est requis."),
  email: z.string().email("Format d'email invalide."),
  phone: z.string().refine((val) => {
    if (!val) return true; // Optional field
    const phoneNumber = parsePhoneNumberFromString(val);
    if (phoneNumber?.isValid()) {
      return true;
    }
    const cleaned = val.replace(/[\s\-\.\(\)]/g, "");
    return /^\+?\d{6,15}$/.test(cleaned);
  }, "Numéro de téléphone invalide."),
  resultEmail: z.string().email("Format d'email invalide."),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const plans = [
  {
    id: "starter",
    title: "PLAN 1 - Starter",
    subtitle: "(solo / indépendant)",
    price: "2999 €",
    description: "Idéal pour tester et valider rapidement le marché marocain.",
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

export default function DevisPage() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting: isRHFSubmitting, isValid },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      selectedPlan: "",
      fullName: "",
      email: "",
      phone: "",
      resultEmail: "",
      message: "",
    },
  });

  // Watch selected plan for visual styling
  const currentPlanId = watch("selectedPlan");

  const {
    submitForm,
    isSubmitting: isApiSubmitting,
    isSuccess,
    error: apiError,
  } = useContactForm({
    formId: "plan-selection",
    onSuccess: () => {
      setTimeout(() => {
        reset();
      }, 5000);
    },
  });

  const isSubmitting = isRHFSubmitting || isApiSubmitting;

  const onSubmit = async (data: FormValues) => {
    const selectedPlanData = plans.find((p) => p.id === data.selectedPlan);

    await submitForm({
      "Nom complet": data.fullName,
      "Email principal": data.email,
      Téléphone: data.phone || "Non renseigné",
      "Email pour résultats": data.resultEmail,
      Message: data.message || "Aucun message",
      "Plan sélectionné": selectedPlanData?.title || data.selectedPlan,
      "Prix du plan": selectedPlanData?.price || "Non défini",
      Source: "Sélection de plan - Page devis",
      "Date de soumission": new Date().toLocaleString("fr-FR", {
        timeZone: "Africa/Casablanca",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    });
  };

  // Helper to handle card click as radio selection
  const handlePlanSelect = (id: string) => {
    setValue("selectedPlan", id, { shouldValidate: true });
  };

  if (isSuccess) {
    return (
      <main className="qc relative overflow-hidden">
        <CloudRedEffect1 />

        <div className="qc__wrap">
          <div
            className="qc__success"
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
                textTransform: "uppercase",
              }}
            >
              DEMANDE VALIDÉE !
            </h2>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                fontSize: "18px",
                lineHeight: "1.5",
              }}
            >
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
      <CloudRedEffect1 />

      <div className="qc__wrap">
        <header className="qc__head">
          <h1 className="qc__title">CHOISISSEZ VOTRE PACK D'ACCOMPAGNEMENT</h1>
          <p className="qc__lead">
            Installation rapide, retour en famille ou croissance accélérée :
            sélectionnez la formule qui vous correspond.
          </p>
        </header>

        <form className="qc__form" onSubmit={handleSubmit(onSubmit)}>
          {/* Plan Selection Section */}
          <div className="qc__plans">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`qc__card ${
                  currentPlanId === plan.id ? "is-selected" : ""
                }`}
                onClick={() => handlePlanSelect(plan.id)}
              >
                {/* Radio Selection Indicator */}
                <div className="qc__card-radio" />

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

          {/* Hidden input for RHF validation of the plan */}
          <input
            type="hidden"
            {...register("selectedPlan")}
            value={currentPlanId}
          />
          {errors.selectedPlan && (
            <div
              className="qc__error-msg"
              style={{ textAlign: "center", marginBottom: "2rem" }}
            >
              ⚠️ {errors.selectedPlan.message}
            </div>
          )}

          {/* BROCHURE BUTTON CENTERED */}
          <div className="qc__brochure-container">
            <a href="/brochure" className="qc__brochure-btn">
              → Télécharger la brochure complète PDF
            </a>
          </div>

          <h2 className="qc__form-title">VOS INFORMATIONS</h2>

          <div className="qc__inputs-stack">
            {/* Full Name */}
            <div className="qc__field">
              <div
                className={`qc__input-wrapper ${
                  errors.fullName ? "error" : ""
                }`}
              >
                <input
                  className="qc__input"
                  placeholder="NOM COMPLET *"
                  disabled={isSubmitting}
                  {...register("fullName")}
                />
              </div>
              {errors.fullName && (
                <p className="qc__error-msg">{errors.fullName.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="qc__field">
              <div
                className={`qc__input-wrapper ${errors.email ? "error" : ""}`}
              >
                <input
                  className="qc__input"
                  type="email"
                  placeholder="EMAIL PRINCIPAL *"
                  disabled={isSubmitting}
                  {...register("email")}
                />
              </div>
              {errors.email && (
                <p className="qc__error-msg">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div className="qc__field">
              <div
                className={`qc__input-wrapper ${errors.phone ? "error" : ""}`}
              >
                <input
                  className="qc__input"
                  type="tel"
                  placeholder="TÉLÉPHONE (OPTIONNEL)"
                  disabled={isSubmitting}
                  {...register("phone")}
                />
              </div>
              {errors.phone && (
                <p className="qc__error-msg">{errors.phone.message}</p>
              )}
            </div>

            {/* Results Email */}
            <div className="qc__field">
              <div
                className={`qc__input-wrapper ${
                  errors.resultEmail ? "error" : ""
                }`}
              >
                <input
                  className="qc__input"
                  type="email"
                  placeholder="EMAIL DE RÉCEPTION DU DEVIS *"
                  disabled={isSubmitting}
                  {...register("resultEmail")}
                />
              </div>
              {errors.resultEmail && (
                <p className="qc__error-msg">{errors.resultEmail.message}</p>
              )}
            </div>

            {/* Message */}
            <div className="qc__field">
              <div className="qc__input-wrapper is-textarea">
                <textarea
                  className="qc__textarea"
                  rows={4}
                  placeholder="MESSAGE / DÉTAILS DE VOTRE PROJET (OPTIONNEL)"
                  disabled={isSubmitting}
                  {...register("message")}
                />
              </div>
            </div>
          </div>

          {apiError && <div className="qc__error-global">⚠️ {apiError}</div>}

          <div className="qc__actions">
            <button
              type="submit"
              className="qc__btn"
              disabled={isSubmitting || !isValid}
            >
              {isSubmitting
                ? "Envoi en cours..."
                : "Recevoir mon devis personnalisé"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
