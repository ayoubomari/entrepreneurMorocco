"use client";

import { useState } from "react";
import { useContactForm } from "@/hooks/useContactForm";
import "./diagnostic-projet-maroc.css";
import { CloudRedEffect2 } from "@/components/CloudRedEffect";

export default function DiagnosticProjectMaroc() {
  // --- STATE MANAGEMENT ---

  // Section 1: Identity
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Section 2: Projection
  const [projectDate, setProjectDate] = useState("");

  // Section 3: Situation
  const [situation, setSituation] = useState("");
  const [familyStatus, setFamilyStatus] = useState(""); // seul, couple, famille
  const [childrenCount, setChildrenCount] = useState("");
  const [childrenAges, setChildrenAges] = useState("");

  // Section 4: Motivation (Multi-select)
  const [motivations, setMotivations] = useState<string[]>([]);

  // Section 5: Competences
  const [mainSkill, setMainSkill] = useState("");
  const [expYears, setExpYears] = useState("");
  const [revenueGen, setRevenueGen] = useState("");

  // Section 6: Finance
  const [budget, setBudget] = useState("");
  const [runway, setRunway] = useState("");

  // Section 7: Voie
  const [path, setPath] = useState("");

  // Section 8: Reseau
  const [network, setNetwork] = useState("");

  // Section 9: Message
  const [message, setMessage] = useState("");

  // Section 10: Call Availability
  const [callOptIn, setCallOptIn] = useState(""); // yes/no
  const [availabilities, setAvailabilities] = useState<string[]>([]);

  const { submitForm, isSubmitting, isSuccess, error } = useContactForm({
    formId: "diagnostic-maroc-2030",
    onSuccess: () => {
      // Optional: Reset form or redirect
    },
  });

  // --- HELPERS ---

  const toggleMotivation = (val: string) => {
    setMotivations((prev) =>
      prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]
    );
  };

  const toggleAvailability = (val: string) => {
    setAvailabilities((prev) =>
      prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]
    );
  };

  // --- SCORING LOGIC ---
  const calculateScore = () => {
    let score = 0;

    // 1. Temporalité
    if (projectDate === "less_3") score += 15;
    else if (projectDate === "3_6") score += 12;
    else if (projectDate === "6_12") score += 8;
    else if (projectDate === "plus_1") score += 5;

    // 2. Situation Actuelle
    if (situation === "entrepreneur" || situation === "freelance") score += 10;
    else if (situation === "salarie") score += 8;
    else if (situation === "reconversion") score += 5;
    else if (situation === "sans") score += 2;

    // 3. Compétences & Exp
    if (expYears === "plus_5") score += 10;
    else if (expYears === "3_5") score += 8;
    else if (expYears === "1_3") score += 5;
    else if (expYears === "less_1") score += 2;

    if (revenueGen === "regulier") score += 10;
    else if (revenueGen === "ponctuel") score += 5;

    // 4. Finances
    if (budget === "plus_30") score += 10;
    else if (budget === "15_30") score += 8;
    else if (budget === "5_15") score += 5;
    else if (budget === "less_5") score += 2;

    if (runway === "plus_12") score += 10;
    else if (runway === "6_12") score += 8;
    else if (runway === "3_6") score += 5;
    else if (runway === "less_3") score += 2;

    // 5. Voie envisagée
    if (path === "creation" || path === "invest") score += 15;
    else if (path === "freelance") score += 12;
    else if (path === "salariat") score += 10;

    // 6. Réseau
    if (network === "solide") score += 20;
    else if (network === "contacts") score += 10;

    return Math.min(score, 100);
  };

  const getScoreLabel = (score: number) => {
    if (score >= 70) return "Projet Solide";
    if (score >= 40) return "Projet Améliorable";
    return "Projet à Risque";
  };

  // --- SUBMISSION LOGIC ---
  // 1. Conditional Validation
  const isFamilyValid =
    familyStatus === "famille" ? childrenCount !== "" : true;
  const isCallValid = callOptIn === "yes" ? availabilities.length > 0 : true;

  const canSubmit =
    firstName &&
    lastName &&
    email &&
    phone &&
    projectDate &&
    situation &&
    familyStatus &&
    isFamilyValid && // Checks conditional requirements
    motivations.length > 0 &&
    mainSkill &&
    expYears &&
    revenueGen &&
    budget &&
    runway &&
    path &&
    network &&
    callOptIn &&
    isCallValid; // Checks conditional requirements

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    const finalScore = calculateScore();
    const scoreLabel = getScoreLabel(finalScore);

    // 2. Prepare Payload with Safe Defaults
    const payload = {
      Prénom: firstName,
      Nom: lastName,
      Email: email,
      "Téléphone (WhatsApp)": phone,

      // Section 2
      "Date installation": projectDate,

      // Section 3
      "Situation actuelle": situation,
      "Projet Family": familyStatus,
      // CONDITIONAL LOGIC: If 'famille' not selected, send "Non concerné"
      "Nombre enfants":
        familyStatus === "famille" ? childrenCount : "Non concerné",
      "Ages enfants":
        familyStatus === "famille" ? childrenAges || "Non précisé" : "N/A",

      // Section 4
      Motivations: motivations.join(", "),

      // Section 5
      "Compétence principale": mainSkill,
      "Années expérience": expYears,
      "Revenus générés": revenueGen,

      // Section 6
      "Budget projet": budget,
      "Autonomie financière": runway,

      // Section 7
      "Voie envisagée": path,

      // Section 8
      "Réseau Maroc": network,

      // Section 9
      Message: message || "Aucun",

      // Section 10 - CONDITIONAL LOGIC
      "Appel offert demandé": callOptIn,
      "Disponibilités appel":
        callOptIn === "yes" ? availabilities.join(", ") : "N/A",

      // Scoring & Metadata
      "SCORE DIAGNOSTIC": `${finalScore}/100`,
      "": scoreLabel,
      Source: "Formulaire Diagnostic Projet Maroc 2030",
      "Date de soumission": new Date().toLocaleString("fr-FR", {
        timeZone: "Africa/Casablanca",
      }),
    };

    await submitForm(payload);
  };

  if (isSuccess) {
    return (
      <main className="dpm relative overflow-hidden">
        <CloudRedEffect2 />
        <div className="dpm__wrap">
          <div className="dpm__success">
            <div className="dpm__success-icon">
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
            <h2 className="dpm__title">Diagnostic envoyé !</h2>
            <p className="dpm__lead">
              Merci {firstName}. Votre score a été calculé. Vous recevrez votre
              synthèse par email d'ici quelques minutes.
              {callOptIn === "yes" &&
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

        <form className="dpm__form" onSubmit={onSubmit}>
          {/* TECHNICAL HIDDEN INPUT */}
          <input
            type="hidden"
            name="spec_technique"
            value="DIAGNOSTIC PROJET MAROC 2030 – SCORE LOGIC: 70-100 Solide, 40-69 Améliorable, 0-39 Risque."
          />

          {/* SECTION 1 */}
          <section className="dpm__section">
            <h3 className="dpm__section-title">1. Informations personnelles</h3>
            <div className="dpm__grid-2">
              <div className="dpm__field">
                <div className="dpm__input-wrapper">
                  <input
                    className="dpm__input"
                    type="text"
                    placeholder="PRÉNOM *"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div className="dpm__field">
                <div className="dpm__input-wrapper">
                  <input
                    className="dpm__input"
                    type="text"
                    placeholder="NOM *"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            </div>
            <div className="dpm__grid-2">
              <div className="dpm__field">
                <div className="dpm__input-wrapper">
                  <input
                    className="dpm__input"
                    type="email"
                    placeholder="ADRESSE E-MAIL *"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div className="dpm__field">
                <div className="dpm__input-wrapper">
                  <input
                    className="dpm__input"
                    type="tel"
                    placeholder="TÉLÉPHONE (WHATSAPP) *"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    disabled={isSubmitting}
                  />
                </div>
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
                ["less_3", "Moins de 3 mois"],
                ["3_6", "Entre 3 et 6 mois"],
                ["6_12", "Entre 6 et 12 mois"],
                ["plus_1", "Plus d’un an"],
                ["dk", "Je ne sais pas encore"],
              ].map(([val, label]) => (
                <div
                  key={val}
                  className={`dpm__option-card ${
                    projectDate === val ? "is-selected" : ""
                  }`}
                  onClick={() => setProjectDate(val)}
                >
                  <span>{label}</span>
                  <div className="dpm__card-radio" />
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 3 */}
          <section className="dpm__section">
            <h3 className="dpm__section-title">3. Situation actuelle</h3>

            <p className="dpm__label">Quelle est ta situation actuelle ? *</p>
            <div className="dpm__options-grid">
              {[
                ["salarie", "Salarié"],
                ["entrepreneur", "Entrepreneur"],
                ["freelance", "Freelance"],
                ["reconversion", "En reconversion"],
                ["sans", "Sans activité"],
              ].map(([val, label]) => (
                <div
                  key={val}
                  className={`dpm__option-card ${
                    situation === val ? "is-selected" : ""
                  }`}
                  onClick={() => setSituation(val)}
                >
                  <span>{label}</span>
                  <div className="dpm__card-radio" />
                </div>
              ))}
            </div>

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
                  className={`dpm__option-card ${
                    familyStatus === val ? "is-selected" : ""
                  }`}
                  onClick={() => setFamilyStatus(val)}
                >
                  <span>{label}</span>
                  <div className="dpm__card-radio" />
                </div>
              ))}
            </div>

            {familyStatus === "famille" && (
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
                      className={`dpm__option-card ${
                        childrenCount === opt ? "is-selected" : ""
                      }`}
                      onClick={() => setChildrenCount(opt)}
                    >
                      <span>{opt}</span>
                      <div className="dpm__card-radio" />
                    </div>
                  ))}
                </div>

                <div className="dpm__field mt-4">
                  <div className="dpm__input-wrapper">
                    <input
                      className="dpm__input"
                      type="text"
                      placeholder="ÂGE DES ENFANTS (EX: 3 ANS, 7 ANS) FACULTATIF"
                      value={childrenAges}
                      onChange={(e) => setChildrenAges(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* SECTION 4 (CHECKBOXES) */}
          <section className="dpm__section">
            <h3 className="dpm__section-title">4. Motivation</h3>
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
                  className={`dpm__option-card ${
                    motivations.includes(opt) ? "is-selected" : ""
                  }`}
                  onClick={() => toggleMotivation(opt)}
                >
                  <span>{opt}</span>
                  <div className="dpm__card-radio is-checkbox" />
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 5 */}
          <section className="dpm__section">
            <h3 className="dpm__section-title">5. Compétences & expérience</h3>
            <div className="dpm__field mb-6">
              <div className="dpm__input-wrapper">
                <input
                  className="dpm__input"
                  type="text"
                  placeholder="QUELLE EST TA COMPÉTENCE OU ACTIVITÉ PRINCIPALE ? *"
                  required
                  value={mainSkill}
                  onChange={(e) => setMainSkill(e.target.value)}
                />
              </div>
            </div>

            <p className="dpm__label">
              Depuis combien d’années exerces-tu cette activité ? *
            </p>
            <div className="dpm__options-grid mb-6">
              {[
                ["less_1", "Moins d’1 an"],
                ["1_3", "1 à 3 ans"],
                ["3_5", "3 à 5 ans"],
                ["plus_5", "Plus de 5 ans"],
              ].map(([val, label]) => (
                <div
                  key={val}
                  className={`dpm__option-card ${
                    expYears === val ? "is-selected" : ""
                  }`}
                  onClick={() => setExpYears(val)}
                >
                  <span>{label}</span>
                  <div className="dpm__card-radio" />
                </div>
              ))}
            </div>

            <p className="dpm__label">
              As-tu déjà généré des revenus avec cette compétence ? *
            </p>
            <div className="dpm__options-grid">
              {[
                ["regulier", "Oui, de manière régulière"],
                ["ponctuel", "Oui, ponctuellement"],
                ["none", "Non, pas encore"],
              ].map(([val, label]) => (
                <div
                  key={val}
                  className={`dpm__option-card ${
                    revenueGen === val ? "is-selected" : ""
                  }`}
                  onClick={() => setRevenueGen(val)}
                >
                  <span>{label}</span>
                  <div className="dpm__card-radio" />
                </div>
              ))}
            </div>
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
                ["less_5", "Moins de 5k€"],
                ["5_15", "5k€ - 15k€"],
                ["15_30", "15k€ - 30k€"],
                ["plus_30", "Plus de 30k€"],
              ].map(([val, label]) => (
                <div
                  key={val}
                  className={`dpm__option-card ${
                    budget === val ? "is-selected" : ""
                  }`}
                  onClick={() => setBudget(val)}
                >
                  <span>{label}</span>
                  <div className="dpm__card-radio" />
                </div>
              ))}
            </div>

            <p className="dpm__label">
              Combien de mois peux-tu vivre sans revenu ? *
            </p>
            <div className="dpm__options-grid">
              {[
                ["less_3", "Moins de 3 mois"],
                ["3_6", "3 à 6 mois"],
                ["6_12", "6 à 12 mois"],
                ["plus_12", "Plus de 12 mois"],
              ].map(([val, label]) => (
                <div
                  key={val}
                  className={`dpm__option-card ${
                    runway === val ? "is-selected" : ""
                  }`}
                  onClick={() => setRunway(val)}
                >
                  <span>{label}</span>
                  <div className="dpm__card-radio" />
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 7 */}
          <section className="dpm__section">
            <h3 className="dpm__section-title">7. Voie envisagée</h3>
            <p className="dpm__label">Quelle voie envisages-tu au Maroc ? *</p>
            <div className="dpm__options-grid">
              {[
                ["salariat", "Salariat"],
                ["freelance", "Freelance"],
                ["creation", "Création d’entreprise"],
                ["invest", "Investissement"],
                ["dk", "Je ne sais pas encore"],
              ].map(([val, label]) => (
                <div
                  key={val}
                  className={`dpm__option-card ${
                    path === val ? "is-selected" : ""
                  }`}
                  onClick={() => setPath(val)}
                >
                  <span>{label}</span>
                  <div className="dpm__card-radio" />
                </div>
              ))}
            </div>
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
                ["none", "Non, aucun"],
              ].map(([val, label]) => (
                <div
                  key={val}
                  className={`dpm__option-card ${
                    network === val ? "is-selected" : ""
                  }`}
                  onClick={() => setNetwork(val)}
                >
                  <span>{label}</span>
                  <div className="dpm__card-radio" />
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 9 */}
          <section className="dpm__section">
            <h3 className="dpm__section-title">9. Message libre (optionnel)</h3>
            <div className="dpm__field">
              <div className="dpm__input-wrapper is-textarea">
                <textarea
                  className="dpm__textarea"
                  placeholder="SOUHAITES-TU NOUS PRÉCISER QUELQUE CHOSE SUR TON PROJET ?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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
                className={`dpm__option-card ${
                  callOptIn === "yes" ? "is-selected" : ""
                }`}
                onClick={() => setCallOptIn("yes")}
              >
                <span>Oui, je souhaite échanger lors d’un appel offert</span>
                <div className="dpm__card-radio" />
              </div>
              <div
                className={`dpm__option-card ${
                  callOptIn === "no" ? "is-selected" : ""
                }`}
                onClick={() => setCallOptIn("no")}
              >
                <span>
                  Pas pour le moment, je souhaite d’abord recevoir mon
                  diagnostic
                </span>
                <div className="dpm__card-radio" />
              </div>
            </div>

            {callOptIn === "yes" && (
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
                      className={`dpm__option-card ${
                        availabilities.includes(opt) ? "is-selected" : ""
                      }`}
                      onClick={() => toggleAvailability(opt)}
                    >
                      <span>{opt}</span>
                      <div className="dpm__card-radio is-checkbox" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {error && <div className="dpm__error">⚠️ {error}</div>}

          <div className="dpm__actions">
            <button
              type="submit"
              className="dpm__btn"
              disabled={!canSubmit || isSubmitting}
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
