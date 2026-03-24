"use client";

import { useState } from "react";
import { useContactForm } from "@/hooks/useContactForm";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download, CheckCircle, ArrowRight, BookOpen, Shield, Zap, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import { fadeUp, staggerContainer } from "@/lib/animations";

const formSchema = z.object({
  firstName: z.string().min(2, "Veuillez entrer votre prénom."),
  email: z.string().email("Format d'email invalide."),
});

type FormValues = z.infer<typeof formSchema>;

const BENEFITS = [
  { icon: Shield, text: "Les pièges juridiques à éviter absolument", accent: "from-blue-500/20 to-blue-600/5" },
  { icon: Zap, text: "Les erreurs fiscales qui coûtent cher", accent: "from-amber-500/20 to-amber-600/5" },
  { icon: BookOpen, text: "La méthode pour démarrer sereinement", accent: "from-green-500/20 to-green-600/5" },
];

const GuideDownloadForm = () => {
  const [downloadTriggered, setDownloadTriggered] = useState(false);
  const [globalError, setGlobalError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting: isRHFSubmitting, isValid },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: { firstName: "", email: "" },
  });

  const {
    submitForm: submitEmail,
    isSubmitting: isEmailSubmitting,
    error: emailError,
  } = useContactForm({
    formId: "guide-download",
    onSuccess: () => console.log("Notification email sent"),
  });

  const triggerPDFDownload = () => {
    const link = document.createElement("a");
    link.href = "/pdfs/guide-7-erreurs-entrepreneur-maroc.pdf";
    link.download = "guide-7-erreurs-entrepreneur-maroc.pdf";
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    setTimeout(() => document.body.removeChild(link), 100);
  };

  const onSubmit = async (data: FormValues) => {
    setGlobalError(null);
    triggerPDFDownload();
    setDownloadTriggered(true);

    try {
      await submitEmail({
        Prénom: data.firstName,
        Email: data.email,
        "Guide demandé": "7 Erreurs à Éviter - Entrepreneur Maroc",
        "Date de téléchargement": new Date().toLocaleString("fr-FR", {
          timeZone: "Africa/Casablanca",
        }),
        Source: "Site Web - Page Guide",
      });

      const dbRes = await fetch("/api/guide-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.firstName,
          email: data.email,
          guideName: "7 Erreurs à Éviter - Entrepreneur Maroc",
          source: "Site Web - Page Guide",
        }),
      });
      if (!dbRes.ok) console.error("DB save failed");
      reset();
    } catch (err) {
      console.error("Submission workflow failed:", err);
      setGlobalError("Une erreur est survenue lors de l'enregistrement.");
    }
  };

  const isSubmitting = isRHFSubmitting || isEmailSubmitting;

  const inputStyles =
    "w-full bg-white/[0.05] border border-white/[0.08] rounded-xl px-5 py-4 text-sm text-white placeholder:text-[var(--text-muted)]/60 focus:outline-none focus:border-[var(--accent)]/40 focus:bg-white/[0.07] transition-all duration-300";

  return (
    <section className="relative py-24 md:py-32 overflow-hidden" id="guide">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--bg-elevated)]" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full bg-[var(--accent)]/[0.04] blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/[0.03] blur-[120px]" />
      </div>

      <Container className="relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {/* Section header */}
          <motion.div variants={fadeUp} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-medium tracking-[0.15em] uppercase border border-[var(--accent)]/20 text-[var(--accent-light)] bg-[var(--accent)]/[0.06] mb-6">
              <Sparkles size={12} />
              Ressource gratuite
            </span>
            <h2
              className="font-[family-name:var(--font-montserrat)] font-extrabold text-[var(--text-primary)] leading-[1.1] tracking-tight max-w-3xl mx-auto"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
            >
              Évitez les erreurs qui font échouer{" "}
              <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] bg-clip-text text-transparent">
                90% des projets
              </span>
            </h2>
          </motion.div>

          {/* Main card */}
          <div className="rounded-3xl border border-[var(--border)] bg-gradient-to-br from-white/[0.04] via-transparent to-white/[0.02] overflow-hidden shadow-2xl shadow-black/20">
            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* ── Left: Content + Image ── */}
              <div className="p-10 md:p-14 lg:p-16 flex flex-col justify-center">
                <motion.div variants={fadeUp}>
                  <h3
                    className="font-[family-name:var(--font-montserrat)] font-bold text-[var(--text-primary)] leading-[1.2]"
                    style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)" }}
                  >
                    Les 7 erreurs fatales de l&apos;entrepreneur au Maroc
                  </h3>

                  <p className="mt-4 text-[var(--text-secondary)] text-[15px] leading-relaxed max-w-md">
                    Un guide complet pour éviter les pièges et démarrer votre projet sur de bonnes bases.
                  </p>
                </motion.div>

                {/* Benefits list — redesigned */}
                <motion.ul variants={fadeUp} className="mt-8 space-y-3">
                  {BENEFITS.map((b) => (
                    <li key={b.text} className={`flex items-center gap-4 p-3.5 rounded-xl bg-gradient-to-r ${b.accent} border border-white/[0.05]`}>
                      <span className="w-9 h-9 rounded-lg bg-white/[0.08] flex items-center justify-center shrink-0">
                        <b.icon size={16} className="text-[var(--accent-light)]" />
                      </span>
                      <span className="text-sm text-[var(--text-primary)] font-medium">
                        {b.text}
                      </span>
                    </li>
                  ))}
                </motion.ul>

                {/* Book image */}
                <motion.div variants={fadeUp} className="mt-10 flex justify-center lg:justify-start">
                  <div className="relative group">
                    <Image
                      width={240}
                      height={340}
                      src="/images/book2-1.webp"
                      alt="Guide PDF - 7 Erreurs à Éviter"
                      className="rounded-xl shadow-2xl shadow-black/50 group-hover:scale-[1.03] transition-transform duration-500"
                      draggable={false}
                      onContextMenu={(e) => e.preventDefault()}
                    />
                    {/* Glow */}
                    <div className="absolute -inset-8 bg-[var(--accent)]/[0.06] rounded-full blur-[60px] -z-10" />
                    {/* Badge */}
                    <div className="absolute -top-3 -right-3 bg-[var(--accent)] text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-lg shadow-lg shadow-[var(--accent)]/30">
                      Gratuit
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* ── Right: Form ── */}
              <div className="p-10 md:p-14 lg:p-16 bg-white/[0.02] border-t lg:border-t-0 lg:border-l border-[var(--border)] flex items-center">
                <motion.div variants={fadeUp} className="w-full max-w-md mx-auto">
                  {downloadTriggered ? (
                    <div className="text-center py-8">
                      <div className="w-20 h-20 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={36} className="text-green-400" />
                      </div>
                      <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl text-[var(--text-primary)] mb-3">
                        Guide téléchargé !
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] mb-8 leading-relaxed">
                        Le téléchargement a commencé automatiquement.
                        {(emailError || globalError) && (
                          <span className="block text-[var(--accent)] text-xs mt-2">
                            Note: Un problème technique est survenu, mais votre PDF est prêt.
                          </span>
                        )}
                      </p>
                      <button
                        onClick={triggerPDFDownload}
                        className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-[var(--accent)] rounded-xl hover:bg-[var(--accent-light)] hover:shadow-[0_8px_30px_rgba(220,38,38,0.3)] transition-all duration-300 cursor-pointer"
                      >
                        <Download size={16} />
                        Télécharger à nouveau
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="text-center mb-8">
                        <div className="w-14 h-14 rounded-2xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center mx-auto mb-5">
                          <Download size={24} className="text-[var(--accent-light)]" />
                        </div>
                        <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl text-[var(--text-primary)] mb-2">
                          Téléchargez le guide
                        </h3>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                          Entrez vos coordonnées et recevez le PDF instantanément.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <div>
                          <label htmlFor="guide-firstName" className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[var(--text-muted)] mb-2 block">
                            Prénom
                          </label>
                          <input
                            id="guide-firstName"
                            type="text"
                            placeholder="Votre prénom"
                            disabled={isSubmitting}
                            className={inputStyles}
                            autoComplete="given-name"
                            {...register("firstName")}
                          />
                          {errors.firstName && (
                            <span className="text-[var(--accent)] text-xs mt-1.5 block">
                              {errors.firstName.message}
                            </span>
                          )}
                        </div>

                        <div>
                          <label htmlFor="guide-email" className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[var(--text-muted)] mb-2 block">
                            Email
                          </label>
                          <input
                            id="guide-email"
                            type="email"
                            placeholder="votre@email.com"
                            disabled={isSubmitting}
                            className={inputStyles}
                            autoComplete="email"
                            {...register("email")}
                          />
                          {errors.email && (
                            <span className="text-[var(--accent)] text-xs mt-1.5 block">
                              {errors.email.message}
                            </span>
                          )}
                        </div>

                        {globalError && (
                          <p className="text-[var(--accent)] text-xs">{globalError}</p>
                        )}

                        <motion.button
                          type="submit"
                          disabled={isSubmitting || !isValid}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full inline-flex items-center justify-center gap-3 px-8 py-4.5 mt-2 text-[14px] font-bold text-white bg-[var(--accent)] rounded-xl hover:bg-[var(--accent-light)] hover:shadow-[0_8px_40px_rgba(220,38,38,0.35)] transition-all duration-500 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed group"
                        >
                          <Download size={18} />
                          {isSubmitting ? "Téléchargement..." : "Télécharger gratuitement"}
                          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </motion.button>

                        <div className="flex items-center justify-center gap-4 mt-3 text-[11px] text-[var(--text-muted)]">
                          <span className="flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-green-500" />
                            100% gratuit
                          </span>
                          <span className="flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-green-500" />
                            Aucun spam
                          </span>
                          <span className="flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-green-500" />
                            Confidentiel
                          </span>
                        </div>
                      </form>
                    </>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default GuideDownloadForm;
