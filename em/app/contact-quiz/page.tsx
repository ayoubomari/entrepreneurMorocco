'use client';

import { useState } from 'react';
import { useContactForm } from '@/hooks/useContactForm';
import './contact-quiz.css';

export default function DevisPage() {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [resultEmail, setResultEmail] = useState('');
  const [message, setMessage] = useState('');

  const { submitForm, isSubmitting, isSuccess, error } = useContactForm({
    formId: 'plan-selection',
    onSuccess: () => {
      setTimeout(() => {
        setSelectedPlan('');
        setFullName('');
        setEmail('');
        setPhone('');
        setResultEmail('');
        setMessage('');
      }, 3000);
    }
  });

  const plans = [
    {
      id: 'starter',
      title: 'PLAN 1 - Starter',
      subtitle: '(solo / indépendant)',
      price: '2999 €',
      priceNote: '(prix fixe)',
      description: 'Idéal pour tester et valider rapidement le marché marocain.',
      features: [
        'Bilan de compétences & audit projet',
        'Création d\'entreprise (statuts, fiscalité, ouverture bancaire)',
        'Setup administratif & fiscal de base'
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="#ef4444" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 'family',
      title: 'PLAN 2 - Family & Lifestyle',
      subtitle: '(MRE & installation famille)',
      price: 'Sur devis',
      priceNote: '',
      description: 'Parfait pour les Marocains du monde qui souhaitent revenir ou s\'installer avec leurs proches.',
      features: [
        'Accompagnement administratif complet',
        'Aide au logement, choix des écoles, intégration familiale',
        'Mise en relation avec clubs business & avocats partenaires'
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#ef4444" strokeWidth="2"/>
          <polyline points="9,22 9,12 15,12 15,22" stroke="#ef4444" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 'growth',
      title: 'PLAN 3 - Growth & Business',
      subtitle: '(entrepreneurs / startups)',
      price: 'Sur devis',
      priceNote: '',
      description: 'Conçu pour les entrepreneurs et startups qui veulent accélérer au Maroc et à l\'international.',
      features: [
        'Étude de marché approfondie & stratégie go-to-market',
        'Recrutement, installation bureaux & coworkings',
        'Accès privilégié à notre réseau d\'investisseurs & Club Privilège'
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="12" y1="1" x2="12" y2="23" stroke="#ef4444" strokeWidth="2"/>
          <path d="M17 5H9.5C7.01472 5 5 7.01472 5 9.5C5 11.9853 7.01472 14 9.5 14H14.5C16.9853 14 19 16.0147 19 18.5C19 20.9853 16.9853 23 14.5 23H6" stroke="#ef4444" strokeWidth="2"/>
        </svg>
      )
    }
  ];

  const canSubmit = fullName.trim() && email.trim() && resultEmail.trim() && selectedPlan;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    const selectedPlanData = plans.find(p => p.id === selectedPlan);
    
    await submitForm({
      'Nom complet': fullName,
      'Email principal': email,
      'Téléphone': phone || 'Non renseigné',
      'Email pour résultats': resultEmail,
      'Message': message || 'Aucun message',
      'Plan sélectionné': selectedPlanData?.title || selectedPlan,
      'Prix du plan': selectedPlanData?.price || 'Non défini',
      'Date de soumission': new Date().toLocaleString('fr-FR', { 
        timeZone: 'Africa/Casablanca',
        year: 'numeric',
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      'Source': 'Sélection de plan - Page devis'
    });
  };

  // Success state
  if (isSuccess) {
    return (
      <main className="devis-page">
        <div className="devis-wrap">
          <div className="success-message">
            <div className="success-icon">
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
            <h2>Parfait ! Votre demande a été validée</h2>
            <p>Notre équipe va vous recontacter rapidement<br />pour finaliser votre accompagnement.</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="devis-page">
      <div className="devis-wrap">
        <header className="devis-header">
          <h1>Des packs adaptés à chaque profil : solo, MRE, famille ou startup ambitieuse</h1>
          <p>Choisissez la formule qui correspond à votre projet : installation rapide, retour au Maroc en famille ou croissance accélérée.</p>
        </header>

        {/* Plans Selection */}
        <div className="plans-selection">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`plan-card ${selectedPlan === plan.id ? 'selected' : ''}`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              <div className="plan-header">
                <div className="plan-icon">
                  {plan.icon}
                </div>
                <div>
                  <h3 className="plan-title">{plan.title}</h3>
                  <span className="plan-subtitle">{plan.subtitle}</span>
                </div>
                <div className="plan-select">
                  <input 
                    type="radio" 
                    name="plan" 
                    value={plan.id}
                    checked={selectedPlan === plan.id}
                    onChange={() => setSelectedPlan(plan.id)}
                  />
                </div>
              </div>
              
              <div className="plan-price">
                <span className="price-amount">{plan.price}</span>
                {plan.priceNote && <span className="price-note">{plan.priceNote}</span>}
              </div>
              
              <p className="plan-description">{plan.description}</p>
              
              <ul className="plan-features">
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Brochure Button */}
        <div className="brochure-section">
          <a href="/brochure" className="brochure-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Télécharger la brochure complète
          </a>
        </div>

        {/* Contact Form */}
        <form className="devis-form" onSubmit={onSubmit}>
          <h2>Vos informations</h2>
          
          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="fullname">
                NOM COMPLET <span className="required">*</span>
              </label>
              <input
                id="fullname"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                autoComplete="name"
                disabled={isSubmitting}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">
                EMAIL <span className="required">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                disabled={isSubmitting}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="phone">TÉLÉPHONE</label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete="tel"
                disabled={isSubmitting}
              />
            </div>

            <div className="form-field">
              <label htmlFor="resultEmail">
                EMAIL POUR RECEVOIR VOS RÉSULTATS <span className="required">*</span>
              </label>
              <input
                id="resultEmail"
                type="email"
                value={resultEmail}
                onChange={(e) => setResultEmail(e.target.value)}
                autoComplete="email"
                disabled={isSubmitting}
                required
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="message">MESSAGE (OPTIONNEL)</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              disabled={isSubmitting}
              placeholder="Décrivez votre projet ou vos besoins spécifiques..."
            />
          </div>

          {/* Error message */}
          {error && (
            <div className="error-message">
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
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
              {error}
            </div>
          )}

          <div className="form-actions">
            <button 
              type="submit" 
              className="submit-btn" 
              disabled={!canSubmit || isSubmitting}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Recevoir mon devis personnalisé'}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}