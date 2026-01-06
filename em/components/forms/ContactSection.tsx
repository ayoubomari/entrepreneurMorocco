"use client";

import { useState } from "react";
import { useContactForm } from "@/hooks/useContactForm";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const { submitForm, isSubmitting, isSuccess, error } = useContactForm({
    formId: "contact-form",
    onSuccess: () => {
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      }, 3000);
    },
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const phoneRegex = /^[\d\s\-\(\)\+]*$/;
    if (phoneRegex.test(value) || value === "") {
      setFormData((prev) => ({ ...prev, phone: value }));
    }
  };

  const isFormValid =
    formData.firstName.trim() &&
    formData.lastName.trim() &&
    formData.email.trim() &&
    formData.message.trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    await submitForm({
      Prénom: formData.firstName,
      Nom: formData.lastName,
      Email: formData.email,
      Téléphone: formData.phone || "Non renseigné",
      Message: formData.message,
      "Page source":
        typeof window !== "undefined"
          ? window.location.href
          : "Contact Section",
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

  return (
    <section id="homecontact" className="cs-section">
      <div className="cs-wrap">
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

        {isSuccess ? (
          <div className="cs-success show" role="status" aria-live="polite">
            <span className="cs-successIcon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path
                  fill="currentColor"
                  d="M9.00039 16.2002L4.80039 12.0002L3.40039 13.4002L9.00039 19.0002L21.0004 7.0002L19.6004 5.6002L9.00039 16.2002Z"
                />
              </svg>
            </span>
            <div className="cs-successBody">
              <div className="cs-successTitle">Merci pour votre message !</div>
              <div className="cs-successText">
                Notre équipe vous recontactera dans les plus brefs délais.
              </div>
            </div>
          </div>
        ) : (
          <form className="cs-form" onSubmit={handleSubmit}>
            <div className="cs-row">
              <div className="cs-group">
                <label htmlFor="firstName" className="cs-label">
                  Prénom
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  className="cs-input"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  autoComplete="given-name"
                />
              </div>
              <div className="cs-group">
                <label htmlFor="lastName" className="cs-label">
                  Nom
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  className="cs-input"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  autoComplete="family-name"
                />
              </div>
            </div>

            <div className="cs-row">
              <div className="cs-group">
                <label htmlFor="email" className="cs-label">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="cs-input"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  autoComplete="email"
                />
              </div>
              <div className="cs-group">
                <label htmlFor="phone" className="cs-label">
                  Téléphone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="cs-input"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  disabled={isSubmitting}
                  autoComplete="tel"
                  placeholder="0612345678"
                  pattern="[\d\s\-\(\)\+]*"
                  inputMode="numeric"
                />
              </div>
            </div>

            <div className="cs-group">
              <label htmlFor="message" className="cs-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="cs-input cs-textarea"
                value={formData.message}
                onChange={handleInputChange}
                disabled={isSubmitting}
                placeholder="Décrivez votre projet, vos besoins ou vos questions..."
              />
            </div>

            {error && (
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
                {error}
              </p>
            )}

            <div className="contact__actions">
              <button
                type="submit"
                disabled={isSubmitting || !isFormValid}
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
