"use client";

import { useState } from "react";
import { useContactForm } from "@/hooks/useContactForm";
import { useIsVisible } from "@/hooks/useIsVisible";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { parsePhoneToE164 } from "@/lib/phone-utils";
import { supabase } from "@/lib/supabase"; // Import your Supabase client

// 1. Define Zod Schema
const formSchema = z.object({
  firstName: z.string().min(1, "Le prénom est requis"),
  lastName: z.string().min(1, "Le nom est requis"),
  email: z.email("Format d'email invalide"),
  phone: z.string().refine((val) => {
    if (!val) return true; // Optional field
    return !!parsePhoneToE164(val);
  }, "Numéro invalide. Ex: 06 61... ou +33 6..."),
  message: z.string().min(1, "Le message ne peut pas être vide"),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [globalError, setGlobalError] = useState<string | null>(null);

  const { elementRef, isVisible } = useIsVisible({ threshold: 0.1 });

  const {
    register,
    handleSubmit,
    reset,
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
      // 1. Prepare Data
      const formattedPhone = parsePhoneToE164(data.phone);
      const currentUrl =
        typeof window !== "undefined" ? window.location.href : "";

      // 2. Submit directly to Supabase
      // Map frontend camelCase to your DB snake_case columns
      const { error } = await supabase.from("contact_form").insert([
        {
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          phone: formattedPhone || null,
          message: data.message,
          source_page: currentUrl,
        },
      ]);

      if (error) {
        console.error("Supabase insertion error:", error);
        throw new Error(error.message || "Erreur lors de l'enregistrement");
      }

      // 3. Trigger UI Success
      setShowSuccess(true);

      // 4. Send Email Notification (via existing hook)
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
    } catch (err: any) {
      console.error("Submission error:", err);
      setGlobalError("Une erreur est survenue, veuillez réessayer plus tard.");
    }
  };

  const isSubmitting = isRHFSubmitting || isEmailSubmitting;

  return (
    <section id="homecontact" className="cs-section">
      <div ref={elementRef} className={`cs-wrap ${isVisible ? "visible" : ""}`}>
        <header className="cs-lead">
          <h2 className="cs-title">UNE QUESTION, UN PROJET ? PARLONS-EN.</h2>
          <div className="cs-desc-wrapper">
            <p className="cs-desc">
              Vous avez une idée à concrétiser, un besoin précis ou simplement
              envie d'échanger ?
            </p>
            <p className="cs-desc">
              Notre équipe vous répond rapidement. Laissez-nous un message, on
              s'occupe du reste.
            </p>
          </div>
        </header>

        {showSuccess ? (
          <div className="cs-success show" role="status" aria-live="polite">
            <div className="cs-successIconBox">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <div className="cs-successBody">
              <h2 className="cs-successTitle">MERCI POUR VOTRE MESSAGE !</h2>
              <div className="cs-successText">
                Notre équipe vous recontactera dans les plus brefs délais.
              </div>
            </div>
          </div>
        ) : (
          <form className="cs-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="cs-row">
              <div
                className={`cs-group ${errors.firstName ? "cs-input-error" : ""}`}
              >
                <label htmlFor="firstName" className="cs-label">
                  Prénom
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="cs-input"
                  disabled={isSubmitting}
                  autoComplete="given-name"
                  {...register("firstName")}
                />
                {errors.firstName && (
                  <span className="cs-error-msg">
                    {errors.firstName.message}
                  </span>
                )}
              </div>
              <div
                className={`cs-group ${errors.lastName ? "cs-input-error" : ""}`}
              >
                <label htmlFor="lastName" className="cs-label">
                  Nom
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="cs-input"
                  disabled={isSubmitting}
                  autoComplete="family-name"
                  {...register("lastName")}
                />
                {errors.lastName && (
                  <span className="cs-error-msg">
                    {errors.lastName.message}
                  </span>
                )}
              </div>
            </div>

            <div className="cs-row">
              <div
                className={`cs-group ${errors.email ? "cs-input-error" : ""}`}
              >
                <label htmlFor="email" className="cs-label">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="cs-input"
                  disabled={isSubmitting}
                  autoComplete="email"
                  {...register("email")}
                />
                {errors.email && (
                  <span className="cs-error-msg">{errors.email.message}</span>
                )}
              </div>
              <div
                className={`cs-group ${errors.phone ? "cs-input-error" : ""}`}
              >
                <label htmlFor="phone" className="cs-label">
                  Téléphone
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="cs-input"
                  disabled={isSubmitting}
                  autoComplete="tel"
                  {...register("phone")}
                />
                {errors.phone && (
                  <span className="cs-error-msg">{errors.phone.message}</span>
                )}
              </div>
            </div>

            <div
              className={`cs-group ${errors.message ? "cs-input-error" : ""}`}
            >
              <label htmlFor="message" className="cs-label">
                Message
              </label>
              <textarea
                id="message"
                className="cs-input cs-textarea"
                disabled={isSubmitting}
                {...register("message")}
              />
              {errors.message && (
                <span className="cs-error-msg">{errors.message.message}</span>
              )}
            </div>

            {globalError && (
              <p className="cs-error">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: "8px", verticalAlign: "middle" }}
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
                {globalError}
              </p>
            )}

            <div className="contact__actions">
              <button
                type="submit"
                disabled={isSubmitting || !isValid}
                className="contact__submit"
              >
                {isSubmitting ? (
                  <>
                    <span className="contact__spinner" />
                    Envoi en cours...
                  </>
                ) : (
                  "Envoyer mon message"
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
