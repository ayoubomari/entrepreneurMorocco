"use client";

import { useState } from "react";
import { useContactForm } from "@/hooks/useContactForm";
import "./diagnostic-projet-maroc.css";
import { CheckCircle } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { parsePhoneToE164 } from "@/lib/phone-utils";
import { supabase } from "@/lib/supabase";
import { CloudRedEffect2 } from "@/components/CloudRedEffect";

// --- SCHEMA ZOD ---
const formSchema = z
  .object({
    firstName: z.string().min(1, "Le prénom est requis"),
    lastName: z.string().min(1, "Le nom est requis"),
    email: z.email("Format d'email invalide"),
    phone: z.string().refine((val) => {
      if (!val) return false;
      return !!parsePhoneToE164(val);
    }, "Numéro de téléphone invalide"),

    projectDate: z.string().min(1, "Veuillez sélectionner une date"),
    situation: z.string().min(1, "Veuillez sélectionner votre situation"),
    familyStatus: z
      .string()
      .min(1, "Veuillez sélectionner votre statut familial"),
    childrenCount: z.string().optional(),
    childrenAges: z.string().optional(),

    motivations: z
      .array(z.string())
      .min(1, "Sélectionnez au moins une motivation"),

    mainSkill: z.string().min(1, "Votre compétence principale est requise"),
    expYears: z.string().min(1, "Veuillez indiquer vos années d'expérience"),
    revenueGen: z.string().min(1, "Veuillez indiquer la génération de revenus"),

    budget: z.string().min(1, "Veuillez sélectionner un budget"),
    runway: z.string().min(1, "Veuillez indiquer votre autonomie financière"),

    path: z.string().min(1, "Veuillez sélectionner la voie envisagée"),

    network: z.string().min(1, "Veuillez indiquer l'état de votre réseau"),

    message: z.string().optional(),

    callOptIn: z.string().min(1, "Veuillez faire un choix pour l'appel"),
    availabilities: z.array(z.string()).optional(),
  })
  .superRefine((data, ctx) => {
    if (data.familyStatus === "famille") {
      if (!data.childrenCount || data.childrenCount === "") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["childrenCount"],
          message: "Veuillez indiquer le nombre d'enfants",
        });
      }
    }

    if (data.callOptIn === "oui") {
      if (!data.availabilities || data.availabilities.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["availabilities"],
          message: "Veuillez sélectionner au moins une disponibilité",
        });
      }
    }
  });

type FormValues = z.infer<typeof formSchema>;

export default function DiagnosticProjectMarocComponent() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [globalError, setGlobalError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isValid, isSubmitting: isRHFSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      projectDate: "",
      situation: "",
      familyStatus: "",
      childrenCount: "",
      childrenAges: "",
      motivations: [],
      mainSkill: "",
      expYears: "",
      revenueGen: "",
      budget: "",
      runway: "",
      path: "",
      network: "",
      message: "",
      callOptIn: "",
      availabilities: [],
    },
  });

  const { submitForm: submitEmail, isSubmitting: isEmailSubmitting } =
    useContactForm({
      formId: "diagnostic-maroc-2030",
      onError: (err) => console.error("Email sending failed:", err),
    });

  const isSubmitting = isRHFSubmitting || isEmailSubmitting;
  const w = watch();

  const handleSetChoice = (field: keyof FormValues, value: string) => {
    setValue(field, value, { shouldValidate: true });
  };

  const toggleArrayItem = (
    field: "motivations" | "availabilities",
    val: string,
  ) => {
    const current = (w[field] as string[]) || [];
    const next = current.includes(val)
      ? current.filter((v) => v !== val)
      : [...current, val];
    setValue(field, next, { shouldValidate: true });
  };

  const calculateScore = (data: FormValues) => {
    let score = 0;
    if (data.projectDate === "moins_3") score += 15;
    else if (data.projectDate === "3_6") score += 12;
    else if (data.projectDate === "6_12") score += 8;
    else if (data.projectDate === "plus_1") score += 5;

    if (data.situation === "entrepreneur" || data.situation === "independant")
      score += 10;
    else if (data.situation === "salarie") score += 8;
    else if (data.situation === "reconversion") score += 5;
    else if (data.situation === "sans_activite") score += 2;

    if (data.expYears === "plus_5") score += 10;
    else if (data.expYears === "3_5") score += 8;
    else if (data.expYears === "1_3") score += 5;
    else if (data.expYears === "moins_1") score += 2;

    if (data.revenueGen === "regulier") score += 10;
    else if (data.revenueGen === "ponctuel") score += 5;

    if (data.budget === "plus_30") score += 10;
    else if (data.budget === "15_30") score += 8;
    else if (data.budget === "5_15") score += 5;
    else if (data.budget === "moins_5") score += 2;

    if (data.runway === "plus_12") score += 10;
    else if (data.runway === "6_12") score += 8;
    else if (data.runway === "3_6") score += 5;
    else if (data.runway === "moins_3") score += 2;

    if (data.path === "creation" || data.path === "investissement") score += 15;
    else if (data.path === "independant") score += 12;
    else if (data.path === "salariat") score += 10;

    if (data.network === "solide") score += 20;
    else if (data.network === "contacts") score += 10;

    return Math.min(score, 100);
  };

  const getScoreLabel = (score: number) => {
    if (score >= 70) return "Projet Solide";
    if (score >= 40) return "Projet Améliorable";
    return "Projet à Risque";
  };

  const onSubmit = async (data: FormValues) => {
    setGlobalError(null);
    const finalScore = calculateScore(data);
    const scoreLabel = getScoreLabel(finalScore);
    const cleanPhone = parsePhoneToE164(data.phone) || data.phone;

    try {
      // Envoi de l'email (Side-effect système legacy)
      submitEmail({
        Prénom: data.firstName,
        Nom: data.lastName,
        Email: data.email,
        "Téléphone (WhatsApp)": cleanPhone,
        "Date installation": data.projectDate,
        "Situation actuelle": data.situation,
        "Statut Familial": data.familyStatus,
        "Nombre enfants":
          data.familyStatus === "famille"
            ? data.childrenCount || "Non précisé"
            : "Non concerné",
        "Ages enfants":
          data.familyStatus === "famille"
            ? data.childrenAges || "Non précisé"
            : "N/A",
        Motivations: data.motivations.join(", "),
        "Compétence principale": data.mainSkill,
        "Années expérience": data.expYears,
        "Revenus générés": data.revenueGen,
        "Budget projet": data.budget,
        "Autonomie financière": data.runway,
        "Voie envisagée": data.path,
        "Réseau Maroc": data.network,
        Message: data.message || "Aucun",
        "Appel offert demandé": data.callOptIn,
        "Disponibilités appel":
          data.callOptIn === "oui" &&
          data.availabilities &&
          data.availabilities.length > 0
            ? data.availabilities.join(", ")
            : "N/A",
        "SCORE DIAGNOSTIC": `${finalScore}/100`,
        Resultat: scoreLabel,
        Source: "Formulaire Diagnostic Projet Maroc 2030",
        "Date de soumission": new Date().toLocaleString("fr-FR", {
          timeZone: "Africa/Casablanca",
        }),
      });

      // Soumission directe à Supabase (remplace le fetch API)
      const { error: dbError } = await supabase!
        .from("diagnostic_maroc_2030")
        .insert([
          {
            first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            phone: cleanPhone,
            project_date: data.projectDate,
            situation: data.situation,
            family_status: data.familyStatus,
            children_count: data.childrenCount || null,
            children_ages: data.childrenAges || null,
            motivations: data.motivations,
            main_skill: data.mainSkill,
            exp_years: data.expYears,
            revenue_gen: data.revenueGen,
            budget: data.budget,
            runway: data.runway,
            path: data.path,
            network: data.network,
            message: data.message || null,
            call_opt_in: data.callOptIn,
            availabilities: data.availabilities || [],
            score: finalScore,
            result_label: scoreLabel,
          },
        ]);

      if (dbError) throw new Error(dbError.message);

      // Affichage du succès dans l'UI
      setShowSuccess(true);
      setTimeout(() => reset(), 15000);
    } catch (err: any) {
      console.error("Submission error:", err);
      setGlobalError(
        "Une erreur technique est survenue lors de l'enregistrement.",
      );
    }
  };

  if (showSuccess) {
    return (
      <main className="dpm relative overflow-hidden">
        <div className="aurora-glow w-[600px] h-[500px] top-1/4 right-0 opacity-50 fixed" />
        <div className="dpm__wrap">
          <div
            className="dpm__success"
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
              Diagnostic envoyé !
            </h2>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                fontSize: "18px",
                lineHeight: "1.5",
              }}
            >
              Merci {w.firstName}. Nous analysons vos réponses. Vous recevrez
              votre synthèse par email d'ici quelques minutes.
              {w.callOptIn === "oui" &&
                " Notre équipe vous contactera sur WhatsApp pour convenir du rendez-vous."}
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="dpm relative overflow-hidden">
      <CloudRedEffect2 />
      <div className="dpm__wrap">
        <header className="dpm__head">
          <h1 className="dpm__title">
            Formulaire – RDV offert installation Maroc
          </h1>
          <p className="dpm__lead">
            Complétez ce diagnostic pour évaluer la maturité de votre projet et
            obtenir votre plan d'action.
          </p>
        </header>

        <form className="dpm__form" onSubmit={handleSubmit(onSubmit)}>
          {/* SECTION 1 */}
          <section className="dpm__section">
            <h3 className="dpm__section-title">1. Informations personnelles</h3>
            <div className="dpm__grid-2">
              <div className="dpm__field">
                <div
                  className={`dpm__input-wrapper ${errors.firstName ? "error" : ""}`}
                >
                  <input
                    className="dpm__input"
                    type="text"
                    placeholder="PRÉNOM *"
                    {...register("firstName")}
                    disabled={isSubmitting}
                  />
                </div>
                {errors.firstName && (
                  <div className="dpm__error">{errors.firstName.message}</div>
                )}
              </div>
              <div className="dpm__field">
                <div
                  className={`dpm__input-wrapper ${errors.lastName ? "error" : ""}`}
                >
                  <input
                    className="dpm__input"
                    type="text"
                    placeholder="NOM *"
                    {...register("lastName")}
                    disabled={isSubmitting}
                  />
                </div>
                {errors.lastName && (
                  <div className="dpm__error">{errors.lastName.message}</div>
                )}
              </div>
            </div>
            <div className="dpm__grid-2">
              <div className="dpm__field">
                <div
                  className={`dpm__input-wrapper ${errors.email ? "error" : ""}`}
                >
                  <input
                    className="dpm__input"
                    type="email"
                    placeholder="ADRESSE E-MAIL *"
                    {...register("email")}
                    disabled={isSubmitting}
                  />
                </div>
                {errors.email && (
                  <div className="dpm__error">{errors.email.message}</div>
                )}
              </div>
              <div className="dpm__field">
                <div
                  className={`dpm__input-wrapper ${errors.phone ? "error" : ""}`}
                >
                  <input
                    className="dpm__input"
                    type="tel"
                    placeholder="TÉLÉPHONE (WHATSAPP) *"
                    {...register("phone")}
                    disabled={isSubmitting}
                  />
                </div>
                {errors.phone && (
                  <div className="dpm__error">{errors.phone.message}</div>
                )}
              </div>
            </div>
          </section>

          {/* SECTION 2 */}
          <section className="dpm__section">
            <h3 className="dpm__section-title">2. Projection du projet</h3>
            <p className="dpm__label">
              À quelle date envisages-tu ton installation au Maroc ? *
            </p>
            <div className="dpm__options-grid">
              {[
                ["moins_3", "Moins de 3 mois"],
                ["3_6", "Entre 3 et 6 mois"],
                ["6_12", "Entre 6 et 12 mois"],
                ["plus_1", "Plus d’un an"],
                ["nsp", "Je ne sais pas encore"],
              ].map(([val, label]) => (
                <div
                  key={val}
                  className={`dpm__option-card ${w.projectDate === val ? "is-selected" : ""}`}
                  onClick={() => handleSetChoice("projectDate", val)}
                >
                  <span>{label}</span>
                  <div className="dpm__card-radio" />
                </div>
              ))}
            </div>
            {errors.projectDate && (
              <div className="dpm__error">{errors.projectDate.message}</div>
            )}
          </section>

          {/* SECTION 3 */}
          <section className="dpm__section">
            <h3 className="dpm__section-title">3. Situation actuelle</h3>
            <p className="dpm__label">Quelle est ta situation actuelle ? *</p>
            <div className="dpm__options-grid">
              {[
                ["salarie", "Salarié"],
                ["entrepreneur", "Entrepreneur"],
                ["independant", "Freelance / Indépendant"],
                ["reconversion", "En reconversion"],
                ["sans_activite", "Sans activité"],
              ].map(([val, label]) => (
                <div
                  key={val}
                  className={`dpm__option-card ${w.situation === val ? "is-selected" : ""}`}
                  onClick={() => handleSetChoice("situation", val)}
                >
                  <span>{label}</span>
                  <div className="dpm__card-radio" />
                </div>
              ))}
            </div>
            {errors.situation && (
              <div className="dpm__error">{errors.situation.message}</div>
            )}

            <p className="dpm__label mt-6">
              Ton projet d’installation est-il prévu… *
            </p>
            <div className="dpm__options-grid">
              {[
                ["seul", "Seul(e)"],
                ["couple", "En couple"],
                ["famille", "En famille"],
              ].map(([val, label]) => (
                <div
                  key={val}
                  className={`dpm__option-card ${w.familyStatus === val ? "is-selected" : ""}`}
                  onClick={() => handleSetChoice("familyStatus", val)}
                >
                  <span>{label}</span>
                  <div className="dpm__card-radio" />
                </div>
              ))}
            </div>
            {errors.familyStatus && (
              <div className="dpm__error">{errors.familyStatus.message}</div>
            )}

            {w.familyStatus === "famille" && (
              <div className="dpm__sub-group">
                <p className="dpm__label">
                  Combien d’enfants feront partie du projet ? *
                </p>
                <div className="dpm__options-grid">
                  {[
                    "1 enfant",
                    "2 enfants",
                    "3 enfants",
                    "4 enfants ou plus",
                  ].map((opt) => (
                    <div
                      key={opt}
                      className={`dpm__option-card ${w.childrenCount === opt ? "is-selected" : ""}`}
                      onClick={() => handleSetChoice("childrenCount", opt)}
                    >
                      <span>{opt}</span>
                      <div className="dpm__card-radio" />
                    </div>
                  ))}
                </div>
                {errors.childrenCount && (
                  <div className="dpm__error">
                    {errors.childrenCount.message}
                  </div>
                )}
                <div className="dpm__field mt-4">
                  <div className="dpm__input-wrapper">
                    <input
                      className="dpm__input"
                      type="text"
                      placeholder="ÂGE DES ENFANTS (EX: 3 ANS, 7 ANS) FACULTATIF"
                      {...register("childrenAges")}
                    />
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* SECTION 4 */}
          <section className="dpm__section">
            <h3 className="dpm__section-title">4. Intention & motivation</h3>
            <p className="dpm__label">
              Motivation principale pour venir au Maroc ? (Choix multiples) *
            </p>
            <div className="dpm__options-grid">
              {[
                "Créer ou développer un business",
                "Investir (immobilier ou autre)",
                "Trouver un emploi",
                "Changer de cadre de vie",
                "Opportunité professionnelle",
                "Autre",
              ].map((opt) => (
                <div
                  key={opt}
                  className={`dpm__option-card ${w.motivations?.includes(opt) ? "is-selected" : ""}`}
                  onClick={() => toggleArrayItem("motivations", opt)}
                >
                  <span>{opt}</span>
                  <div className="dpm__card-radio is-checkbox" />
                </div>
              ))}
            </div>
            {errors.motivations && (
              <div className="dpm__error">{errors.motivations.message}</div>
            )}
          </section>

          {/* SECTION 5 */}
          <section className="dpm__section">
            <h3 className="dpm__section-title">5. Compétences & expérience</h3>
            <div className="dpm__field mb-6">
              <div
                className={`dpm__input-wrapper ${errors.mainSkill ? "error" : ""}`}
              >
                <input
                  className="dpm__input"
                  type="text"
                  placeholder="QUELLE EST TA COMPÉTENCE OU ACTIVITÉ PRINCIPALE ? *"
                  {...register("mainSkill")}
                />
              </div>
              {errors.mainSkill && (
                <div className="dpm__error">{errors.mainSkill.message}</div>
              )}
            </div>

            <p className="dpm__label">
              Depuis combien d’années exerces-tu cette activité ? *
            </p>
            <div className="dpm__options-grid mb-6">
              {[
                ["moins_1", "Moins d’1 an"],
                ["1_3", "1 à 3 ans"],
                ["3_5", "3 à 5 ans"],
                ["plus_5", "Plus de 5 ans"],
              ].map(([val, label]) => (
                <div
                  key={val}
                  className={`dpm__option-card ${w.expYears === val ? "is-selected" : ""}`}
                  onClick={() => handleSetChoice("expYears", val)}
                >
                  <span>{label}</span>
                  <div className="dpm__card-radio" />
                </div>
              ))}
            </div>
            {errors.expYears && (
              <div className="dpm__error">{errors.expYears.message}</div>
            )}

            <p className="dpm__label">
              As-tu déjà généré des revenus avec cette compétence ? *
            </p>
            <div className="dpm__options-grid">
              {[
                ["regulier", "Oui, de manière régulière"],
                ["ponctuel", "Oui, ponctuellement"],
                ["aucun", "Non, pas encore"],
              ].map(([val, label]) => (
                <div
                  key={val}
                  className={`dpm__option-card ${w.revenueGen === val ? "is-selected" : ""}`}
                  onClick={() => handleSetChoice("revenueGen", val)}
                >
                  <span>{label}</span>
                  <div className="dpm__card-radio" />
                </div>
              ))}
            </div>
            {errors.revenueGen && (
              <div className="dpm__error">{errors.revenueGen.message}</div>
            )}
          </section>

          {/* SECTION 6 */}
          <section className="dpm__section">
            <h3 className="dpm__section-title">
              6. Situation financière (confidentiel)
            </h3>
            <p className="dpm__label">
              Budget pour le projet Maroc (hors logement) ? *
            </p>
            <div className="dpm__options-grid mb-6">
              {[
                ["moins_5", "Moins de 5 000 €"],
                ["5_15", "Entre 5 000 € - 15 000 €"],
                ["15_30", "Entre 15 000 € - 30 000 €"],
                ["plus_30", "Plus de 30 000 €"],
              ].map(([val, label]) => (
                <div
                  key={val}
                  className={`dpm__option-card ${w.budget === val ? "is-selected" : ""}`}
                  onClick={() => handleSetChoice("budget", val)}
                >
                  <span>{label}</span>
                  <div className="dpm__card-radio" />
                </div>
              ))}
            </div>
            {errors.budget && (
              <div className="dpm__error">{errors.budget.message}</div>
            )}

            <p className="dpm__label">
              Combien de mois peux-tu vivre sans revenu ? *
            </p>
            <div className="dpm__options-grid">
              {[
                ["moins_3", "Moins de 3 mois"],
                ["3_6", "3 à 6 mois"],
                ["6_12", "6 à 12 mois"],
                ["plus_12", "Plus de 12 mois"],
              ].map(([val, label]) => (
                <div
                  key={val}
                  className={`dpm__option-card ${w.runway === val ? "is-selected" : ""}`}
                  onClick={() => handleSetChoice("runway", val)}
                >
                  <span>{label}</span>
                  <div className="dpm__card-radio" />
                </div>
              ))}
            </div>
            {errors.runway && (
              <div className="dpm__error">{errors.runway.message}</div>
            )}
          </section>

          {/* SECTION 7 */}
          <section className="dpm__section">
            <h3 className="dpm__section-title">7. Voie envisagée au Maroc</h3>
            <p className="dpm__label">Quelle voie envisages-tu au Maroc ? *</p>
            <div className="dpm__options-grid">
              {[
                ["salariat", "Salariat"],
                ["independant", "Freelance / Indépendant"],
                ["creation", "Création d’entreprise"],
                ["investissement", "Investissement"],
                ["nsp", "Je ne sais pas encore"],
              ].map(([val, label]) => (
                <div
                  key={val}
                  className={`dpm__option-card ${w.path === val ? "is-selected" : ""}`}
                  onClick={() => handleSetChoice("path", val)}
                >
                  <span>{label}</span>
                  <div className="dpm__card-radio" />
                </div>
              ))}
            </div>
            {errors.path && (
              <div className="dpm__error">{errors.path.message}</div>
            )}
          </section>

          {/* SECTION 8 */}
          <section className="dpm__section">
            <h3 className="dpm__section-title">8. Réseau & préparation</h3>
            <p className="dpm__label">
              As-tu déjà un réseau ou des contacts professionnels au Maroc ? *
            </p>
            <div className="dpm__options-grid">
              {[
                ["solide", "Oui, un réseau solide"],
                ["contacts", "Oui, quelques contacts"],
                ["aucun", "Non, aucun"],
              ].map(([val, label]) => (
                <div
                  key={val}
                  className={`dpm__option-card ${w.network === val ? "is-selected" : ""}`}
                  onClick={() => handleSetChoice("network", val)}
                >
                  <span>{label}</span>
                  <div className="dpm__card-radio" />
                </div>
              ))}
            </div>
            {errors.network && (
              <div className="dpm__error">{errors.network.message}</div>
            )}
          </section>

          {/* SECTION 9 */}
          <section className="dpm__section">
            <h3 className="dpm__section-title">9. Message libre (optionnel)</h3>
            <div className="dpm__field">
              <div className="dpm__input-wrapper is-textarea">
                <textarea
                  className="dpm__textarea"
                  placeholder="SOUHAITES-TU NOUS PRÉCISER QUELQUE CHOSE SUR TON PROJET ?"
                  {...register("message")}
                />
              </div>
            </div>
          </section>

          {/* SECTION 10 */}
          <section className="dpm__section">
            <h3 className="dpm__section-title">10. Appel offert</h3>
            <p className="dpm__label">
              Souhaites-tu être contacté(e) pour un appel stratégique offert ? *
            </p>
            <div className="dpm__options-grid">
              <div
                className={`dpm__option-card ${w.callOptIn === "oui" ? "is-selected" : ""}`}
                onClick={() => handleSetChoice("callOptIn", "oui")}
              >
                <span>Oui, je souhaite échanger lors d’un appel offert</span>
                <div className="dpm__card-radio" />
              </div>
              <div
                className={`dpm__option-card ${w.callOptIn === "non" ? "is-selected" : ""}`}
                onClick={() => handleSetChoice("callOptIn", "non")}
              >
                <span>
                  Pas pour le moment, je souhaite d’abord recevoir mon
                  diagnostic
                </span>
                <div className="dpm__card-radio" />
              </div>
            </div>
            {errors.callOptIn && (
              <div className="dpm__error">{errors.callOptIn.message}</div>
            )}

            {w.callOptIn === "oui" && (
              <div className="dpm__sub-group mt-6">
                <p className="dpm__label">
                  Quelles sont tes disponibilités pour cet appel ? *
                </p>
                <div className="dpm__options-grid">
                  {[
                    "En semaine – matin (9h–12h)",
                    "En semaine – après-midi (14h–18h)",
                    "En semaine – soirée (après 18h)",
                    "Week-end",
                  ].map((opt) => (
                    <div
                      key={opt}
                      className={`dpm__option-card ${w.availabilities?.includes(opt) ? "is-selected" : ""}`}
                      onClick={() => toggleArrayItem("availabilities", opt)}
                    >
                      <span>{opt}</span>
                      <div className="dpm__card-radio is-checkbox" />
                    </div>
                  ))}
                </div>
                {errors.availabilities && (
                  <div className="dpm__error">
                    {errors.availabilities.message}
                  </div>
                )}
              </div>
            )}
          </section>

          {globalError && <div className="dpm__error">⚠️ {globalError}</div>}

          <div className="dpm__actions">
            <button
              type="submit"
              className="dpm__btn"
              disabled={!isValid || isSubmitting}
            >
              {isSubmitting
                ? "Analyse en cours..."
                : "Recevoir mon diagnostic par mail"}
            </button>
          </div>
          <div className="dpm__legal">
            Les informations partagées restent strictement confidentielles.
          </div>
        </form>
      </div>
    </main>
  );
}
