"use client";

import { useState } from "react";
import { useContactForm } from "@/hooks/useContactForm";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { parsePhoneToE164 } from "@/lib/phone-utils";
import { CheckCircle, Send, ChevronDown } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, "Le nom est requis."),
  email: z.email("Format d'email invalide."),
  phone: z.string().refine((val) => {
    if (!val) return true;
    return !!parsePhoneToE164(val);
  }, "Numéro invalide. Ex: 06 61... ou +33 6..."),
  services: z.array(z.string()).optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const SERVICES_OPTS: Array<[string, string]> = [
  ["site", "Site web"],
  ["seo", "SEO"],
  ["content", "Contenu / blog"],
  ["brand", "Branding / identité"],
  ["ads", "Publicité en ligne"],
  ["other", "Autre"],
];

const inputStyles =
  "w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-5 py-4 text-sm text-white placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)]/40 focus:bg-white/[0.06] transition-all duration-300";

export default function DevisComponent() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [globalError, setGlobalError] = useState<string | null>(null);

  const {
    register, handleSubmit, reset, watch,
    formState: { errors, isSubmitting: isRHFSubmitting, isValid },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: { fullName: "", email: "", phone: "", services: [], message: "" },
  });

  const selectedServices = watch("services") || [];

  const { submitForm: submitEmail, isSubmitting: isEmailSubmitting } = useContactForm({
    formId: "custom-quote",
    onError: (err) => console.error("Email sending failed:", err),
  });

  const isSubmitting = isRHFSubmitting || isEmailSubmitting;

  const getServicesLabels = (keys: string[] | undefined) => {
    if (!keys || keys.length === 0) return "Aucun sélectionné";
    return keys.map((k) => SERVICES_OPTS.find(([o]) => o === k)?.[1] || k).join(", ");
  };

  const onSubmit = async (data: FormValues) => {
    setGlobalError(null);
    try {
      const formattedPhone = parsePhoneToE164(data.phone);
      submitEmail({
        "Nom complet": data.fullName, Email: data.email,
        Téléphone: formattedPhone || "Non renseigné",
        "Services demandés": getServicesLabels(data.services),
        Message: data.message || "Aucun message",
        Source: "Demande de devis sur-mesure",
        "Date de soumission": new Date().toLocaleString("fr-FR", { timeZone: "Africa/Casablanca", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" }),
      });

      const res = await fetch("/api/custom-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.fullName,
          email: data.email,
          phone: formattedPhone || null,
          services: data.services || [],
          message: data.message || null,
        }),
      });
      if (!res.ok) throw new Error("DB error");
      setShowSuccess(true);
      setTimeout(() => { reset(); setServicesOpen(false); }, 5000);
    } catch (err) {
      console.error("Submission error:", err);
      setGlobalError("Une erreur est survenue, veuillez réessayer plus tard.");
    }
  };

  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <div className="aurora-glow w-[600px] h-[500px] top-1/4 right-0 opacity-50 fixed" />

      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12 pt-36 pb-24">
        {showSuccess ? (
          <div className="max-w-lg mx-auto text-center animate-[fadeUp_0.5s_ease-out_both]">
            <div className="v3-glass p-12" style={{ borderRadius: 28 }}>
              <div className="w-16 h-16 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={28} className="text-[var(--accent)]" />
              </div>
              <h2 className="font-[family-name:var(--font-montserrat)] font-black text-2xl text-white uppercase">Demande reçue !</h2>
              <p className="text-[var(--text-secondary)] text-sm mt-4">Notre équipe analyse votre projet. Offre personnalisée sous 48h.</p>
            </div>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="text-center mb-14 animate-[fadeUp_0.8s_ease-out_both]">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="para-bars para-bars--sm"><div className="para-bar" /><div className="para-bar" /><div className="para-bar" /></div>
                <span className="v3-section-eyebrow-text">Devis sur-mesure</span>
                <div className="para-bars para-bars--sm"><div className="para-bar" style={{ opacity: 0.3 }} /><div className="para-bar" style={{ opacity: 0.6 }} /><div className="para-bar" /></div>
              </div>
              <h1 className="v3-section-title" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}>
                DEMANDE DE <span className="gradient-text">DEVIS</span>
              </h1>
              <p className="text-[var(--text-muted)] text-sm mt-4 max-w-lg mx-auto">
                Parlez-nous de vos besoins et nous vous répondrons avec une offre adaptée sous 48h.
              </p>
            </div>

            {/* Form */}
            <div className="max-w-2xl mx-auto animate-[fadeUp_0.8s_ease-out_0.2s_both]">
              <div className="v3-glass p-8 md:p-10 relative overflow-hidden" style={{ borderRadius: 24 }}>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent" />

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                  <div>
                    <label className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[var(--text-muted)] mb-2 block">Prénom & Nom *</label>
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
                      <input type="tel" placeholder="+212 6 00 00 00 00" className={inputStyles} disabled={isSubmitting} {...register("phone")} />
                      {errors.phone && <span className="text-[var(--accent)] text-xs mt-1.5 block">{errors.phone.message}</span>}
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <label className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[var(--text-muted)] mb-2 block">Services demandés</label>
                    <button type="button" onClick={() => setServicesOpen(!servicesOpen)} disabled={isSubmitting}
                      className={`${inputStyles} text-left flex items-center justify-between cursor-pointer`}>
                      <span className={selectedServices.length > 0 ? "text-white" : "text-[var(--text-muted)]"}>
                        {selectedServices.length > 0 ? `${selectedServices.length} service(s)` : "Sélectionnez vos services"}
                      </span>
                      <ChevronDown size={16} className={`text-[var(--text-muted)] transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
                    </button>

                    <div className={`grid grid-cols-2 gap-3 overflow-hidden transition-all duration-300 ${servicesOpen ? "mt-4 max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}>
                      {SERVICES_OPTS.map(([key, label]) => {
                        const sel = selectedServices.includes(key);
                        return (
                          <label key={key} className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 border ${sel ? "bg-[var(--accent)]/10 border-[var(--accent)]/30 text-white" : "bg-white/[0.03] border-white/[0.06] text-[var(--text-secondary)] hover:border-white/[0.12]"}`}>
                            <div className={`w-4 h-4 rounded flex-shrink-0 border flex items-center justify-center ${sel ? "bg-[var(--accent)] border-[var(--accent)]" : "border-white/[0.15]"}`}>
                              {sel && <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                            </div>
                            <span className="text-sm">{label}</span>
                            <input type="checkbox" value={key} className="sr-only" disabled={isSubmitting} {...register("services")} />
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[var(--text-muted)] mb-2 block">Message (optionnel)</label>
                    <textarea rows={4} placeholder="Décrivez votre projet..." className={`${inputStyles} resize-none`} disabled={isSubmitting} {...register("message")} />
                  </div>

                  {globalError && <p className="text-[var(--accent)] text-xs text-center">{globalError}</p>}

                  <button type="submit" disabled={isSubmitting || !isValid}
                    className="group relative w-full inline-flex items-center justify-center gap-3 px-9 py-[17px] text-[12px] font-bold tracking-[0.2em] uppercase text-white cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed mt-2">
                    <span className="absolute inset-0 bg-[var(--accent)] skew-x-[-12deg] transition-all duration-500 group-hover:bg-[var(--accent-light)] group-hover:scale-[1.02]" />
                    <Send size={14} className="relative z-10" />
                    <span className="relative z-10">{isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}</span>
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
