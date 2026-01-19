"use client";

import { useState } from "react";
import { useContactForm } from "@/hooks/useContactForm";
import { useIsVisible } from "@/hooks/useIsVisible";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  // Animation hook: Trigger when 10% of element is visible
  const { elementRef, isVisible } = useIsVisible({ threshold: 0.1 });

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
      {/* Attach ref and visible class here */}
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

        {isSuccess ? (
          <div className="cs-success show" role="status" aria-live="polite">
            <div className="cs-successIconBox">
              {/* Icon: Simple Checkmark with Stroke */}
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
