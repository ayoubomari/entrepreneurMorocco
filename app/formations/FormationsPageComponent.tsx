"use client";

import React from "react";
import Link from "next/link";
import "./formations.css";
import { CloudRedEffect1 } from "@/components/CloudRedEffect";

interface Formation {
  id: number;
  title: string;
  bullets: string[];
  iconUrl: string;
  ctaUrl: string;
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
      ctaUrl: "/contact-quiz",
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
      ctaUrl: "/contact-quiz",
    },
    {
      id: 3,
      title: "Programme conseil immobilier",
      bullets: [
        "Analyse du marché immobilier marocain.",
        "Étude de rentabilité & opportunités.",
        "Stratégies d’investissement.",
        "Jury final & opportunité professionnelle.",
      ],
      iconUrl:
        "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/chart-line.svg",
      ctaUrl: "/formations/list/programme-immobilier/",
    },
    {
      id: 4,
      title: "Innovation & Tech",
      bullets: [
        "Blockchain & Web3.",
        "GreenTech & Énergies.",
        "Cybersécurité & Cloud.",
        "IA & Automatisation.",
      ],
      iconUrl:
        "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/atom.svg",
      ctaUrl: "/contact-quiz",
    },
  ];

  return (
    <main className="formations-page">
      <CloudRedEffect1 />

      <div className="formations-wrap">
        <header className="formations-header">
          <h2>Formations pour entreprendre et innover au Maroc</h2>
          <p className="formations-meta">
            Entrepreneur 360°, E-commerce, Programme immobilier : 4 formations
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
            {formations.map((f, index) => (
              <article
                key={f.id}
                className="formation-card"
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                <div className="formation-icon-container">
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

                {/* Added Button at the bottom of each card */}
                <div className="formation-card-footer">
                  <Link href={f.ctaUrl} className="formation-card-btn">
                    Candidater à la prochaine session
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* <div className="formations-cta">
          <Link href="/contact-quiz" className="f-cta-btn">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
            </svg>
            S’inscrire à la prochaine session
          </Link>
        </div> */}
      </div>
    </main>
  );
}
