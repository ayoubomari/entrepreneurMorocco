"use client";

import React from "react";
import Link from "next/link";
import "./benifices.css";
import { CloudRedEffect1 } from "@/components/CloudRedEffect";
import {
  TrendingUp,
  Users,
  Leaf,
  Ship,
  Rocket,
  Trophy,
  Laptop,
  GraduationCap,
} from "lucide-react";

export default function BenificesPageComponent(): React.ReactElement {
  const kpis = [
    {
      id: 1,
      value: "+4 %",
      label: "Croissance prévue en 2025",
      icon: <TrendingUp size={32} color="#fff" />,
    },
    {
      id: 2,
      value: "5M",
      label: "Marocains du monde",
      icon: <Users size={32} color="#fff" />,
    },
    {
      id: 3,
      value: "52 %",
      label: "D'énergie verte d'ici 2030",
      icon: <Leaf size={32} color="#fff" />,
    },
    {
      id: 4,
      value: "#1 Afrique",
      label: "Port Tanger Med",
      icon: <Ship size={32} color="#fff" />,
    },
  ];

  const opportunities = [
    {
      id: 1,
      title: "Économie en essor",
      desc: "PIB doublé en 20 ans, inflation maîtrisée.",
      icon: <Rocket size={28} color="#fff" />,
    },
    {
      id: 2,
      title: "Coupe du Monde 2030",
      desc: "Milliards investis en infrastructures.",
      icon: <Trophy size={28} color="#fff" />,
    },
    {
      id: 3,
      title: "Écosystème Digital",
      desc: "E-commerce +20%/an, Hub technologique.",
      icon: <Laptop size={28} color="#fff" />,
    },
    {
      id: 4,
      title: "Talents Qualifiés",
      desc: "100k diplômés/an en ingénierie & tech.",
      icon: <GraduationCap size={28} color="#fff" />,
    },
  ];

  return (
    <main className="benefits-page relative overflow-hidden">
      <CloudRedEffect1 />

      <div className="benefits-wrap">
        {/* HEADER */}
        <header className="benefits-header">
          <h1>Pourquoi investir et entreprendre au Maroc ?</h1>
          <div className="benefits-intro">
            <p className="intro-text">
              Le Maroc : croissance, diaspora mondiale, Vision 2030.
            </p>
            <p className="intro-subtitle">
              Découvrez les bénéfices concrets d’entreprendre au Maroc
              aujourd'hui.
            </p>
          </div>
        </header>

        {/* SECTION 1: KPIS */}
        <section className="benefits-section">
          <h2>Les Chiffres Clés</h2>
          <div className="benefits-grid">
            {kpis.map((kpi) => (
              <div key={kpi.id} className="bn-card">
                <div className="bn-icon-wrapper">{kpi.icon}</div>
                <h3 className="bn-value">{kpi.value}</h3>
                <p className="bn-label">{kpi.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: OPPORTUNITIES */}
        <section className="benefits-section">
          <h2>Opportunités Concrètes</h2>
          <div className="benefits-grid benefits-grid-wide">
            {opportunities.map((opp) => (
              <div key={opp.id} className="bn-card bn-card-wide">
                <div className="bn-row">
                  <div className="bn-icon-small">{opp.icon}</div>
                  <div className="bn-content">
                    <h3 className="bn-title">{opp.title}</h3>
                    <p className="bn-desc">{opp.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: TESTIMONIALS */}
        <section className="benefits-section">
          <h2>Ils en parlent</h2>
          <div className="benefits-grid benefits-grid-half">
            <div className="bn-card bn-testimonial">
              <p className="bn-quote">
                “En 6 mois, j’ai lancé ma startup EdTech au Maroc. L'écosystème
                est bouillant.”
              </p>
              <div className="bn-author">
                <span className="bn-dash">—</span>
                <strong>Sarah</strong>, Paris → Casablanca
              </div>
            </div>
            <div className="bn-card bn-testimonial">
              <p className="bn-quote">
                “Mes cosmétiques marocains exportent déjà en Europe grâce aux
                accords de libre-échange.”
              </p>
              <div className="bn-author">
                <span className="bn-dash">—</span>
                <strong>Ahmed</strong>, Bruxelles → Rabat
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="benefits-cta">
          <Link href="/devis" className="b-cta-btn">
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
            Profiter des opportunités maintenant
          </Link>
        </div>
      </div>
    </main>
  );
}
