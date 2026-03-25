"use client";

import { useState } from "react";
import { useContactForm } from "@/hooks/useContactForm";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { parsePhoneToE164 } from "@/lib/phone-utils";
import {
  Send,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

const formSchema = z.object({
  firstName: z.string().min(1, "Le prénom est requis"),
  lastName: z.string().min(1, "Le nom est requis"),
  email: z.email("Format d'email invalide"),
  phone: z.string().refine((val) => {
    if (!val) return true;
    return !!parsePhoneToE164(val);
  }, "Numéro invalide. Ex: 06 61... ou +33 6..."),
  message: z.string().min(1, "Le message ne peut pas être vide"),
});

type FormValues = z.infer<typeof formSchema>;

const inputStyles =
  "w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-5 py-4 text-sm text-white placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)]/40 focus:bg-white/[0.06] focus:shadow-[0_0_20px_rgba(220,38,38,0.08)] transition-all duration-300";

const CONTACT_INFO = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+33 6 44 66 02 52",
    href: "https://wa.me/33644660252",
    color: "from-green-500/20 to-green-600/10",
    iconColor: "text-green-400",
  },
  {
    icon: Mail,
    label: "Email",
    value: "salam@entrepreneursmorocco.com",
    href: "mailto:salam@entrepreneursmorocco.com",
    color: "from-blue-500/20 to-blue-600/10",
    iconColor: "text-blue-400",
  },
  {
    icon: MapPin,
    label: "Bureau",
    value: "Gueliz, Marrakech",
    href: "https://maps.google.com/?q=Immeuble+STAVROULA+Gueliz+Marrakech+Maroc",
    color: "from-[var(--accent)]/20 to-[var(--accent)]/10",
    iconColor: "text-[var(--accent-light)]",
  },
  {
    icon: Clock,
    label: "Réponse",
    value: "Sous 24 à 48h",
    color: "from-amber-500/20 to-amber-600/10",
    iconColor: "text-amber-400",
  },
];

const ContactSection = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [globalError, setGlobalError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting: isRHFSubmitting, isValid },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const { submitForm: submitEmail, isSubmitting: isEmailSubmitting } =
    useContactForm({
      formId: "contact-form",
      onError: (err) => console.error("Email sending failed:", err),
    });

  const onSubmit = async (data: FormValues) => {
    setGlobalError(null);
    try {
      const formattedPhone = parsePhoneToE164(data.phone);
      const currentUrl =
        typeof window !== "undefined" ? window.location.href : "";

      submitEmail({
        Prénom: data.firstName,
        Nom: data.lastName,
        Email: data.email,
        Téléphone: formattedPhone || "Non renseigné",
        Message: data.message,
        "Page source": currentUrl || "Contact Section",
        "Date de soumission": new Date().toLocaleString("fr-FR", {
          timeZone: "Africa/Casablanca",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      });

      const res = await fetch("/api/contact-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: formattedPhone || null,
          message: data.message,
          sourcePage: currentUrl,
        }),
      });
      if (!res.ok) throw new Error("Erreur lors de l'enregistrement");

      setShowSuccess(true);
    } catch (err) {
      console.error("Submission error:", err);
      setGlobalError("Une erreur est survenue, veuillez réessayer plus tard.");
    }
  };

  const isSubmitting = isRHFSubmitting || isEmailSubmitting;

  return (
    <section
      id="homecontact"
      className="v3-section relative bg-[var(--bg-primary)] v3-1-section"
    >
      {/* Aurora glows */}
      <div
        aria-hidden="true"
        className="aurora-glow w-[500px] h-[500px] top-1/4 right-0 opacity-50"
      />
      <div
        aria-hidden="true"
        className="aurora-glow w-[400px] h-[400px] bottom-0 left-1/4 opacity-30"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 md:pb-30">
        {/* 2-column layout: info left + form right */}
        <div className="grid grid-cols-1 lg:grid-cols-[480px,1fr] gap-12 lg:gap-20">
          {/* LEFT — Contact info */}
          <div className="lg:sticky lg:top-32 lg:self-start animate-[fadeUp_0.8s_ease-out_both]">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="para-bars para-bars--sm">
                <div className="para-bar" />
                <div className="para-bar" />
                <div className="para-bar" />
              </div>
              <span className="v3-section-eyebrow-text">Contact</span>
            </div>

            {/* Title */}
            <h2
              className="v3-section-title"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              UNE QUESTION, UN PROJET ?{" "}
              <span className="gradient-text">PARLONS-EN.</span>
            </h2>

            {/* Tagline */}
            <p className="font-[family-name:var(--font-playfair)] italic text-white/50 text-base mt-4">
              &ldquo;Votre projet mérite une réponse personnalisée.&rdquo;
            </p>

            <p className="text-[var(--text-secondary)] text-sm mt-4 leading-relaxed">
              Remplissez le formulaire ou contactez-nous directement. Notre
              équipe vous répond sous 48h.
            </p>

            {/* Contact info cards — redesigned */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {CONTACT_INFO.map((info) => {
                const Icon = info.icon;
                const Tag = info.href ? "a" : "div";
                const linkProps = info.href
                  ? {
                      href: info.href,
                      target: info.href.startsWith("http")
                        ? "_blank"
                        : undefined,
                      rel: info.href.startsWith("http")
                        ? "noreferrer noopener"
                        : undefined,
                    }
                  : {};
                return (
                  <Tag
                    key={info.label}
                    {...linkProps}
                    className={`rounded-2xl border border-[var(--border)] bg-gradient-to-br ${info.color} p-5 group hover:border-white/[0.12] hover:scale-[1.02] transition-all duration-300 ${info.href ? "cursor-pointer" : ""}`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon size={18} className={info.iconColor} />
                    </div>
                    <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-[var(--text-muted)] mb-1.5">
                      {info.label}
                    </p>
                    <p className="text-sm text-[var(--text-primary)] font-semibold leading-snug flex items-center gap-1">
                      {/* On ajoute break-all ici pour couper l'email si nécessaire */}
                      <span className="break-all">{info.value}</span>

                      {info.href && (
                        <ArrowUpRight
                          size={12}
                          className="opacity-0 group-hover:opacity-70 transition-opacity duration-300 shrink-0"
                        />
                      )}
                    </p>
                  </Tag>
                );
              })}
            </div>

            {/* Decorative parallelogram bars */}
            <div className="hidden lg:flex gap-[4px] mt-12">
              <div className="w-12 h-[2px] bg-[var(--accent)]/20 skew-x-[-12deg]" />
              <div className="w-8 h-[2px] bg-[var(--accent)]/10 skew-x-[-12deg]" />
              <div className="w-4 h-[2px] bg-[var(--accent)]/5 skew-x-[-12deg]" />
            </div>
          </div>

          {/* RIGHT — Form card */}
          <div className="animate-[fadeUp_0.8s_ease-out_0.2s_both] md:mt-8">
            <div
              className="v3-glass p-8 md:p-10 relative overflow-hidden"
              style={{ borderRadius: 24 }}
            >
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent" />

              {showSuccess ? (
                <div className="text-center py-12 animate-[fadeUp_0.5s_ease-out_both]">
                  <div className="w-16 h-16 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={28} className="text-[var(--accent)]" />
                  </div>
                  <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl text-white mb-2">
                    Message envoyé !
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Notre équipe vous recontactera dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-5"
                >
                  {/* Form title */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="para-bars para-bars--sm">
                      <div className="para-bar" />
                      <div className="para-bar" />
                    </div>
                    <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-sm uppercase tracking-[0.15em] text-white">
                      Envoyez-nous un message
                    </h3>
                  </div>

                  {/* Name row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[var(--text-muted)] mb-2 block"
                      >
                        Prénom
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        placeholder="Votre prénom"
                        className={inputStyles}
                        disabled={isSubmitting}
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
                      <label
                        htmlFor="lastName"
                        className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[var(--text-muted)] mb-2 block"
                      >
                        Nom
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        placeholder="Votre nom"
                        className={inputStyles}
                        disabled={isSubmitting}
                        autoComplete="family-name"
                        {...register("lastName")}
                      />
                      {errors.lastName && (
                        <span className="text-[var(--accent)] text-xs mt-1.5 block">
                          {errors.lastName.message}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Email + Phone row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[var(--text-muted)] mb-2 block"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="votre@email.com"
                        className={inputStyles}
                        disabled={isSubmitting}
                        autoComplete="email"
                        {...register("email")}
                      />
                      {errors.email && (
                        <span className="text-[var(--accent)] text-xs mt-1.5 block">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[var(--text-muted)] mb-2 block"
                      >
                        Téléphone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+33 6 00 00 00 00"
                        className={inputStyles}
                        disabled={isSubmitting}
                        autoComplete="tel"
                        {...register("phone")}
                      />
                      {errors.phone && (
                        <span className="text-[var(--accent)] text-xs mt-1.5 block">
                          {errors.phone.message}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[var(--text-muted)] mb-2 block"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Décrivez votre projet ou posez votre question..."
                      className={`${inputStyles} resize-none`}
                      disabled={isSubmitting}
                      {...register("message")}
                    />
                    {errors.message && (
                      <span className="text-[var(--accent)] text-xs mt-1.5 block">
                        {errors.message.message}
                      </span>
                    )}
                  </div>

                  {globalError && (
                    <p className="text-[var(--accent)] text-xs text-center">
                      {globalError}
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting || !isValid}
                    className="group relative w-full inline-flex items-center justify-center gap-3 px-9 py-[17px] text-[12px] font-bold tracking-[0.2em] uppercase text-white cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed mt-2"
                  >
                    <span className="absolute inset-0 bg-[var(--accent)] skew-x-[-12deg] transition-all duration-500 group-hover:bg-[var(--accent-light)] group-hover:scale-[1.02] group-hover:shadow-[0_0_50px_rgba(220,38,38,0.35)]" />
                    <Send size={14} className="relative z-10" />
                    <span className="relative z-10">
                      {isSubmitting
                        ? "Envoi en cours..."
                        : "Envoyer mon message"}
                    </span>
                  </button>

                  <p className="text-[10px] text-[var(--text-muted)] text-center mt-1">
                    Nous ne partageons jamais vos données. Réponse garantie sous
                    48h.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
