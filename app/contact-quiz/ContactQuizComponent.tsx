"use client";

import { useState } from "react";
import { useContactForm } from "@/hooks/useContactForm";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { parsePhoneToE164 } from "@/lib/phone-utils";
import { CheckCircle, Send, ArrowRight, Download } from "lucide-react";
import Link from "next/link";

const formSchema = z.object({
  selectedPlan: z.string().min(1, "Veuillez sélectionner une formule."),
  fullName: z.string().min(2, "Le nom complet est requis."),
  email: z.email("Format d'email invalide."),
  phone: z.string().refine((val) => {
    if (!val) return true;
    return !!parsePhoneToE164(val);
  }, "Numéro invalide. Ex: 06 61... ou +33 6..."),
  resultEmail: z.email("Format d'email invalide."),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const inputStyles =
  "w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-5 py-4 text-sm text-white placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)]/40 focus:bg-white/[0.06] focus:shadow-[0_0_20px_rgba(220,38,38,0.08)] transition-all duration-300";

const plans = [
  {
    id: "starter",
    title: "Starter",
    subtitle: "Solo / Indépendant",
    price: "2 999 €",
    description: "Idéal pour tester et valider rapidement le marché marocain.",
    features: ["Bilan & audit projet", "Création d'entreprise complète", "Setup administratif de base"],
  },
  {
    id: "family",
    title: "Family",
    subtitle: "MRE & Installation",
    price: "Sur devis",
    description: "Parfait pour les Marocains du monde qui souhaitent revenir en famille.",
    features: ["Accompagnement administratif", "Aide logement & écoles", "Réseau business local"],
  },
  {
    id: "growth",
    title: "Growth",
    subtitle: "Startups / Business",
    price: "Sur devis",
    description: "Pour les entrepreneurs qui veulent accélérer au Maroc.",
    features: ["Stratégie go-to-market", "Recrutement & Bureaux", "Réseau investisseurs"],
  },
];

export default function ContactQuizComponent() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [globalError, setGlobalError] = useState<string | null>(null);

  const {
    register, handleSubmit, setValue, watch, reset,
    formState: { errors, isSubmitting: isRHFSubmitting, isValid },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: { selectedPlan: "", fullName: "", email: "", phone: "", resultEmail: "", message: "" },
  });

  const currentPlanId = watch("selectedPlan");

  const { submitForm: submitEmail, isSubmitting: isEmailSubmitting } = useContactForm({
    formId: "plan-selection",
    onError: (err) => console.error("Email sending failed:", err),
  });

  const onSubmit = async (data: FormValues) => {
    setGlobalError(null);
    const selectedPlanData = plans.find((p) => p.id === data.selectedPlan);
    try {
      const formattedPhone = parsePhoneToE164(data.phone);
      submitEmail({
        "Nom complet": data.fullName,
        "Email principal": data.email,
        Téléphone: formattedPhone || "Non renseigné",
        "Email pour résultats": data.resultEmail,
        Message: data.message || "Aucun message",
        "Plan sélectionné": selectedPlanData?.title || data.selectedPlan,
        "Prix du plan": selectedPlanData?.price || "Non défini",
        Source: "Sélection de plan - Page devis",
        "Date de soumission": new Date().toLocaleString("fr-FR", {
          timeZone: "Africa/Casablanca", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit",
        }),
      });

      const res = await fetch("/api/plan-selection", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          selectedPlan: data.selectedPlan,
          fullName: data.fullName,
          email: data.email,
          phone: formattedPhone || null,
          resultEmail: data.resultEmail,
          message: data.message || null,
        }),
      });
      if (!res.ok) throw new Error("DB error");
      setShowSuccess(true);
      setTimeout(() => reset(), 5000);
    } catch (err) {
      console.error("Submission error:", err);
      setGlobalError("Une erreur est survenue, veuillez réessayer plus tard.");
    }
  };

  const isSubmitting = isRHFSubmitting || isEmailSubmitting;
  const handlePlanSelect = (id: string) => setValue("selectedPlan", id, { shouldValidate: true });

  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      {/* Aurora */}
      <div className="aurora-glow w-[600px] h-[500px] top-1/4 right-0 opacity-50 fixed" />

      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 pt-36 pb-24">
        {showSuccess ? (
          <div className="max-w-lg mx-auto text-center animate-[fadeUp_0.5s_ease-out_both]">
            <div className="v3-glass p-12" style={{ borderRadius: 28 }}>
              <div className="w-16 h-16 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={28} className="text-[var(--accent)]" />
              </div>
              <h2 className="font-[family-name:var(--font-montserrat)] font-black text-2xl text-white uppercase">Demande validée !</h2>
              <p className="text-[var(--text-secondary)] text-sm mt-4">Notre équipe vous recontactera rapidement pour finaliser votre projet.</p>
            </div>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="text-center mb-14 animate-[fadeUp_0.8s_ease-out_both]">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="para-bars para-bars--sm"><div className="para-bar" /><div className="para-bar" /><div className="para-bar" /></div>
                <span className="v3-section-eyebrow-text">Votre pack</span>
                <div className="para-bars para-bars--sm"><div className="para-bar" style={{ opacity: 0.3 }} /><div className="para-bar" style={{ opacity: 0.6 }} /><div className="para-bar" /></div>
              </div>
              <h1 className="v3-section-title" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}>
                CHOISISSEZ VOTRE <span className="gradient-text">ACCOMPAGNEMENT</span>
              </h1>
              <p className="text-[var(--text-muted)] text-sm mt-4 max-w-lg mx-auto">
                Installation rapide, retour en famille ou croissance accélérée — sélectionnez la formule qui vous correspond.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Plan cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 animate-[fadeUp_0.8s_ease-out_0.2s_both]">
                {plans.map((plan) => (
                  <div
                    key={plan.id}
                    onClick={() => handlePlanSelect(plan.id)}
                    className={`v3-glass p-7 cursor-pointer transition-all duration-400 relative overflow-hidden ${
                      currentPlanId === plan.id ? "bg-white/[0.06] border-[var(--accent)]/30" : "hover:bg-white/[0.03]"
                    }`}
                    style={{ borderRadius: 20 }}
                  >
                    {currentPlanId === plan.id && (
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" />
                    )}

                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="px-4 py-1.5 text-[10px] font-bold tracking-[0.15em] uppercase text-white"
                        style={{ background: currentPlanId === plan.id ? "var(--accent)" : "rgba(255,255,255,0.06)", transform: "skewX(-12deg)" }}
                      >
                        <span style={{ display: "inline-block", transform: "skewX(12deg)" }}>{plan.title}</span>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                        currentPlanId === plan.id ? "border-[var(--accent)] bg-[var(--accent)]" : "border-white/20"
                      }`}>
                        {currentPlanId === plan.id && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                    </div>

                    <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[var(--text-muted)]">{plan.subtitle}</p>
                    <p className="font-[family-name:var(--font-montserrat)] font-black text-2xl text-white mt-1">{plan.price}</p>
                    <p className="text-xs text-[var(--text-muted)] mt-3 leading-relaxed">{plan.description}</p>

                    <ul className="mt-5 space-y-2">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <CheckCircle size={14} className="text-[var(--accent)] flex-shrink-0" />
                          <span className="text-xs text-[var(--text-secondary)]">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <input type="hidden" {...register("selectedPlan")} />
              {errors.selectedPlan && (
                <p className="text-[var(--accent)] text-xs text-center mb-6">{errors.selectedPlan.message}</p>
              )}

              {/* Brochure link */}
              <div className="flex justify-center mb-12">
                <Link href="/brochure" className="group relative inline-flex items-center gap-3 px-7 py-[13px] text-[11px] font-bold tracking-[0.2em] uppercase text-white/60 cursor-pointer transition-colors hover:text-white">
                  <span className="absolute inset-0 border border-white/[0.1] skew-x-[-12deg] transition-all duration-500 group-hover:border-[var(--accent)]/30 group-hover:bg-white/[0.03]" />
                  <Download size={14} className="relative z-10" />
                  <span className="relative z-10">Télécharger la brochure PDF</span>
                </Link>
              </div>

              {/* Form section */}
              <div className="max-w-2xl mx-auto animate-[fadeUp_0.8s_ease-out_0.3s_both]">
                <div className="v3-glass p-8 md:p-10 relative overflow-hidden" style={{ borderRadius: 24 }}>
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent" />

                  <div className="flex items-center gap-3 mb-6">
                    <div className="para-bars para-bars--sm"><div className="para-bar" /><div className="para-bar" /></div>
                    <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-sm uppercase tracking-[0.15em] text-white">
                      Vos informations
                    </h2>
                  </div>

                  <div className="flex flex-col gap-5">
                    <div>
                      <label className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[var(--text-muted)] mb-2 block">Nom complet *</label>
                      <input type="text" placeholder="Votre nom complet" className={inputStyles} disabled={isSubmitting} {...register("fullName")} />
                      {errors.fullName && <span className="text-[var(--accent)] text-xs mt-1.5 block">{errors.fullName.message}</span>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[var(--text-muted)] mb-2 block">Email *</label>
                        <input type="email" placeholder="votre@email.com" className={inputStyles} disabled={isSubmitting} {...register("email")} />
                        {errors.email && <span className="text-[var(--accent)] text-xs mt-1.5 block">{errors.email.message}</span>}
                      </div>
                      <div>
                        <label className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[var(--text-muted)] mb-2 block">Téléphone</label>
                        <input type="tel" placeholder="+33 6 00 00 00 00" className={inputStyles} disabled={isSubmitting} {...register("phone")} />
                        {errors.phone && <span className="text-[var(--accent)] text-xs mt-1.5 block">{errors.phone.message}</span>}
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[var(--text-muted)] mb-2 block">Email de réception du devis *</label>
                      <input type="email" placeholder="email-devis@email.com" className={inputStyles} disabled={isSubmitting} {...register("resultEmail")} />
                      {errors.resultEmail && <span className="text-[var(--accent)] text-xs mt-1.5 block">{errors.resultEmail.message}</span>}
                    </div>

                    <div>
                      <label className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[var(--text-muted)] mb-2 block">Message (optionnel)</label>
                      <textarea rows={4} placeholder="Décrivez votre projet..." className={`${inputStyles} resize-none`} disabled={isSubmitting} {...register("message")} />
                    </div>

                    {globalError && <p className="text-[var(--accent)] text-xs text-center">{globalError}</p>}

                    <button
                      type="submit"
                      disabled={isSubmitting || !isValid}
                      className="group relative w-full inline-flex items-center justify-center gap-3 px-9 py-[17px] text-[12px] font-bold tracking-[0.2em] uppercase text-white cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed mt-2"
                    >
                      <span className="absolute inset-0 bg-[var(--accent)] skew-x-[-12deg] transition-all duration-500 group-hover:bg-[var(--accent-light)] group-hover:scale-[1.02]" />
                      <Send size={14} className="relative z-10" />
                      <span className="relative z-10">{isSubmitting ? "Envoi en cours..." : "Recevoir mon devis"}</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </main>
  );
}
