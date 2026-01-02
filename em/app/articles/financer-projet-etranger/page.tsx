
'use client';
import './article2.css';
import React from 'react';
import {
  ArrowLeft, TrendingUp, Target, Zap, Monitor, Ship,
  Plane, GraduationCap, CheckCircle, HelpCircle,
  ArrowRight, HandHeart, Leaf, Cpu, Truck, MapPin,
  Trophy, Zap as Football
} from 'lucide-react';
import Link from 'next/link';

const Article2Page: React.FC = () => {
  return (
    <div className="article-container" style={{ backgroundColor: '#000000' }}>
      {/* Navigation */}
      <nav className="article-nav">
        <div className="nav-content">
          <Link href="/" className="nav-back">
            <ArrowLeft size={20} />
            <span>Retour aux articles</span>
          </Link>
          <div className="nav-counter">Article 2/4</div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-badge">
              <Target size={16} />
              ARTICLE 2 — Investir au Maroc
            </div>
            <h1 className="hero-title">
              Les secteurs <span className="text-accent">porteurs</span> à saisir en 2025 et vers 2030
            </h1>
            <p className="hero-description">
              Découvrez les secteurs d'avenir au Maroc : énergie verte, IA, logistique, 
              tourisme et éducation avec Vision 2030.
            </p>
            <div className="hero-meta">
              <span>10 min de lecture</span>
              <span>•</span>
              <span>Guide d'investissement</span>
            </div>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="stats-banner">
          <div className="stats-content">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">Top 3</div>
                <div className="stat-label">En Afrique pour l'IDE</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3,5%</div>
                <div className="stat-label">Croissance prévue/an</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">52%</div>
                <div className="stat-label">Énergie verte visée 2030</div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <div className="article-content">
          {/* Why Invest Now */}
          <section className="content-section">
            <div className="section-header">
              <TrendingUp className="section-icon" size={24} />
              <h2 className="section-title">Pourquoi investir maintenant ?</h2>
            </div>
            <div className="section-body">
              <p className="section-text">
                Le Maroc est une économie en mouvement où l'État investit massivement. 
                Avec plus de 100 zones industrielles et une position stratégique unique, 
                le royaume s'impose comme une destination incontournable pour les investisseurs.
              </p>
              <div className="vision-list-vertical">
                <div className="vision-item">
                  <CheckCircle className="check-icon green" size={20} />
                  <span>Top 3 en Afrique pour l'investissement direct étranger</span>
                </div>
                <div className="vision-item">
                  <CheckCircle className="check-icon green" size={20} />
                  <span>Croissance économique prévue : 3,5 % par an</span>
                </div>
                <div className="vision-item">
                  <CheckCircle className="check-icon green" size={20} />
                  <span>Plus de 100 zones industrielles opérationnelles</span>
                </div>
                <div className="vision-item special">
                  <CheckCircle className="check-icon red" size={20} />
                  <span style={{ color: '#fca5a5' }}>Vision 2030 : transformation digitale et énergétique complète</span>
                </div>
              </div>
            </div>
          </section>

          {/* Renewable Energy */}
          <section className="content-section">
            <div className="section-header">
              <Leaf className="section-icon" size={24} />
              <h2 className="section-title">Énergies renouvelables</h2>
            </div>
            <div className="section-body">
              <div className="highlight-box">
                <p>
                  Noor Ouarzazate : l'un des plus grands complexes solaires au monde. 
                  Le Maroc vise à devenir le leader africain de l'hydrogène vert.
                </p>
              </div>
              <div className="vision-list-vertical">
                <div className="vision-item">
                  <Zap className="check-icon green" size={20} />
                  <span>Objectif 2030 : 52 % du mix énergétique en renouvelable</span>
                </div>
                <div className="vision-item">
                  <Zap className="check-icon green" size={20} />
                  <span>Complexe solaire Noor : 580 MW de capacité</span>
                </div>
                <div className="vision-item">
                  <Zap className="check-icon green" size={20} />
                  <span>Développement de l'hydrogène vert pour l'export</span>
                </div>
              </div>
              <div className="diaspora-highlight">
                <ArrowRight size={20} />
                <span>Opportunités : production, ingénierie, services techniques</span>
              </div>
            </div>
          </section>

          {/* Digital and AI */}
          <section className="content-section">
            <div className="section-header">
              <Cpu className="section-icon" size={24} />
              <h2 className="section-title">Digital et IA</h2>
            </div>
            <div className="section-body">
              <p className="section-text">
                Le secteur digital marocain connaît une croissance exceptionnelle avec 
                le déploiement de data centers IA et la préparation d'une monnaie digitale nationale.
              </p>
              <div className="vision-list-vertical">
                <div className="vision-item">
                  <Monitor className="check-icon green" size={20} />
                  <span>Croissance +20 %/an de l'e-commerce</span>
                </div>
                <div className="vision-item">
                  <Monitor className="check-icon green" size={20} />
                  <span>Déploiement de data centers IA à Casablanca et Rabat</span>
                </div>
                <div className="vision-item">
                  <Monitor className="check-icon green" size={20} />
                  <span>Préparation d'une monnaie digitale nationale</span>
                </div>
                <div className="vision-item">
                  <Monitor className="check-icon green" size={20} />
                  <span>Digitalisation complète des services publics</span>
                </div>
              </div>
              <div className="diaspora-highlight">
                <ArrowRight size={20} />
                <span>Les startups tech et freelances trouvent un écosystème attractif</span>
              </div>
            </div>
          </section>

          {/* Industry and Logistics */}
          <section className="content-section">
            <div className="section-header">
              <Ship className="section-icon" size={24} />
              <h2 className="section-title">Industrie et logistique</h2>
            </div>
            <div className="section-body">
              <div className="cfc-box">
                <p className="cfc-intro">
                  Tanger Med : premier port africain, connecté à 180 destinations mondiales
                </p>
                <div className="cfc-stats">
                  <div className="cfc-stat">
                    <div className="cfc-stat-number">9M</div>
                    <div className="cfc-stat-label">Conteneurs/an</div>
                  </div>
                  <div className="cfc-stat">
                    <div className="cfc-stat-number">180</div>
                    <div className="cfc-stat-label">Destinations</div>
                  </div>
                  <div className="cfc-stat">
                    <div className="cfc-stat-number">N°1</div>
                    <div className="cfc-stat-label">Port africain</div>
                  </div>
                </div>
              </div>
              <div className="vision-list-vertical">
                <div className="vision-item">
                  <Truck className="check-icon green" size={20} />
                  <span>Industrie automobile : n°1 des exportations marocaines</span>
                </div>
                <div className="vision-item">
                  <Truck className="check-icon green" size={20} />
                  <span>TGV Al Boraq : Tanger-Casablanca en 2h10</span>
                </div>
                <div className="vision-item">
                  <Truck className="check-icon green" size={20} />
                  <span>Réseau autoroutier en expansion constante</span>
                </div>
              </div>
              <div className="diaspora-highlight">
                <ArrowRight size={20} />
                <span>Un hub stratégique entre Europe, Afrique et Amériques</span>
              </div>
            </div>
          </section>

          {/* Tourism */}
          <section className="content-section">
            <div className="section-header">
              <Plane className="section-icon" size={24} />
              <h2 className="section-title">Tourisme & grands événements</h2>
            </div>
            <div className="section-body">
              <p className="section-text">
                Avec 13 millions de touristes par an et un objectif de 20 millions d'ici 2030, 
                le Maroc mise sur les grands événements pour accélérer sa transformation.
              </p>
              <div className="vision-grid">
                <div className="vision-list">
                  <div className="vision-item">
                    <MapPin className="check-icon green" size={20} />
                    <div>
                      <div className="vision-title">13M visiteurs/an</div>
                      <div className="vision-subtitle">Objectif 20M en 2030</div>
                    </div>
                  </div>
                  <div className="vision-item">
                    <MapPin className="check-icon green" size={20} />
                    <div>
                      <div className="vision-title">Marrakech & Agadir</div>
                      <div className="vision-subtitle">Hubs touristiques premium</div>
                    </div>
                  </div>
                </div>
                <div className="vision-list">
                  <div className="vision-item special">
                    <Football className="trophy-icon" size={20} />
                    <div>
                      <div className="special-title">Coupe du Monde 2030</div>
                      <div className="vision-subtitle">Infrastructure modernisée</div>
                    </div>
                  </div>
                  <div className="vision-item special">
                    <Trophy className="trophy-icon" size={20} />
                    <div>
                      <div className="special-title">CAN 2025</div>
                      <div className="vision-subtitle">Stades et hôtels neufs</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="diaspora-highlight">
                <ArrowRight size={20} />
                <span>Opportunités : hôtellerie, restauration, digital travel</span>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="content-section">
            <div className="section-header">
              <GraduationCap className="section-icon" size={24} />
              <h2 className="section-title">Éducation et formation</h2>
            </div>
            <div className="section-body">
              <div className="highlight-box">
                <p>
                  12 millions d'élèves et étudiants au Maroc créent une demande massive 
                  en formation digitale et linguistique.
                </p>
              </div>
              <div className="vision-list-vertical">
                <div className="vision-item">
                  <GraduationCap className="check-icon green" size={20} />
                  <span>Forte demande en formation digitale et IA</span>
                </div>
                <div className="vision-item">
                  <GraduationCap className="check-icon green" size={20} />
                  <span>Opportunités pour écoles privées internationales</span>
                </div>
                <div className="vision-item">
                  <GraduationCap className="check-icon green" size={20} />
                  <span>Développement de l'EdTech et centres professionnels</span>
                </div>
                <div className="vision-item">
                  <GraduationCap className="check-icon green" size={20} />
                  <span>Formation linguistique (français, anglais, chinois)</span>
                </div>
              </div>
            </div>
          </section>

          {/* Entrepreneurs Morocco CTA */}
          <section className="content-section">
            <div className="section-header">
              <HandHeart className="section-icon" size={24} />
              <h2 className="section-title">Entrepreneurs Morocco : votre levier</h2>
            </div>
            <div className="cta-box">
              <p className="cta-intro">
                Nous vous accompagnons dans tous les secteurs porteurs du Maroc
              </p>
              <div className="cta-services">
                <div className="service-item">
                  <CheckCircle className="service-icon green" size={32} />
                  <div className="service-title green">Étude de marché</div>
                  <div className="service-description">
                    Analyse sectorielle approfondie et opportunités d'investissement
                  </div>
                </div>
                <div className="service-item">
                  <CheckCircle className="service-icon yellow" size={32} />
                  <div className="service-title yellow">Création d'entreprise</div>
                  <div className="service-description">
                    Formalités administratives et accompagnement juridique
                  </div>
                </div>
                <div className="service-item">
                  <CheckCircle className="service-icon red" size={32} />
                  <div className="service-title red">Réseau & fiscalité</div>
                  <div className="service-description">
                    Mise en relation et optimisation fiscale
                  </div>
                </div>
              </div>
              <div className="cta-button-container">
<Link href="/devis" className="cta-button">
  <ArrowRight size={20} />
  Contactez-nous → Entrepreneurs Morocco
</Link>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="content-section">
            <div className="section-header">
              <HelpCircle className="section-icon" size={24} />
              <h2 className="section-title">FAQ</h2>
            </div>
            <div className="faq-list">
              <div className="faq-item">
                <h3 className="faq-question">Quels sont les secteurs les plus porteurs au Maroc ?</h3>
                <p className="faq-answer">
                  Les énergies renouvelables, l'intelligence artificielle, la logistique, 
                  le tourisme et l'éducation offrent les meilleures opportunités de croissance.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">Quels avantages fiscaux pour les investisseurs ?</h3>
                <p className="faq-answer">
                  Casablanca Finance City offre des exonérations fiscales uniques, 
                  notamment sur l'impôt sur les sociétés et la TVA pour les entreprises éligibles.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">Comment choisir le bon secteur d'investissement ?</h3>
                <p className="faq-answer">
                  Nous réalisons une étude personnalisée de votre profil et des opportunités 
                  sectorielles pour vous orienter vers les investissements les plus adaptés.
                </p>
              </div>
            </div>
          </section>

          {/* Navigation to next article */}
          <section className="content-section">
            <div className="next-article">
              <h3 className="next-title">Article suivant</h3>
              <Link href="/articles/entreprendre-distance-france" className="next-button">
                 Comment les MRE et investisseurs bâtissent le Maroc de demain?
                <ArrowRight size={20} />
              </Link>
            </div>
          </section>
        </div>

        {/* Bottom spacing */}
        <div style={{ paddingBottom: '4rem' }} />
      </main>
    </div>
  );
};

export default Article2Page;