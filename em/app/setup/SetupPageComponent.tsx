"use client";

import React from "react";
import Link from "next/link";
import "./setup.css";
import CloudRedEffect from "@/components/CloudRedEffect";

interface Step {
  id: number;
  title: string;
  features: string[];
  icon: React.ReactElement;
}

export default function SetupPageComponent(): React.ReactElement {
  const steps: Step[] = [
    {
      id: 1,
      title: "Bilan de compétences & diagnostic",
      features: [
        "Analyse de vos forces",
        "Étude des secteurs porteurs",
        "Plan 30/60/90 jours",
      ],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 11H15M9 15H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 3V8H18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Création d'entreprise & fiscalité",
      features: [
        "Statuts juridiques",
        "Banque & fiscalité",
        "Enregistrement CNSS",
      ],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 21H21M5 21V7L12 3L19 7V21M9 9H11M13 9H15M9 13H11M13 13H15M9 17H11M13 17H15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Implantation & installation",
      features: [
        "Bureau, coworking, logement",
        "Recrutement & RH",
        "Mise en place logistique",
      ],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 17L12 22L22 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12L12 17L22 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Lancement & premiers clients",
      features: [
        "Stratégie go-to-market",
        "Accès au réseau business",
        "Premiers contrats signés",
      ],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <main className="setup-page relative overflow-hidden">
      <CloudRedEffect />

      <div className="setup-wrap">
        <header className="setup-header">
          <h1>Setup complet : entreprendre au Maroc</h1>
          <div className="setup-intro">
            <p className="intro-text">
              Vous souhaitez lancer votre projet au Maroc ?
            </p>
            <p className="intro-subtitle">
              Notre méthodologie Setup vous accompagne de l'idée jusqu'à vos
              premiers clients.
            </p>
          </div>
        </header>

        <section className="setup-steps">
          <h2>Les 4 étapes du Setup</h2>
          <div className="steps-grid">
            {steps.map((step) => (
              <div key={step.id} className="step-card">
                <div className="step-number">
                  <span>{step.id}</span>
                </div>
                <div className="step-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <ul className="step-features">
                  {step.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="setup-cta">
          <Link href="/devis" className="cta-btn">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
            </svg>
            Lancer mon projet au Maroc maintenant
          </Link>
        </div>
      </div>
    </main>
  );
}
