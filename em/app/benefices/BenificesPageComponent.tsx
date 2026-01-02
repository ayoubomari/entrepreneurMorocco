'use client';

import React from 'react';
import Link from 'next/link';
import './benifices.css';

export default function BenificesPageComponent(): React.ReactElement {
  return (
    <main className="benefits-page">
      <div className="benefits-wrap">
        {/* Header */}
        <header className="benefits-header">
          <h2>Pourquoi investir et entreprendre au Maroc aujourd’hui ?</h2>
          <p className="benefits-meta">
            Le Maroc : croissance, diaspora mondiale, Vision 2030, Coupe du Monde 2030. Découvrez les
            bénéfices d’entreprendre au Maroc.
          </p>
        </header>

        {/* Intro */}
        <section className="benefits-intro">
          <p className="intro-lead">Le Maroc est devenu une terre d’opportunités :</p>
        </section>

        {/* KPI / Chiffres clés */}
<section className="benefits-block">
  <h3 className="benefits-block__title">Chiffres clés (KPI)</h3>

  <div className="kpi-grid">
    {/* KPI 1 */}
    <div className="kpi-card">
      <div className="kpi-icon" aria-hidden>
        <img
          src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/trending-up.svg"
          alt="Tendance haussière"
          width="28"
          height="28"
          style={{ filter: 'invert(34%) sepia(97%) saturate(3034%) hue-rotate(340deg) brightness(94%) contrast(91%)' }}
        />
      </div>
      <div className="kpi-content">
        <div className="kpi-value">+4 %</div>
        <div className="kpi-label">croissance prévue en 2025</div>
      </div>
    </div>

    {/* KPI 2 */}
    <div className="kpi-card">
      <div className="kpi-icon" aria-hidden>
        <img
          src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/users.svg"
          alt="Communauté"
          width="28"
          height="28"
          style={{ filter: 'invert(34%) sepia(97%) saturate(3034%) hue-rotate(340deg) brightness(94%) contrast(91%)' }}
        />
      </div>
      <div className="kpi-content">
        <div className="kpi-value">5M</div>
        <div className="kpi-label">Marocains du monde → réseau global</div>
      </div>
    </div>

    {/* KPI 3 */}
    <div className="kpi-card">
      <div className="kpi-icon" aria-hidden>
        <img
          src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/leaf.svg"
          alt="Énergie verte"
          width="28"
          height="28"
          style={{ filter: 'invert(34%) sepia(97%) saturate(3034%) hue-rotate(340deg) brightness(94%) contrast(91%)' }}
        />
      </div>
      <div className="kpi-content">
        <div className="kpi-value">52 %</div>
        <div className="kpi-label">d’énergie verte d’ici 2030</div>
      </div>
    </div>

    {/* KPI 4 */}
    <div className="kpi-card">
      <div className="kpi-icon" aria-hidden>
        <img
          src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/ship.svg"
          alt="Port / logistique"
          
          width="28"
          height="28"
          style={{ filter: 'invert(34%) sepia(97%) saturate(3034%) hue-rotate(340deg) brightness(94%) contrast(91%)' }}
        />
      </div>
      <div className="kpi-content">
        <div className="kpi-value">#1 en Afrique</div>
        <div className="kpi-label">Tanger Med → 180 destinations</div>
      </div>
    </div>
  </div>
</section>



        {/* Opportunités concrètes */}
        <section className="benefits-block">
          <h3 className="benefits-block__title">Opportunités concrètes</h3>

          <ul className="benefits-list">
  <li>
    <img
      src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/rocket.svg"
      alt="Économie en essor"
      width="22"
      height="22"
      className="red-icon"
    />
    <div className="benefit-text">
      <span className="benefit-label">Économie en essor :</span>
      <span className="benefit-desc">PIB doublé en 20 ans.</span>
    </div>
  </li>

  <li>
    <img
      src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/trophy.svg"
      alt="Coupe d’Afrique & Coupe du Monde"
      width="22"
      height="22"
      className="red-icon"
    />
    <div className="benefit-text">
      <span className="benefit-label">Coupe d’Afrique 2025 & Coupe du Monde 2030 :</span>
      <span className="benefit-desc">milliards investis en infrastructures.</span>
    </div>
  </li>

  <li>
    <img
      src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/laptop.svg"
      alt="Écosystème digital"
      width="22"
      height="22"
      className="red-icon"
    />
    <div className="benefit-text">
      <span className="benefit-label">Écosystème digital :</span>
      <span className="benefit-desc">e-commerce +20 %/an, IA, data centers.</span>
    </div>
  </li>

  <li>
    <img
      src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/graduation-cap.svg"
      alt="Talents qualifiés"
      width="22"
      height="22"
      className="red-icon"
    />
    <div className="benefit-text">
      <span className="benefit-label">Talents qualifiés :</span>
      <span className="benefit-desc">100 000 diplômés/an en tech, management & ingénierie.</span>
    </div>
  </li>
</ul>

        </section>

        {/* Témoignages */}
        <section className="benefits-block">
          <h3 className="benefits-block__title">Témoignages</h3>

          <div className="testi-grid">
            <blockquote className="testi-card">
              <p>“En 6 mois, j’ai lancé ma startup EdTech au Maroc.”</p>
              <footer>— <strong>Sarah</strong>, Paris → Casablanca</footer>
            </blockquote>

            <blockquote className="testi-card">
              <p>“Mes cosmétiques marocains exportent déjà en Europe.”</p>
              <footer>— <strong>Ahmed</strong>, Bruxelles → Rabat</footer>
            </blockquote>
          </div>
        </section>

        {/* CTA */}
        <div className="benefits-cta">
          <Link href="/devis" className="cta-btn">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Profiter des opportunités au Maroc dès maintenant
          </Link>
        </div>
      </div>
    </main>
  );
}
