"use client";

import React from "react";
import Link from "next/link";
import "./formations.css";

interface Formation {
  id: number;
  title: string;
  bullets: string[];
  iconUrl: string;
}

export default function FormationsPageComponent(): React.ReactElement {
  const formations: Formation[] = [
    {
      id: 1,
      title: "Programme Entrepreneur 360°",
      bullets: [
        "Bilan de compétences.",
        "Création société & fiscalité.",
        "Stratégie marketing.",
        "Mise en réseau investisseurs.",
      ],
      iconUrl:
        "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/briefcase.svg",
    },
    {
      id: 2,
      title: "E-Commerce & Business Digital",
      bullets: [
        "Créer sa boutique en ligne.",
        "Stratégies TikTok & Meta Ads.",
        "Logistique export.",
      ],
      iconUrl:
        "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/shopping-cart.svg",
    },
    {
      id: 3,
      title: "IA & Automatisation",
      bullets: [
        "Outils IA (ChatGPT, MidJourney).",
        "No-code (n8n, Zapier).",
        "Optimisation productivité.",
      ],
      iconUrl:
        "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/bot.svg",
    },
    {
      id: 4,
      title: "Innovation & Tech",
      bullets: [
        "Blockchain & Web3.",
        "GreenTech & Énergies.",
        "Cybersécurité & Cloud.",
      ],
      iconUrl:
        "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/atom.svg",
    },
  ];

  return (
    <main className="formations-page">
      <div className="formations-wrap">
        <header className="formations-header">
          <h2>Formations pour entreprendre et innover au Maroc</h2>
          <p className="formations-meta">
            Entrepreneur 360°, E-commerce, IA et innovation : 4 formations
            pratiques pour réussir votre projet au Maroc.
          </p>
        </header>

        <section className="formations-intro">
          <p className="intro-lead">
            Nos programmes sont conçus pour accompagner les porteurs de projets
            et digital nomads.
          </p>
        </section>

        <section className="formations-block">
          <h3 className="formations-block__title">Nos 4 formations phares</h3>

          <div className="formation-grid">
            {formations.map((f) => (
              <article key={f.id} className="formation-card">
                <div className="formation-icon">
                  <img
                    src={f.iconUrl}
                    alt=""
                    width="32"
                    height="32"
                    className="red-icon"
                    loading="lazy"
                  />
                </div>

                <h4 className="formation-title">{f.title}</h4>

                <ul className="formation-features">
                  {f.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <div className="formations-cta">
          <Link href="/contact-quiz" className="cta-btn">
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
            S’inscrire à la prochaine session
          </Link>
        </div>
      </div>
    </main>
  );
}
