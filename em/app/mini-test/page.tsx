'use client';

import { useState } from 'react';
import { useContactForm } from '@/hooks/useContactForm';
import './mini-test.css';

export default function MiniTestPage() {
  const [project, setProject] = useState<string | null>(null);   // single choice
  const [obstacles, setObstacles] = useState<string[]>([]);      // multi choice
  const [email, setEmail] = useState('');

  const { submitForm, isSubmitting, isSuccess, error } = useContactForm({
    formId: 'mini-test',
    onSuccess: () => {
      // Reset form after 3 seconds
      setTimeout(() => {
        setProject(null);
        setObstacles([]);
        setEmail('');
      }, 3000);
    }
  });

  const toggleObstacle = (key: string) =>
    setObstacles((arr) => (arr.includes(key) ? arr.filter((k) => k !== key) : [...arr, key]));

  const canSubmit = !!email.trim();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    // Convert selections to readable format
    const getProjectLabel = (key: string | null) => {
      const map: Record<string, string> = {
        'create': 'Créer une entreprise',
        'family': 'S\'installer en famille',
        'invest': 'Investir au Maroc'
      };
      return key ? map[key] : 'Non renseigné';
    };

    const getObstaclesLabels = (keys: string[]) => {
      const map: Record<string, string> = {
        'tax': 'Statut / fiscalité',
        'housing': 'Logement / papiers',
        'info': 'Manque d\'infos fiables',
        'start': 'Je ne sais pas par où commencer'
      };
      return keys.length > 0 ? keys.map(k => map[k] || k).join(', ') : 'Aucun obstacle sélectionné';
    };

    await submitForm({
      'Email': email,
      'Projet principal': getProjectLabel(project),
      'Obstacles identifiés': getObstaclesLabels(obstacles),
      'Date de soumission': new Date().toLocaleString('fr-FR', { 
        timeZone: 'Africa/Casablanca',
        year: 'numeric',
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      'Source': 'Mini Test - Par où commencer'
    });
  };

  const PROJECT_OPTS: [string, string][] = [
    ['create', 'Créer une entreprise'],
    ['family', 'S\'installer en famille'],
    ['invest', 'Investir au Maroc'],
  ];

  const OBSTACLE_OPTS: [string, string][] = [
    ['tax', 'Statut / fiscalité'],
    ['housing', 'Logement / papiers'],
    ['info', 'Manque d\'infos fiables'],
    ['start', 'Je ne sais pas par où commencer'],
  ];

  // Show success message if form was submitted successfully
  if (isSuccess) {
    return (
      <main className="mintest">
        <div className="mt__wrap">
          <div className="mt__success" style={{
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
              Parfait ! Vos recommandations arrivent
            </h2>
            
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '18px',
              margin: '0',
              lineHeight: '1.5',
              animation: 'textFadeIn 0.5s ease-out 0.4s both'
            }}>
              Notre équipe analyse vos réponses et vous enverra<br />
              vos prochaines étapes concrètes par email.
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
    <main className="mintest">
      <div className="mt__wrap">
        <header className="mt__head">
          <h1 className="mt__title">MINI TEST : PAR OÙ COMMENCER ?</h1>
          <p className="mt__lead">
            1 minute pour clarifier votre situation et savoir quelles sont les prochaines étapes concrètes.
          </p>
        </header>

        <form className="mt__form" onSubmit={onSubmit}>
          <h2 className="mt__q">Étapes :</h2>

          {/* Q1 — radios */}
          <section className="mt__block">
            <div className="mt__qtitle">1. Quel est votre projet principal ?</div>
            <div className="mt__group">
              {PROJECT_OPTS.map(([key, label]) => {
                const id = `proj-${key}`;
                return (
                  <label key={key} className="mt__row" htmlFor={id}>
                    <span className="mt__label">{label}</span>
                    <input
                      id={id}
                      type="radio"
                      name="project"          // radios = single choice
                      className="mt__radio"
                      checked={project === key}
                      onChange={() => setProject(key)}
                      disabled={isSubmitting}
                    />
                  </label>
                );
              })}
            </div>
          </section>

          {/* Q2 — checkboxes */}
          <section className="mt__block">
            <div className="mt__qtitle">2. Quel est votre principal obstacle aujourd'hui ?</div>
            <div className="mt__group">
              {OBSTACLE_OPTS.map(([key, label]) => {
                const id = `obst-${key}`;
                return (
                  <label key={key} className="mt__row" htmlFor={id}>
                    <span className="mt__label">{label}</span>
                    <input
                      id={id}
                      type="checkbox"
                      className="mt__check"
                      checked={obstacles.includes(key)}
                      onChange={() => toggleObstacle(key)}
                      disabled={isSubmitting}
                    />
                  </label>
                );
              })}
            </div>
          </section>

          {/* Email (normal field, no SVG) */}
          <div className="mt__inputs mt__limit">
            <div className="mt__inputRow">
              <label htmlFor="mt-email" className="mt__inputLabel">
                EMAIL OBLIGATOIRE :
              </label>
              <input
                id="mt-email"
                type="email"
                className="mt__input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
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

          <div className="mt__actions mt__limit">
            <button 
              type="submit" 
              className="mt__btn" 
              disabled={!canSubmit || isSubmitting}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Voir mes recommandations'}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}