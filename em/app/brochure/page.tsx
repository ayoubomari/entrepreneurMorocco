'use client';

import { useState } from 'react';
import { useContactForm } from '@/hooks/useContactForm';
import './brochure.css';

export default function BrochurePage() {
  const [email, setEmail] = useState('');

  const { submitForm, isSubmitting, isSuccess, error } = useContactForm({
    formId: 'brochure-download',
    onSuccess: () => {
      // Automatically trigger PDF download
      triggerPDFDownload();
      // Reset form after success
      setTimeout(() => {
        setEmail('');
      }, 3000);
    }
  });


  const triggerPDFDownload = () => {
    const a = document.createElement('a');
    a.href = '/pdfs/EM Pitch Deck Fr V1.pdf'; 
    a.download = 'brochure.pdf';
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    await submitForm({
      'Email': email,
      'Document demandé': 'Brochure détaillée de l\'offre',
      'Date de téléchargement': new Date().toLocaleString('fr-FR', { 
        timeZone: 'Africa/Casablanca',
        year: 'numeric',
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      'Source': 'Site Web - Page Brochure'
    });
  };

  const canSubmit = !!email.trim();

  // Show success message if form was submitted successfully
  if (isSuccess) {
    return (
      <main className="dlb">
        <div className="dlb__wrap">
          <div className="dlb__success" style={{
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
              Parfait ! Votre brochure a été téléchargée
            </h2>
            
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '18px',
              margin: '0 0 24px',
              lineHeight: '1.5',
              animation: 'textFadeIn 0.5s ease-out 0.4s both'
            }}>
              Le téléchargement du PDF a commencé automatiquement.
            </p>

            {/* Download again button */}
            <button
              onClick={triggerPDFDownload}
              style={{
                background: 'transparent',
                color: '#ef4444',
                border: '1px solid #ef4444',
                padding: '10px 20px',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                animation: 'buttonFadeIn 0.5s ease-out 0.5s both',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#ef4444';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#ef4444';
              }}
            >
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7,10 12,15 17,10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Télécharger à nouveau
            </button>

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

              @keyframes buttonFadeIn {
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
    <main className="dlb">
      <div className="dlb__wrap">
        <header className="dlb__head">
          <h1 className="dlb__title">TÉLÉCHARGER LA BROCHURE DE L'OFFRE</h1>
          <p className="dlb__lead">
            Lisez les détails complets de l'accompagnement (contenu, tarifs, délais…).
          </p>
        </header>

        <form className="dlb__form" onSubmit={onSubmit}>
          <div className="dlb__limit">
            <div className="dlb__inputs">
              <div className="dlb__inputRow">
                <label className="dlb__inputLabel" htmlFor="email">EMAIL OBLIGATOIRE :</label>
                <input
                  id="email"
                  type="email"
                  className="dlb__input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  placeholder="Votre email"
                  disabled={isSubmitting}
                  required
                />
              </div>
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

            <div className="dlb__actions">
              <button 
                type="submit" 
                className="dlb__btn" 
                disabled={!canSubmit || isSubmitting}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Télécharger la brochure PDF'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}