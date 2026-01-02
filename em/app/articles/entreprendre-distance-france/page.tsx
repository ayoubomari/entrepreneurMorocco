// app/articles/mre-investisseurs-maroc/page.tsx
'use client';
import"./article3.css";
import React from 'react';
import {
  ArrowLeft, Globe, Target, Zap, Users, Trophy,
  Briefcase, TrendingUp, CheckCircle, HelpCircle,
  ArrowRight, HandHeart, Sun, Clock, DollarSign,
  Star, Building2, Lightbulb
} from 'lucide-react';
import Link from 'next/link';

const Article3Page: React.FC = () => {
  return (
    <div className="article-container" style={{ backgroundColor: '#000000' }}>
      {/* Navigation */}
      <nav className="article-nav">
        <div className="nav-content">
          <Link href="/" className="nav-back">
            <ArrowLeft size={20} />
            <span>Retour aux articles</span>
          </Link>
          <div className="nav-counter">Article 3/4</div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-badge">
              <Target size={16} />
              ARTICLE 3 — Retour au pays
            </div>
            <h1 className="hero-title">
              Comment les <span className="text-accent">MRE</span> et investisseurs bâtissent le Maroc de demain
            </h1>
            <p className="hero-description">
              MRE et investisseurs étrangers : découvrez comment Vision 2030, la CAN 2025 
              et la Coupe du Monde 2030 font du Maroc une terre d'avenir.
            </p>
            <div className="hero-meta">
              <span>12 min de lecture</span>
              <span>•</span>
              <span>Guide MRE & Investisseurs</span>
            </div>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="stats-banner">
          <div className="stats-content">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">5,5M</div>
                <div className="stat-label">MRE dans le monde</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">11,4B$</div>
                <div className="stat-label">Transferts 2023</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">8%</div>
                <div className="stat-label">Du PIB national</div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <div className="article-content">
          {/* Diaspora Power */}
          <section className="content-section">
            <div className="section-header">
              <Globe className="section-icon" size={24} />
              <h2 className="section-title">Une diaspora puissante au service du Maroc</h2>
            </div>
            <div className="section-body">
              <p className="section-text">
                Le Maroc compte plus de 5,5 millions de Marocains Résidant à l'Étranger (MRE), 
                répartis dans plus de 100 pays à travers le monde.
              </p>
              <div className="diaspora-stats-box">
                <div className="diaspora-stat">
                  <div className="diaspora-stat-number">11,4B$</div>
                  <div className="diaspora-stat-label">Transferts en 2023</div>
                  <div className="diaspora-stat-detail">Soit près de 8% du PIB national</div>
                </div>
                <div className="diaspora-expertise">
                  <h4>Au-delà des transferts financiers :</h4>
                  <div className="expertise-grid">
                    <div className="expertise-item">
                      <Lightbulb className="expertise-icon" size={20} />
                      <span>Expertise technique</span>
                    </div>
                    <div className="expertise-item">
                      <Users className="expertise-icon" size={20} />
                      <span>Réseaux internationaux</span>
                    </div>
                    <div className="expertise-item">
                      <Star className="expertise-icon" size={20} />
                      <span>Innovation & startups</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="diaspora-highlight">
                <ArrowRight size={20} />
                <span>Les MRE deviennent aujourd'hui des acteurs stratégiques de l'économie nationale</span>
              </div>
            </div>
          </section>

          {/* Vision 2030 */}
          <section className="content-section">
            <div className="section-header">
              <Zap className="section-icon" size={24} />
              <h2 className="section-title">Vision 2030 : un cadre clair pour les investisseurs</h2>
            </div>
            <div className="section-body">
              <p className="section-text">
                La Vision 2030 fixe des objectifs ambitieux qui facilitent l'investissement 
                et ouvrent le pays aux projets internationaux.
              </p>
              <div className="vision-list-vertical">
                <div className="vision-item">
                  <CheckCircle className="check-icon green" size={20} />
                  <span>52% d'énergie verte dans le mix énergétique</span>
                </div>
                <div className="vision-item">
                  <CheckCircle className="check-icon green" size={20} />
                  <span>Digitalisation intégrale des services publics</span>
                </div>
                <div className="vision-item">
                  <CheckCircle className="check-icon green" size={20} />
                  <span>Déploiement de data centers IA à Casablanca et Rabat</span>
                </div>
                <div className="vision-item special">
                  <CheckCircle className="check-icon red" size={20} />
                  <span style={{ color: '#fca5a5' }}>Lancement d'une monnaie digitale nationale pour l'innovation financière</span>
                </div>
              </div>
              <div className="diaspora-highlight">
                <ArrowRight size={20} />
                <span>Ces réformes sécurisent les transactions et facilitent l'investissement international</span>
              </div>
            </div>
          </section>

          {/* Sports Events */}
          <section className="content-section">
            <div className="section-header">
              <Trophy className="section-icon" size={24} />
              <h2 className="section-title">Le sport, catalyseur économique et social</h2>
            </div>
            <div className="section-body">
              <p className="section-text">
                Deux événements majeurs transformeront le Maroc et représentent des milliards 
                d'investissements avec des milliers d'opportunités d'affaires.
              </p>
              <div className="sports-events-grid">
                <div className="event-card">
                  <div className="event-header">
                    <Trophy className="event-icon" size={24} />
                    <div>
                      <h3 className="event-title">CAN 2025</h3>
                      <p className="event-subtitle">Coupe d'Afrique des Nations</p>
                    </div>
                  </div>
                  <ul className="event-benefits">
                    <li>Modernisation des stades</li>
                    <li>Nouvelles infrastructures</li>
                    <li>Boost du tourisme africain</li>
                  </ul>
                </div>
                <div className="event-card special">
                  <div className="event-header">
                    <Globe className="event-icon" size={24} />
                    <div>
                      <h3 className="event-title special">Coupe du Monde 2030</h3>
                      <p className="event-subtitle">Vitrine mondiale</p>
                    </div>
                  </div>
                  <ul className="event-benefits">
                    <li>Immobilier de luxe</li>
                    <li>Tourisme international</li>
                    <li>Innovation digitale</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Casablanca Finance City */}
          <section className="content-section">
            <div className="section-header">
              <Building2 className="section-icon" size={24} />
              <h2 className="section-title">Casablanca Finance City : hub africain des affaires</h2>
            </div>
            <div className="section-body">
              <div className="cfc-box">
                <p className="cfc-intro">
                  CFC est classée parmi les 3 premières places financières d'Afrique
                </p>
                <div className="cfc-advantages">
                  <div className="advantage-item">
                    <DollarSign className="advantage-icon green" size={20} />
                    <span>Fiscalité attractive</span>
                  </div>
                  <div className="advantage-item">
                    <Zap className="advantage-icon yellow" size={20} />
                    <span>Implantation rapide</span>
                  </div>
                  <div className="advantage-item">
                    <Building2 className="advantage-icon red" size={20} />
                    <span>Hub multinationales</span>
                  </div>
                </div>
              </div>
              <div className="diaspora-highlight">
                <ArrowRight size={20} />
                <span>Pour un MRE ou investisseur étranger, Casablanca est la porte d'entrée vers l'Afrique</span>
              </div>
            </div>
          </section>

          {/* Success Stories */}
          <section className="content-section">
            <div className="section-header">
              <TrendingUp className="section-icon" size={24} />
              <h2 className="section-title">Témoignages inspirants : des MRE qui réussissent</h2>
            </div>
            <div className="section-body">
              <div className="testimonials-grid">
                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">S</div>
                    <div>
                      <h4 className="testimonial-name">Sarah</h4>
                      <p className="testimonial-role">Ingénieure • France → Maroc</p>
                    </div>
                  </div>
                  <p className="testimonial-content">
                    "J'ai lancé une EdTech IA à Casablanca. Aujourd'hui, je collabore 
                    avec des écoles en Afrique et en Europe."
                  </p>
                  <div className="testimonial-tag">EdTech & IA</div>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">A</div>
                    <div>
                      <h4 className="testimonial-name">Ahmed</h4>
                      <p className="testimonial-role">Entrepreneur • Belgique → Maroc</p>
                    </div>
                  </div>
                  <p className="testimonial-content">
                    "J'ai monté un atelier de cosmétiques bio au Maroc, utilisant 
                    des matières premières locales pour exporter vers l'Europe."
                  </p>
                  <div className="testimonial-tag">Cosmétiques Bio</div>
                </div>
              </div>
              <div className="highlight-box">
                <p>Ces histoires prouvent que le retour au Maroc est synonyme d'opportunités exceptionnelles.</p>
              </div>
            </div>
          </section>

          {/* Entrepreneurs Morocco */}
          <section className="content-section">
            <div className="section-header">
              <HandHeart className="section-icon" size={24} />
              <h2 className="section-title">Entrepreneurs Morocco : un accompagnement 360°</h2>
            </div>
            <div className="cta-box">
              <p className="cta-intro">
                Nous guidons chaque porteur de projet avant, pendant et après son installation
              </p>
              <div className="cta-services">
                <div className="service-item">
                  <CheckCircle className="service-icon green" size={32} />
                  <div className="service-title green">Avant</div>
                  <div className="service-description">
                    Audit, bilan de compétences, étude macro/micro marché
                  </div>
                </div>
                <div className="service-item">
                  <CheckCircle className="service-icon yellow" size={32} />
                  <div className="service-title yellow">Pendant</div>
                  <div className="service-description">
                    Création juridique, fiscalité, locaux, réseau professionnel
                  </div>
                </div>
                <div className="service-item">
                  <CheckCircle className="service-icon red" size={32} />
                  <div className="service-title red">Après</div>
                  <div className="service-description">
                    Suivi, croissance, mise en relation avec partenaires
                  </div>
                </div>
              </div>
              <div className="cta-button-container">
<Link href="/brochure" className="cta-button">
  <ArrowRight size={20} />
  Découvrez notre programme → Entrepreneurs Morocco
</Link>
              </div>
            </div>
          </section>

          {/* Open Morocco */}
          <section className="content-section">
            <div className="section-header">
              <Sun className="section-icon" size={24} />
              <h2 className="section-title">Un Maroc ouvert aux MRE et aux étrangers</h2>
            </div>
            <div className="section-body">
              <p className="section-text">
                Le Maroc n'accueille pas seulement ses enfants du monde... Il attire aussi 
                les digital nomads, freelances et investisseurs internationaux.
              </p>
              <div className="morocco-advantages">
                <div className="advantage-row">
                  <Sun className="adv-icon" size={20} />
                  <span>300 jours de soleil par an</span>
                </div>
                <div className="advantage-row">
                  <Clock className="adv-icon" size={20} />
                  <span>À 3h de l'Europe, 7h des USA</span>
                </div>
                <div className="advantage-row">
                  <DollarSign className="adv-icon" size={20} />
                  <span>Coût de vie -40% vs Dubaï</span>
                </div>
                <div className="advantage-row special">
                  <Star className="adv-icon" size={20} />
                  <span>Qualité de vie exceptionnelle</span>
                </div>
              </div>
              <div className="final-cta-box">
                <p>Ici, vous construisez votre futur tout en participant à l'avenir de l'Afrique.</p>
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
                <h3 className="faq-question">Un MRE peut-il créer facilement une entreprise au Maroc ?</h3>
                <p className="faq-answer">
                  Oui, les démarches sont simplifiées et en grande partie digitalisées. 
                  Le processus peut être complété en quelques semaines avec le bon accompagnement.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">Quels secteurs sont les plus porteurs pour les MRE ?</h3>
                <p className="faq-answer">
                  Les énergies renouvelables, le digital/IA, la logistique, le tourisme 
                  et l'éducation offrent les meilleures opportunités de croissance.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">Un étranger non marocain peut-il investir au Maroc ?</h3>
                <p className="faq-answer">
                  Absolument ! La législation marocaine est très ouverte aux investisseurs 
                  internationaux avec de nombreux avantages fiscaux disponibles.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="content-section">
            <div className="final-call-to-action">
              <h2 className="final-cta-title">Le Maroc a changé.</h2>
              <p className="final-cta-description">
                Il est stable, moderne, connecté, ouvert. Grâce à Vision 2030, 
                la CAN 2025 et la Coupe du Monde 2030, le pays s'impose comme 
                un leader africain et mondial.
              </p>
              <div className="final-cta-highlight">
                <ArrowRight size={24} />
                <span>Ne restez pas spectateur. Devenez acteur du changement.</span>
              </div>
              <div className="final-cta-button-container">
<Link href="/devis" className="final-cta-button">
  <HandHeart size={20} />
  Rejoignez Entrepreneurs Morocco
</Link>
              </div>
            </div>
          </section>

          {/* Navigation to next article */}
          <section className="content-section">
            <div className="next-article">
              <h3 className="next-title">Article suivant</h3>
              <Link href="/articles/creer-entreprise-etapes" className="next-button">
                Guide complet : créer son entreprise au Maroc
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

export default Article3Page;