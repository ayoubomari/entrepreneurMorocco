"use client";

import { useState } from "react";
import { useContactForm } from "@/hooks/useContactForm";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { parsePhoneToE164 } from "@/lib/phone-utils";
import { supabase } from "@/lib/supabase";
import { CheckCircle, Send } from "lucide-react";

const formSchema = z.object({
  profile: z.string().min(1, "Veuillez sélectionner un profil."),
  stage: z.string().min(1, "Veuillez indiquer l'étape du projet."),
  needs: z.array(z.string()).optional(),
  email: z.email("Format d'email invalide"),
  phone: z.string().refine((val) => { if (!val) return true; return !!parsePhoneToE164(val); }, "Numéro invalide. Ex: 06 61... ou +33 6..."),
});

type FormValues = z.infer<typeof formSchema>;

const inputStyles = "w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-5 py-4 text-sm text-white placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)]/40 focus:bg-white/[0.06] transition-all duration-300";

const PROFIL_OPTS: [string, string][] = [["mre", "Marocain du monde"], ["freelance", "Freelance"], ["family", "Famille en retour"], ["invest", "Investisseur"], ["reconv", "En reconversion"]];
const STAGE_OPTS: [string, string][] = [["idea", "J'ai une idée"], ["prep", "Je prépare mon départ"], ["launch", "Je veux lancer mon activité"], ["structure", "J'ai déjà une structure"]];
const NEEDS_OPTS: [string, string][] = [["creation", "Création d'entreprise"], ["tax", "Fiscalité / Statut"], ["housing", "Séjour / logement"], ["digital", "Digitalisation"], ["school", "Scolarité / santé"]];

export default function CommencezUnProjetComponent() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [globalError, setGlobalError] = useState<string | null>(null);

  const { register, handleSubmit, reset, watch, formState: { errors, isSubmitting: isRHFSubmitting, isValid } } = useForm<FormValues>({
    resolver: zodResolver(formSchema), mode: "onChange", defaultValues: { needs: [], email: "", phone: "" },
  });

  const currentProfile = watch("profile");
  const currentStage = watch("stage");
  const currentNeeds = watch("needs") || [];

  const { submitForm: submitEmail, isSubmitting: isEmailSubmitting } = useContactForm({
    formId: "profile-quiz", onError: (err) => console.error("Email sending failed:", err),
  });

  const getLabel = (key: string | undefined, map: [string, string][]) => map.find(([k]) => k === key)?.[1] || "Non renseigné";
  const getNeedsLabels = (keys: string[] | undefined) => !keys?.length ? "Aucun" : keys.map((k) => NEEDS_OPTS.find(([o]) => o === k)?.[1] || k).join(", ");

  const onSubmit = async (data: FormValues) => {
    setGlobalError(null);
    try {
      const formattedPhone = parsePhoneToE164(data.phone);
      submitEmail({
        Email: data.email, Téléphone: formattedPhone || "Non renseigné",
        Profil: getLabel(data.profile, PROFIL_OPTS), "Étape du projet": getLabel(data.stage, STAGE_OPTS),
        "Besoins d'accompagnement": getNeedsLabels(data.needs),
        "Date de soumission": new Date().toLocaleString("fr-FR", { timeZone: "Africa/Casablanca", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" }),
        Source: "Questionnaire - Plan personnalisé",
      });

      const { error } = await supabase!.from("profile_quiz").insert([{
        profile: data.profile, stage: data.stage, needs: data.needs || [],
        email: data.email, phone: formattedPhone || null,
      }]);
      if (error) throw new Error(error.message);
      setShowSuccess(true);
      setTimeout(() => reset(), 3000);
    } catch (err) {
      console.error("Submission error:", err);
      setGlobalError("Une erreur est survenue, veuillez réessayer plus tard.");
    }
  };

  const isSubmitting = isRHFSubmitting || isEmailSubmitting;

  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <div className="aurora-glow w-[600px] h-[500px] top-1/4 right-0 opacity-50 fixed" />

      <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12 pt-36 pb-24">
        {showSuccess ? (
          <div className="max-w-lg mx-auto text-center animate-[fadeUp_0.5s_ease-out_both]">
            <div className="v3-glass p-12" style={{ borderRadius: 28 }}>
              <div className="w-16 h-16 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={28} className="text-[var(--accent)]" />
              </div>
              <h2 className="font-[family-name:var(--font-montserrat)] font-black text-2xl text-white uppercase">C&apos;est envoyé !</h2>
              <p className="text-[var(--text-secondary)] text-sm mt-4">Votre plan d&apos;action personnalisé arrive par email.</p>
            </div>
          </div>
        ) : (
          <>
            <div className="text-center mb-14 animate-[fadeUp_0.8s_ease-out_both]">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="para-bars para-bars--sm"><div className="para-bar" /><div className="para-bar" /><div className="para-bar" /></div>
                <span className="v3-section-eyebrow-text">Votre projet</span>
                <div className="para-bars para-bars--sm"><div className="para-bar" style={{ opacity: 0.3 }} /><div className="para-bar" style={{ opacity: 0.6 }} /><div className="para-bar" /></div>
              </div>
              <h1 className="v3-section-title" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}>
                DITES-NOUS OÙ VOUS <span className="gradient-text">EN ÊTES</span>
              </h1>
              <p className="text-[var(--text-muted)] text-sm mt-4 max-w-lg mx-auto">3 questions rapides pour recevoir votre plan d&apos;action personnalisé.</p>
            </div>

            <div className="max-w-xl mx-auto animate-[fadeUp_0.8s_ease-out_0.2s_both]">
              <div className="v3-glass p-8 md:p-10 relative overflow-hidden" style={{ borderRadius: 24 }}>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent" />

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
                  {/* Q1: Profile */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-[family-name:var(--font-montserrat)] font-black text-lg gradient-text">01</span>
                      <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-sm uppercase tracking-wide text-white">Votre profil ?</h3>
                    </div>
                    <div className="flex flex-col gap-3">
                      {PROFIL_OPTS.map(([key, label]) => (
                        <label key={key} className={`flex items-center gap-4 px-5 py-3.5 rounded-xl cursor-pointer transition-all duration-300 border ${currentProfile === key ? "bg-[var(--accent)]/10 border-[var(--accent)]/30 text-white" : "bg-white/[0.03] border-white/[0.06] text-[var(--text-secondary)] hover:border-white/[0.12]"}`}>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${currentProfile === key ? "border-[var(--accent)]" : "border-white/20"}`}>
                            {currentProfile === key && <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]" />}
                          </div>
                          <span className="text-sm font-medium">{label}</span>
                          <input type="radio" value={key} className="sr-only" disabled={isSubmitting} {...register("profile")} />
                        </label>
                      ))}
                    </div>
                    {errors.profile && <span className="text-[var(--accent)] text-xs mt-2 block">{errors.profile.message}</span>}
                  </div>

                  {/* Q2: Stage */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-[family-name:var(--font-montserrat)] font-black text-lg gradient-text">02</span>
                      <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-sm uppercase tracking-wide text-white">Étape du projet ?</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {STAGE_OPTS.map(([key, label]) => (
                        <label key={key} className={`flex items-center gap-3 px-4 py-3.5 rounded-xl cursor-pointer transition-all duration-300 border ${currentStage === key ? "bg-[var(--accent)]/10 border-[var(--accent)]/30 text-white" : "bg-white/[0.03] border-white/[0.06] text-[var(--text-secondary)] hover:border-white/[0.12]"}`}>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${currentStage === key ? "border-[var(--accent)]" : "border-white/20"}`}>
                            {currentStage === key && <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]" />}
                          </div>
                          <span className="text-sm">{label}</span>
                          <input type="radio" value={key} className="sr-only" disabled={isSubmitting} {...register("stage")} />
                        </label>
                      ))}
                    </div>
                    {errors.stage && <span className="text-[var(--accent)] text-xs mt-2 block">{errors.stage.message}</span>}
                  </div>

                  {/* Q3: Needs */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-[family-name:var(--font-montserrat)] font-black text-lg gradient-text">03</span>
                      <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-sm uppercase tracking-wide text-white">Accompagnement ?</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {NEEDS_OPTS.map(([key, label]) => {
                        const sel = currentNeeds.includes(key);
                        return (
                          <label key={key} className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 border ${sel ? "bg-[var(--accent)]/10 border-[var(--accent)]/30 text-white" : "bg-white/[0.03] border-white/[0.06] text-[var(--text-secondary)] hover:border-white/[0.12]"}`}>
                            <div className={`w-4 h-4 rounded flex-shrink-0 border flex items-center justify-center ${sel ? "bg-[var(--accent)] border-[var(--accent)]" : "border-white/[0.15]"}`}>
                              {sel && <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                            </div>
                            <span className="text-sm">{label}</span>
                            <input type="checkbox" value={key} className="sr-only" disabled={isSubmitting} {...register("needs")} />
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[var(--text-muted)] mb-2 block">Email *</label>
                      <input type="email" placeholder="votre@email.com" className={inputStyles} disabled={isSubmitting} autoComplete="email" {...register("email")} />
                      {errors.email && <span className="text-[var(--accent)] text-xs mt-1.5 block">{errors.email.message}</span>}
                    </div>
                    <div>
                      <label className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[var(--text-muted)] mb-2 block">Téléphone</label>
                      <input type="tel" placeholder="+33 6 00 00 00 00" className={inputStyles} disabled={isSubmitting} autoComplete="tel" {...register("phone")} />
                      {errors.phone && <span className="text-[var(--accent)] text-xs mt-1.5 block">{errors.phone.message}</span>}
                    </div>
                  </div>

                  {globalError && <p className="text-[var(--accent)] text-xs text-center">{globalError}</p>}

                  <button type="submit" disabled={isSubmitting || !isValid}
                    className="group relative w-full inline-flex items-center justify-center gap-3 px-9 py-[17px] text-[12px] font-bold tracking-[0.2em] uppercase text-white cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed">
                    <span className="absolute inset-0 bg-[var(--accent)] skew-x-[-12deg] transition-all duration-500 group-hover:bg-[var(--accent-light)] group-hover:scale-[1.02]" />
                    <Send size={14} className="relative z-10" />
                    <span className="relative z-10">{isSubmitting ? "Envoi en cours..." : "Recevoir mon plan personnalisé"}</span>
                  </button>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
