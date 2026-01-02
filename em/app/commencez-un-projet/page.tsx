'use client';

import { useState } from 'react';
import { useContactForm } from '@/hooks/useContactForm';
import './commencez-un-projet.css';

export default function CommencezUnProjetPage() {
  const [profile, setProfile] = useState<string | null>(null);
  const [stage, setStage] = useState<string | null>(null);
  const [needs, setNeeds] = useState<string[]>([]);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const { submitForm, isSubmitting, isSuccess, error } = useContactForm({
    formId: 'profile-quiz',
    onSuccess: () => {
      // Reset form after 3 seconds
      setTimeout(() => {
        setProfile(null);
        setStage(null);
        setNeeds([]);
        setEmail('');
        setPhone('');
      }, 3000);
    }
  });

  const canSubmit = !!email.trim();

  const toggleNeed = (key: string) =>
    setNeeds((arr) => (arr.includes(key) ? arr.filter((k) => k !== key) : [...arr, key]));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    // Convert selections to readable format
    const getProfileLabel = (key: string | null) => {
      const map: Record<string, string> = {
        'mre': 'Marocain du monde',
        'freelance': 'Freelance', 
        'family': 'Famille en retour',
        'invest': 'Investisseur',
        'reconv': 'En reconversion'
      };
      return key ? map[key] : 'Non renseigné';
    };

    const getStageLabel = (key: string | null) => {
      const map: Record<string, string> = {
        'idea': "J'ai une idée",
        'prep': 'Je prépare mon départ', 
        'launch': 'Je veux lancer mon activité',
        'structure': "J'ai déjà une structure"
      };
      return key ? map[key] : 'Non renseigné';
    };

    const getNeedsLabels = (keys: string[]) => {
      const map: Record<string, string> = {
        'creation': "Création d'entreprise",
        'tax': 'Fiscalité / Statut',
        'housing': 'Séjour / logement', 
        'digital': 'Digitalisation',
        'school': 'Scolarité / santé'
      };
      return keys.length > 0 ? keys.map(k => map[k] || k).join(', ') : 'Aucun besoin sélectionné';
    };

    await submitForm({
      'Email': email,
      'Téléphone': phone || 'Non renseigné',
      'Profil': getProfileLabel(profile),
      'Étape du projet': getStageLabel(stage),
      'Besoins d\'accompagnement': getNeedsLabels(needs),
      'Date de soumission': new Date().toLocaleString('fr-FR', { 
        timeZone: 'Africa/Casablanca',
        year: 'numeric',
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      'Source': 'Questionnaire - Plan personnalisé'
    });
  };

  const PROFIL_OPTS: [string, string][] = [
    ['mre', 'Marocain du monde'],
    ['freelance', 'Freelance'],
    ['family', 'Famille en retour'],
    ['invest', 'Investisseur'],
    ['reconv', 'En reconversion'],
  ];

  const STAGE_OPTS: [string, string][] = [
    ['idea', "J'ai une idée"],
    ['prep', 'Je prépare mon départ'],
    ['launch', 'Je veux lancer mon activité'],
    ['structure', "J'ai déjà une structure"],
  ];

  const NEEDS_OPTS: [string, string][] = [
    ['creation', "Création d'entreprise"],
    ['tax', 'Fiscalité / Statut'],
    ['housing', 'Séjour / logement'],
    ['digital', 'Digitalisation'],
    ['school', 'Scolarité / santé'],
  ];

  // Show success message if form was submitted successfully
  if (isSuccess) {
    return (
      <main className="cproj">
        <div className="cproj__wrap">
          <div className="cproj__success" style={{
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
              Parfait ! Votre plan personnalisé a été envoyé
            </h2>
            
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '18px',
              margin: '0',
              lineHeight: '1.5',
              animation: 'textFadeIn 0.5s ease-out 0.4s both'
            }}>
              Notre équipe analyse vos réponses et vous enverra<br />
              votre plan d'action personnalisé par email.
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
    <main className="cproj">
      <div className="cproj__wrap">
        <header className="cproj__head">
          <h1 className="cproj__title">DITES-NOUS OÙ VOUS EN ÊTES</h1>
          <p className="cproj__lead">
            Répondez à 3 questions rapides pour recevoir votre plan d'action personnalisé par email.
          </p>
        </header>

        <form className="cproj__form" onSubmit={onSubmit}>
          {/* =================== Q1 =================== */}
          <section className="cproj__block">
            <h2 className="cproj__q">Questions :</h2>
            <div className="cproj__group">
              <div className="cproj__qtitle">1. Quel est votre profil ?</div>
              {PROFIL_OPTS.map(([key, label]) => {
                const id = `profile-${key}`;
                return (
                  <label key={key} className="cproj__row" htmlFor={id}>
                    <span className="cproj__label">{label}</span>
                    <input
                      id={id}
                      type="radio"
                      name="profile"
                      className="cproj__radio"
                      checked={profile === key}
                      onChange={() => setProfile(key)}
                      disabled={isSubmitting}
                    />
                  </label>
                );
              })}
            </div>
          </section>

          {/* =================== Q2 =================== */}
          <section className="cproj__block">
            <div className="cproj__group">
              <div className="cproj__qtitle">2. Où en êtes-vous dans votre projet ?</div>
              {STAGE_OPTS.map(([key, label]) => {
                const id = `stage-${key}`;
                return (
                  <label key={key} className="cproj__row" htmlFor={id}>
                    <span className="cproj__label">{label}</span>
                    <input
                      id={id}
                      type="radio"
                      name="stage"
                      className="cproj__radio"
                      checked={stage === key}
                      onChange={() => setStage(key)}
                      disabled={isSubmitting}
                    />
                  </label>
                );
              })}
            </div>
          </section>

          {/* =================== Q3 =================== */}
          <section className="cproj__block">
            <div className="cproj__group">
              <div className="cproj__qtitle">3. Sur quoi souhaitez-vous être accompagné ?</div>
              {NEEDS_OPTS.map(([key, label]) => {
                const id = `need-${key}`;
                return (
                  <label key={key} className="cproj__row" htmlFor={id}>
                    <span className="cproj__label">{label}</span>
                    <input
                      id={id}
                      type="checkbox"
                      className="cproj__check"
                      checked={needs.includes(key)}
                      onChange={() => toggleNeed(key)}
                      disabled={isSubmitting}
                    />
                  </label>
                );
              })}
            </div>
          </section>

          {/* ================= Inputs (normal) ================= */}
          <div className="cproj__inputs cproj__limit">
            <div className="cproj__inputRow">
              <label htmlFor="cproj-email" className="cproj__inputLabel">
                EMAIL (OBLIGATOIRE) :
              </label>
              <input
                id="cproj-email"
                type="email"
                className="cproj__input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                disabled={isSubmitting}
                required
              />
            </div>

            <div className="cproj__inputRow">
              <label htmlFor="cproj-phone" className="cproj__inputLabel">
                TÉLÉPHONE (OPTIONNEL) :
              </label>
              <input
                id="cproj-phone"
                type="tel"
                className="cproj__input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete="tel"
                disabled={isSubmitting}
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

          {/* ================= Actions ================= */}
          <div className="cproj__actions">
            <button 
              type="submit" 
              className="cproj__btn" 
              disabled={!canSubmit || isSubmitting}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Recevoir mon plan personnalisé'}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}