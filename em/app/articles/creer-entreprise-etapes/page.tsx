// app/articles/digital-nomads-maroc-dubai/page.tsx
'use client';
import "./article4.css"
import React from 'react';
import {
  ArrowLeft, Globe, Target, Wifi, Sun, Clock,
  DollarSign, Zap, TrendingUp, CheckCircle, HelpCircle,
  ArrowRight, HandHeart, Laptop, Building2, Users,
  Trophy, Plane, MapPin, Star, Coffee, Flag
} from 'lucide-react';
import Link from 'next/link';

const Article4Page: React.FC = () => {
  return (
    <div className="article-container" style={{ backgroundColor: '#000000' }}>
      {/* Navigation */}
      <nav className="article-nav">
        <div className="nav-content">
          <Link href="/" className="nav-back">
            <ArrowLeft size={20} />
            <span>Retour aux articles</span>
          </Link>
          <div className="nav-counter">Article 4/4</div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-badge">
              <Target size={16} />
              ARTICLE 4 — Digital nomads et freelances
            </div>
            <h1 className="hero-title">
              Pourquoi choisir le <span className="text-accent">Maroc</span> plutôt que Dubaï ?
            </h1>
            <p className="hero-description">
              Digital nomads : découvrez pourquoi le Maroc surpasse Dubaï avec Vision 2030, 
              coût réduit, fibre optique et événements mondiaux.
            </p>
            <div className="hero-meta">
              <span>8 min de lecture</span>
              <span>•</span>
              <span>Guide Digital Nomads</span>
            </div>
          </div>
        </section>

        {/* Comparison Banner */}
        <section className="comparison-banner">
          <div className="comparison-content">
            <div className="comparison-grid">
              <div className="comparison-item morocco">
                <div className="comparison-flag">🇲🇦</div>
                <div className="comparison-title">Maroc</div>
                <div className="comparison-highlight">-40% coût vs Dubaï</div>
              </div>
              <div className="comparison-vs">VS</div>
              <div className="comparison-item dubai">
                <div className="comparison-flag">🇦🇪</div>
                <div className="comparison-title">Dubaï</div>
                <div className="comparison-highlight">Coût élevé</div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <div className="article-content">
          {/* Morocco as Digital Hub */}
          <section className="content-section">
            <div className="section-header">
              <Globe className="section-icon" size={24} />
              <h2 className="section-title">Le Maroc, nouveau hub pour digital nomads</h2>
            </div>
            <div className="section-body">
              <p className="section-text">
                Le Maroc s'impose comme la destination de choix pour les digital nomads 
                et freelances grâce à ses avantages uniques et sa modernisation rapide.
              </p>
              <div className="nomad-advantages-grid">
                <div className="advantage-card">
                  <Sun className="advantage-icon" size={32} />
                  <div className="advantage-number">300</div>
                  <div className="advantage-label">Jours de soleil/an</div>
                  <div className="advantage-detail">Climat parfait toute l'année</div>
                </div>
                <div className="advantage-card">
                  <Clock className="advantage-icon" size={32} />
                  <div className="advantage-number">3h</div>
                  <div className="advantage-label">De l'Europe</div>
                  <div className="advantage-detail">7h des USA - Fuseau GMT</div>
                </div>
                <div className="advantage-card">
                  <Wifi className="advantage-icon" size={32} />
                  <div className="advantage-number">100%</div>
                  <div className="advantage-label">Fibre optique</div>
                  <div className="advantage-detail">Ultra-rapide, coworkings modernes</div>
                </div>
                <div className="advantage-card special">
                  <DollarSign className="advantage-icon" size={32} />
                  <div className="advantage-number">-40%</div>
                  <div className="advantage-label">Coût vs Dubaï</div>
                  <div className="advantage-detail">Qualité de vie supérieure</div>
                </div>
              </div>
            </div>
          </section>

          {/* Vision 2030 */}
          <section className="content-section">
            <div className="section-header">
              <Zap className="section-icon" size={24} />
              <h2 className="section-title">Vision 2030 et attractivité internationale</h2>
            </div>
            <div className="section-body">
              <div className="highlight-box">
                <p>Le Maroc sera un hub global pour les freelances et startups grâce à sa transformation digitale.</p>
              </div>
              <div className="vision-features">
                <div className="feature-item">
                  <Building2 className="feature-icon" size={20} />
                  <div className="feature-content">
                    <h4>Digitalisation intégrale</h4>
                    <p>Services publics 100% numériques, démarches simplifiées</p>
                  </div>
                </div>
                <div className="feature-item">
                  <MapPin className="feature-icon" size={20} />
                  <div className="feature-content">
                    <h4>Villes intelligentes</h4>
                    <p>Smart cities à Casablanca, Rabat et Marrakech</p>
                  </div>
                </div>
                <div className="feature-item special">
                  <Trophy className="feature-icon" size={20} />
                  <div className="feature-content">
                    <h4>Événements mondiaux</h4>
                    <p>Coupe du Monde 2030 et CAN 2025 = vitrine internationale</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Opportunities */}
          <section className="content-section">
            <div className="section-header">
              <TrendingUp className="section-icon" size={24} />
              <h2 className="section-title">Opportunités pour freelances et startups</h2>
            </div>
            <div className="section-body">
              <p className="section-text">
                Le marché marocain offre des opportunités exceptionnelles avec 
                des infrastructures modernes et une croissance digitale explosive.
              </p>
              <div className="opportunities-list">
                <div className="opportunity-item">
                  <div className="opportunity-stat">+20%/an</div>
                  <div className="opportunity-content">
                    <h4>E-commerce en explosion</h4>
                    <p>Marché digital en forte croissance, opportunités B2B et B2C</p>
                  </div>
                </div>
                <div className="opportunity-item">
                  <div className="opportunity-stat">IA</div>
                  <div className="opportunity-content">
                    <h4>Intelligence Artificielle</h4>
                    <p>Développement des IA et FinTech, écosystème tech innovant</p>
                  </div>
                </div>
                <div className="opportunity-item">
                  <div className="opportunity-stat">TGV</div>
                  <div className="opportunity-content">
                    <h4>Infrastructures modernes</h4>
                    <p>Ports, aéroports, TGV Al Boraq - connectivité maximale</p>
                  </div>
                </div>
              </div>

              {/* Morocco vs Dubai Comparison */}
              <div className="detailed-comparison">
                <h3 className="comparison-section-title">Maroc vs Dubaï : comparaison détaillée</h3>
                <div className="comparison-table">
                  <div className="comparison-row header">
                    <div className="comparison-cell">Critère</div>
                    <div className="comparison-cell morocco-col"><Flag size={16} style={{display: 'inline', marginRight: '0.25rem'}} /> Maroc</div>
                    <div className="comparison-cell dubai-col"><MapPin size={16} style={{display: 'inline', marginRight: '0.25rem'}} /> Dubaï</div>
                  </div>
                  <div className="comparison-row">
                    <div className="comparison-cell">Coût de vie</div>
                    <div className="comparison-cell morocco-col winner">800-1200€/mois</div>
                    <div className="comparison-cell dubai-col">2000-3000€/mois</div>
                  </div>
                  <div className="comparison-row">
                    <div className="comparison-cell">Internet</div>
                    <div className="comparison-cell morocco-col winner">Fibre 100Mbps - 25€</div>
                    <div className="comparison-cell dubai-col">100Mbps - 80€</div>
                  </div>
                  <div className="comparison-row">
                    <div className="comparison-cell">Climat</div>
                    <div className="comparison-cell morocco-col winner">300 jours soleil</div>
                    <div className="comparison-cell dubai-col">Très chaud été</div>
                  </div>
                  <div className="comparison-row">
                    <div className="comparison-cell">Proximité Europe</div>
                    <div className="comparison-cell morocco-col winner">3h de vol</div>
                    <div className="comparison-cell dubai-col">6-7h de vol</div>
                  </div>
                  <div className="comparison-row">
                    <div className="comparison-cell">Culture</div>
                    <div className="comparison-cell morocco-col winner">Riche patrimoine</div>
                    <div className="comparison-cell dubai-col">Moderne mais récent</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cities for Digital Nomads */}
          <section className="content-section">
            <div className="section-header">
              <Coffee className="section-icon" size={24} />
              <h2 className="section-title">Les meilleures villes pour digital nomads</h2>
            </div>
            <div className="section-body">
              <div className="cities-grid">
                <div className="city-card">
                  <div className="city-header">
                    <h3 className="city-name">Casablanca</h3>
                    <div className="city-type">Hub économique</div>
                  </div>
                  <div className="city-features">
                    <div className="city-feature">
                      <Building2 size={16} />
                      <span>Finance City</span>
                    </div>
                    <div className="city-feature">
                      <Wifi size={16} />
                      <span>50+ coworkings</span>
                    </div>
                    <div className="city-feature">
                      <Users size={16} />
                      <span>Communauté tech</span>
                    </div>
                  </div>
                  <div className="city-cost">À partir de 600€/mois</div>
                </div>

                <div className="city-card">
                  <div className="city-header">
                    <h3 className="city-name">Marrakech</h3>
                    <div className="city-type">Lifestyle & Culture</div>
                  </div>
                  <div className="city-features">
                    <div className="city-feature">
                      <Sun size={16} />
                      <span>Climat parfait</span>
                    </div>
                    <div className="city-feature">
                      <Coffee size={16} />
                      <span>Cafés nomades</span>
                    </div>
                    <div className="city-feature">
                      <Star size={16} />
                      <span>Qualité de vie</span>
                    </div>
                  </div>
                  <div className="city-cost">À partir de 500€/mois</div>
                </div>

                <div className="city-card">
                  <div className="city-header">
                    <h3 className="city-name">Rabat</h3>
                    <div className="city-type">Capital & Innovation</div>
                  </div>
                  <div className="city-features">
                    <div className="city-feature">
                      <Building2 size={16} />
                      <span>Institutions</span>
                    </div>
                    <div className="city-feature">
                      <Zap size={16} />
                      <span>Startups gov</span>
                    </div>
                    <div className="city-feature">
                      <Plane size={16} />
                      <span>Aéroport proche</span>
                    </div>
                  </div>
                  <div className="city-cost">À partir de 700€/mois</div>
                </div>
              </div>
            </div>
          </section>

          {/* Entrepreneurs Morocco CTA */}
          <section className="content-section">
            <div className="section-header">
              <HandHeart className="section-icon" size={24} />
              <h2 className="section-title">Entrepreneurs Morocco : votre partenaire</h2>
            </div>
            <div className="nomad-cta-box">
              <div className="nomad-cta-header">
                <Laptop className="nomad-cta-icon" size={48} />
                <div>
                  <h3>Installation complète pour digital nomads</h3>
                  <p>De l'arrivée à votre premier client marocain</p>
                </div>
              </div>
              <div className="nomad-services">
                <div className="nomad-service">
                  <CheckCircle className="service-check green" size={20} />
                  <span>Formalités administratives complètes</span>
                </div>
                <div className="nomad-service">
                  <CheckCircle className="service-check yellow" size={20} />
                  <span>Installation locale (logement, internet, banking)</span>
                </div>
                <div className="nomad-service">
                  <CheckCircle className="service-check red" size={20} />
                  <span>Mise en réseau avec clients & partenaires locaux</span>
                </div>
              </div>
              <div className="nomad-cta-button-container">
                <Link href="/contact-quiz" className="nomad-cta-button">
                  <ArrowRight size={20} />
                  Installez votre business au Maroc → Entrepreneurs Morocco
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
                <h3 className="faq-question">Pourquoi le Maroc est-il mieux que Dubaï pour les digital nomads ?</h3>
                <p className="faq-answer">
                  Coût de vie 40% inférieur, proximité avec l'Europe, stabilité politique, 
                  qualité de vie exceptionnelle et patrimoine culturel riche.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">Quels secteurs offrent le plus d'opportunités pour les freelances ?</h3>
                <p className="faq-answer">
                  Tech, design, marketing digital, intelligence artificielle, consulting, 
                  e-commerce et développement web sont particulièrement porteurs.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">Comment est la connexion internet au Maroc ?</h3>
                <p className="faq-answer">
                  Excellente ! Fibre optique ultra-rapide disponible partout, 
                  nombreux coworkings modernes et connectivité internationale optimale.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">Quel budget prévoir pour s'installer au Maroc ?</h3>
                <p className="faq-answer">
                  Entre 800-1200€/mois pour un excellent niveau de vie, 
                  soit 40-60% moins cher que Dubaï pour une qualité équivalente.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="content-section">
            <div className="final-nomad-cta">
              <div className="final-nomad-content">
                <h2 className="final-nomad-title"><Zap size={24} style={{display: 'inline', marginRight: '0.5rem'}} /> Prêt à faire le grand saut ?</h2>
                <p className="final-nomad-description">
                  Le Maroc vous attend avec ses 300 jours de soleil, sa fibre optique ultra-rapide, 
                  ses coûts réduits et ses opportunités infinies.
                </p>
                <div className="final-nomad-stats">
                  <div className="final-stat">
                    <span className="final-stat-number">40%</span>
                    <span className="final-stat-label">Économies vs Dubaï</span>
                  </div>
                  <div className="final-stat">
                    <span className="final-stat-number">3h</span>
                    <span className="final-stat-label">De l'Europe</span>
                  </div>
                  <div className="final-stat">
                    <span className="final-stat-number">300</span>
                    <span className="final-stat-label">Jours de soleil</span>
                  </div>
                </div>
                <div className="final-nomad-button-container">
                  <Link href="/commencez-un-projet" className="final-nomad-button">
                    <Globe size={20} />
                    Lancez votre aventure marocaine
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Back to articles */}
          <section className="content-section">
            <div className="next-article">
              <h3 className="next-title">Découvrir tous nos guides</h3>
              <Link href="/" className="next-button">
                Retour aux articles
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

export default Article4Page;