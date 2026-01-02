'use client';

import { useState } from 'react';
import { useContactForm } from '@/hooks/useContactForm';
import './devis.css';

export default function DevisPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [services, setServices] = useState<string[]>([]);
  const [servicesOpen, setServicesOpen] = useState(false);

  const { submitForm, isSubmitting, isSuccess, error } = useContactForm({
    formId: 'custom-quote',
    onSuccess: () => {
      // Reset form after 3 seconds
      setTimeout(() => {
        setFullName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setServices([]);
        setServicesOpen(false);
      }, 3000);
    }
  });

  const toggleService = (key: string) =>
    setServices((arr) => (arr.includes(key) ? arr.filter((k) => k !== key) : [...arr, key]));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;

    // Convert services to readable format
    const getServicesLabels = (keys: string[]) => {
      const map: Record<string, string> = {
        'site': 'Site web',
        'seo': 'SEO',
        'content': 'Contenu / blog',
        'brand': 'Branding / identité',
        'ads': 'Publicité en ligne',
        'other': 'Autre'
      };
      return keys.length > 0 ? keys.map(k => map[k] || k).join(', ') : 'Aucun service sélectionné';
    };

    await submitForm({
      'Nom complet': fullName,
      'Email': email,
      'Téléphone': phone || 'Non renseigné',
      'Services demandés': getServicesLabels(services),
      'Message': message || 'Aucun message',
      'Date de soumission': new Date().toLocaleString('fr-FR', { 
        timeZone: 'Africa/Casablanca',
        year: 'numeric',
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      'Source': 'Demande de devis sur-mesure'
    });
  };

  const options: Array<[string, string]> = [
    ['site', 'Site web'],
    ['seo', 'SEO'],
    ['content', 'Contenu / blog'],
    ['brand', 'Branding / identité'],
    ['ads', 'Publicité en ligne'],
    ['other', 'Autre'],
  ];

  // Show success message if form was submitted successfully
  if (isSuccess) {
    return (
      <main className="qf">
        <div className="qf__wrap">
          <div className="qf__success" style={{
            background: '#1a1a1a',
            border: '2px solid #ef4444',
            borderRadius: '8px',
            padding: '40px',
            textAlign: 'center',
            animation: 'successFadeIn 0.5s ease-out',
          }}>
            {/* Success icon */}
            <div style={{
              width: '64px',
              height: '64px',
              background: '#ef4444',
              borderRadius: '50%',
              margin: '0 auto 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'iconScale 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.2s both'
            }}>
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#ffffff" 
                strokeWidth="3"
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>

            <h2 style={{
              color: '#fff',
              fontSize: '28px',
              fontWeight: '700',
              margin: '0 0 16px',
              animation: 'textFadeIn 0.5s ease-out 0.3s both'
            }}>
              Parfait ! Votre demande de devis a été envoyée
            </h2>
            
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '18px',
              margin: '0',
              lineHeight: '1.5',
              animation: 'textFadeIn 0.5s ease-out 0.4s both'
            }}>
              Notre équipe analyse votre demande et vous enverra<br />
              une offre personnalisée sous 48h.
            </p>

            {/* CSS Animations */}
            <style jsx>{`
              @keyframes successFadeIn {
                from {
                  opacity: 0;
                  transform: translateY(20px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }

              @keyframes iconScale {
                from {
                  opacity: 0;
                  transform: scale(0);
                }
                to {
                  opacity: 1;
                  transform: scale(1);
                }
              }

              @keyframes textFadeIn {
                from {
                  opacity: 0;
                  transform: translateY(10px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}</style>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="qf">
      <div className="qf__wrap">
        <header className="qf__head">
          <h1 className="qf__title">DEMANDE DE DEVIS SUR-MESURE</h1>
          <p className="qf__lead">
            Parlez-nous de vos besoins et nous vous répondrons avec une offre adaptée sous 48h.
          </p>
        </header>

        <form className="qf__form" onSubmit={onSubmit}>
          {/* Name */}
          <div className="qf__field">
            <label htmlFor="name" className="qf__label">PRÉNOM & NOM :</label>
            <input
              id="name"
              className="qf__input"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              disabled={isSubmitting}
              required
              placeholder=""
            />
          </div>

          {/* Email */}
          <div className="qf__field">
            <label htmlFor="email" className="qf__label">EMAIL :</label>
            <input
              id="email"
              className="qf__input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
              required
              placeholder=""
            />
          </div>

          {/* Phone */}
          <div className="qf__field">
            <label htmlFor="phone" className="qf__label">TÉLÉPHONE :</label>
            <input
              id="phone"
              className="qf__input"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={isSubmitting}
              placeholder=""
            />
          </div>

          {/* Services – trigger + expanding panel (pushes content below) */}
          <div className="qf__field">
            <span className="qf__label">SERVICES DEMANDÉS (CASE À COCHER) :</span>

            <button
              type="button"
              className="qf__select"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((v) => !v)}
              disabled={isSubmitting}
            >
              Sélectionner…
              <span className={`qf__caret ${servicesOpen ? 'is-open' : ''}`} />
            </button>

            <div className={`qf__menu ${servicesOpen ? 'is-open' : ''}`} aria-hidden={!servicesOpen}>
              <div className="qf__menuGrid">
                {options.map(([key, label]) => (
                  <label key={key} className="qf__option">
                    <input
                      type="checkbox"
                      className="qf__check"
                      checked={services.includes(key)}
                      onChange={() => toggleService(key)}
                      disabled={isSubmitting}
                    />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Message – shifts down automatically when menu is open */}
          <div className="qf__field">
            <label htmlFor="msg" className="qf__label">DÉTAIL OU MESSAGE LIBRE :</label>
            <textarea
              id="msg"
              className="qf__textarea"
              rows={8}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isSubmitting}
              placeholder=""
            />
          </div>

          {/* Error message */}
          {error && (
            <div style={{
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              borderRadius: '6px',
              padding: '12px 16px',
              color: '#fca5a5',
              fontSize: '14px',
              margin: '16px 0',
              textAlign: 'center'
            }}>
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ marginRight: '8px', verticalAlign: 'middle' }}
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
              {error}
            </div>
          )}

          <div className="qf__actions">
            <button 
              type="submit" 
              className="qf__btn" 
              disabled={!fullName || !email || isSubmitting}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}