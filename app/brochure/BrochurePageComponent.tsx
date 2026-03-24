"use client";

import { useState } from "react";
import { useContactForm } from "@/hooks/useContactForm";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Download } from "lucide-react";

const brochureSchema = z.object({
  email: z.email("Veuillez entrer une adresse email valide."),
});

type FormValues = z.infer<typeof brochureSchema>;

const inputStyles =
  "w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-5 py-4 text-sm text-white placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)]/40 focus:bg-white/[0.06] transition-all duration-300";

export default function BrochurePageComponent() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [globalError, setGlobalError] = useState<string | null>(null);

  const {
    register, handleSubmit, reset,
    formState: { errors, isValid, isSubmitting: isRHFSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(brochureSchema), mode: "onChange", defaultValues: { email: "" } });

  const { submitForm: submitEmail, isSubmitting: isEmailSubmitting } = useContactForm({
    formId: "brochure-download",
    onError: (err) => console.error("Email sending failed:", err),
  });

  const triggerPDFDownload = () => {
    const a = document.createElement("a");
    a.href = "/pdfs/em-pitch-deck-fr-v1.pdf";
    a.download = "brochure.pdf";
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const onSubmit = async (data: FormValues) => {
    setGlobalError(null);
    try {
      submitEmail({
        Email: data.email,
        "Document demandé": "Brochure détaillée de l'offre",
        Source: "Site Web - Page Brochure",
        "Date de soumission": new Date().toLocaleString("fr-FR", { timeZone: "Africa/Casablanca", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" }),
      });

      const res = await fetch("/api/brochure-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email }),
      });
      if (!res.ok) throw new Error("DB error");
      setShowSuccess(true);
      triggerPDFDownload();
      setTimeout(() => reset(), 5000);
    } catch (err) {
      console.error("Submission error:", err);
      setGlobalError("Une erreur est survenue, veuillez réessayer plus tard.");
    }
  };

  const isSubmitting = isRHFSubmitting || isEmailSubmitting;

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center relative overflow-hidden">
      <div className="aurora-glow w-[600px] h-[500px] top-1/4 left-1/4 opacity-50" />

      <div className="max-w-lg w-full mx-auto px-6">
        {showSuccess ? (
          <div className="v3-glass p-12 text-center animate-[fadeUp_0.5s_ease-out_both]" style={{ borderRadius: 28 }}>
            <div className="w-16 h-16 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={28} className="text-[var(--accent)]" />
            </div>
            <h2 className="font-[family-name:var(--font-montserrat)] font-black text-2xl text-white uppercase">Brochure envoyée !</h2>
            <p className="text-[var(--text-secondary)] text-sm mt-4">Le téléchargement a commencé automatiquement.</p>
            <button onClick={triggerPDFDownload}
              className="group relative inline-flex items-center gap-3 px-7 py-[13px] text-[11px] font-bold tracking-[0.2em] uppercase text-white/60 cursor-pointer mt-8 transition-colors hover:text-white">
              <span className="absolute inset-0 border border-white/[0.1] skew-x-[-12deg] transition-all duration-500 group-hover:border-[var(--accent)]/30 group-hover:bg-white/[0.03]" />
              <Download size={14} className="relative z-10" />
              <span className="relative z-10">Relancer le téléchargement</span>
            </button>
          </div>
        ) : (
          <div className="animate-[fadeUp_0.8s_ease-out_both]">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="para-bars para-bars--sm"><div className="para-bar" /><div className="para-bar" /><div className="para-bar" /></div>
                <span className="v3-section-eyebrow-text">Brochure</span>
                <div className="para-bars para-bars--sm"><div className="para-bar" style={{ opacity: 0.3 }} /><div className="para-bar" style={{ opacity: 0.6 }} /><div className="para-bar" /></div>
              </div>
              <h1 className="v3-section-title" style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}>
                TÉLÉCHARGER LA <span className="gradient-text">BROCHURE</span>
              </h1>
              <p className="text-[var(--text-muted)] text-sm mt-4">
                Contenu, tarifs, délais — tous les détails de l&apos;accompagnement.
              </p>
            </div>

            {/* Form */}
            <div className="v3-glass p-8 relative overflow-hidden" style={{ borderRadius: 24 }}>
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent" />

              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                <div>
                  <label className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[var(--text-muted)] mb-2 block">Votre email *</label>
                  <input type="email" placeholder="votre@email.com" className={inputStyles} disabled={isSubmitting} autoComplete="email" {...register("email")} />
                  {errors.email && <span className="text-[var(--accent)] text-xs mt-1.5 block">{errors.email.message}</span>}
                </div>

                {globalError && <p className="text-[var(--accent)] text-xs text-center">{globalError}</p>}

                <button type="submit" disabled={isSubmitting || !isValid}
                  className="group relative w-full inline-flex items-center justify-center gap-3 px-9 py-[17px] text-[12px] font-bold tracking-[0.2em] uppercase text-white cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed mt-2">
                  <span className="absolute inset-0 bg-[var(--accent)] skew-x-[-12deg] transition-all duration-500 group-hover:bg-[var(--accent-light)] group-hover:scale-[1.02]" />
                  <Download size={14} className="relative z-10" />
                  <span className="relative z-10">{isSubmitting ? "Envoi..." : "Télécharger la brochure"}</span>
                </button>

                <p className="text-[10px] text-[var(--text-muted)] text-center mt-1">100% gratuit. Aucun spam.</p>
              </form>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
