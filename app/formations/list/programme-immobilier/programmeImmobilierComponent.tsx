"use client";

import "../../../articles/_styles/article.css";
import "./programmeImmobilier.css";

import React from "react";
import {
  ArrowRight,
  CheckCircle,
  Target,
  TrendingUp,
  Users,
  BookOpen,
  Scale,
  BarChart3,
  Handshake,
  Briefcase,
  Dot,
  Award,
  MapPin,
  Calendar,
  Lock,
  Plane,
  Home,
  Wallet,
  GraduationCap,
  ClipboardList,
  UserCheck,
  Send,
  DollarSign,
} from "lucide-react";
import Link from "next/link";

import { CloudRedEffect1 } from "@/components/CloudRedEffect";

const ProgrammeImmobilierComponent: React.FC = () => {
  return (
    <div className="article-page">
      {/* Background Effect */}
      <CloudRedEffect1 />

      {/* Main Wrapper — no nav at top per request */}
      <div className="article-wrap">
        {/* === HERO SECTION === */}
        <header className="article-hero">
          <div className="article-tag">
            <GraduationCap size={14} />
            Formation Immersive
          </div>

          <h1 className="article-title">
            Devenez Conseiller en Investissement Immobilier au{" "}
            <span className="text-red-500">Maroc</span>
          </h1>

          <p className="article-lead">
            Une formation immersive de 14 jours à Marrakech pour comprendre le
            marché immobilier marocain et accéder à des opportunités
            professionnelles dans le secteur.
          </p>

          <div className="prog-hero-stats">
            <div className="prog-hero-pill">
              <MapPin size={16} />
              Marrakech
            </div>
            <div className="prog-hero-pill">
              <Calendar size={16} />
              14 jours
            </div>
            <div className="prog-hero-pill">
              <Lock size={16} />
              Places limitées
            </div>
          </div>

          <div style={{ marginTop: "40px" }}>
            <Link href="/contact-quiz/" className="poly-btn red group">
              <span>Candidater à la prochaine session</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </header>

        {/* === CONTENT CONTAINER === */}
        <main className="content-container">
          {/* --- INTRO TEXT --- */}
          <div className="section-block intro-split">
            <div className="intro-split-text">
              <p className="article-text">
                Le marché immobilier marocain attire chaque année de nombreux
                investisseurs : entrepreneurs, expatriés, membres de la diaspora
                et investisseurs internationaux.
              </p>
              <p className="article-text">
                Ces investisseurs recherchent des opportunités, mais aussi des
                professionnels capables de comprendre le marché, analyser un
                investissement et sécuriser leurs décisions.
              </p>
              <p className="article-text">
                La formation{" "}
                <strong className="text-white">
                  Conseiller en Investissement Immobilier
                </strong>{" "}
                a été conçue pour transmettre les compétences essentielles afin
                d&apos;accompagner ces projets.
              </p>
              <p className="article-text">
                Pendant 14 jours, les participants découvrent les mécanismes du
                marché immobilier marocain et apprennent à analyser des projets
                d&apos;investissement de manière structurée.
              </p>
            </div>

            <div className="intro-split-image-wrapper">
              {/* NOUVEAU CONTENEUR POUR L'EFFET CADRE */}
              <div className="intro-image-cadre">
                <img
                  src="/immob.webp"
                  alt="Paysage immobilier Marrakech"
                  className="intro-image-clipped"
                />
              </div>
            </div>
          </div>

          {/* === POURQUOI CETTE FORMATION === */}
          <div className="section-block">
            <div className="section-header">
              <Target className="text-red-500" size={32} />
              <h2 className="section-title">Pourquoi cette formation</h2>
            </div>

            <div className="pourquoi-split">
              <div className="pourquoi-left">
                <p className="article-text">
                  L&apos;immobilier est aujourd&apos;hui l&apos;un des secteurs
                  les plus dynamiques au Maroc. Entre le développement de
                  nouvelles infrastructures, l&apos;attractivité touristique et
                  l&apos;intérêt croissant des investisseurs étrangers, le
                  marché immobilier offre de nombreuses opportunités.
                </p>
                <p className="article-text">
                  Cependant, investir dans l&apos;immobilier nécessite une
                  compréhension claire :
                </p>

                <div className="space-y-2 mb-8">
                  <div className="glass-list-item">
                    <CheckCircle
                      className="text-green-500 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-md font-medium">
                      Du fonctionnement du marché
                    </span>
                  </div>
                  <div className="glass-list-item">
                    <CheckCircle
                      className="text-green-500 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-md font-medium">
                      Des dynamiques locales
                    </span>
                  </div>
                  <div className="glass-list-item">
                    <CheckCircle
                      className="text-green-500 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-md font-medium">
                      De la rentabilité des projets
                    </span>
                  </div>
                  <div className="glass-list-item">
                    <CheckCircle
                      className="text-green-500 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-md font-medium">
                      Des étapes d&apos;une transaction immobilière
                    </span>
                  </div>
                </div>

                <div className="glass-box highlight">
                  <p className="text-white font-semibold m-0 text-lg">
                    Cette formation permet d&apos;acquérir les bases nécessaires
                    pour analyser un investissement immobilier et comprendre les
                    mécanismes du secteur.
                  </p>
                </div>
              </div>

              <div className="pourquoi-right">
                <div className="pourquoi-card">
                  <div className="pourquoi-card-icon">📈</div>
                  <div className="pourquoi-card-label">Rentabilité</div>
                </div>
                <div className="pourquoi-card">
                  <div className="pourquoi-card-icon">🏛️</div>
                  <div className="pourquoi-card-label">Fiscalité</div>
                </div>
                <div className="pourquoi-card">
                  <div className="pourquoi-card-icon">🏗️</div>
                  <div className="pourquoi-card-label">Promotion</div>
                </div>
                <div className="pourquoi-card">
                  <div className="pourquoi-card-icon">🤝</div>
                  <div className="pourquoi-card-label">Networking</div>
                </div>
              </div>
            </div>
          </div>

          {/* === À QUI S'ADRESSE CETTE FORMATION === */}
          <div className="section-block">
            <div className="section-header">
              <Users className="text-red-500" size={32} />
              <h2 className="section-title">
                À qui s&apos;adresse cette formation
              </h2>
            </div>

            <p className="article-text">
              Cette formation s&apos;adresse aux personnes souhaitant développer
              une expertise dans le secteur immobilier ou comprendre les
              mécanismes de l&apos;investissement immobilier.
            </p>
            <p className="article-text">
              Elle est particulièrement adaptée pour :
            </p>

            <div className="space-y-2 mb-8">
              <div className="glass-list-item">
                <CheckCircle
                  className="text-green-500 flex-shrink-0"
                  size={20}
                />
                <span className="text-md font-medium">
                  Les personnes en reconversion professionnelle
                </span>
              </div>
              <div className="glass-list-item">
                <CheckCircle
                  className="text-green-500 flex-shrink-0"
                  size={20}
                />
                <span className="text-md font-medium">
                  Les commerciaux souhaitant évoluer dans l&apos;immobilier
                </span>
              </div>
              <div className="glass-list-item">
                <CheckCircle
                  className="text-green-500 flex-shrink-0"
                  size={20}
                />
                <span className="text-md font-medium">
                  Les entrepreneurs intéressés par l&apos;investissement
                  immobilier
                </span>
              </div>
              <div className="glass-list-item">
                <CheckCircle
                  className="text-green-500 flex-shrink-0"
                  size={20}
                />
                <span className="text-md font-medium">
                  Les profils souhaitant travailler dans l&apos;immobilier au
                  Maroc
                </span>
              </div>
              <div className="glass-list-item">
                <CheckCircle
                  className="text-green-500 flex-shrink-0"
                  size={20}
                />
                <span className="text-md font-medium">
                  Les personnes souhaitant comprendre les opportunités
                  immobilières
                </span>
              </div>
            </div>

            <p className="article-text" style={{ fontStyle: "italic" }}>
              Aucune expérience préalable dans l&apos;immobilier n&apos;est
              obligatoire.
            </p>
          </div>

          {/* === LE PROGRAMME DE LA FORMATION === */}
          <div className="section-block">
            <div className="section-header">
              <BookOpen className="text-red-500" size={32} />
              <h2 className="section-title">Le programme de la formation</h2>
            </div>

            <div className="timeline-container">
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <h3 className="timeline-title">
                    Comprendre le marché immobilier marocain
                  </h3>
                  <ul className="timeline-bullets">
                    <li>Fonctionnement du marché immobilier au Maroc</li>
                    <li>Analyse des différentes typologies de biens</li>
                    <li>Identification des zones à fort potentiel</li>
                    <li>Compréhension des dynamiques de marché</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <h3 className="timeline-title">
                    Cadre juridique et sécurisation des projets
                  </h3>
                  <ul className="timeline-bullets">
                    <li>Étapes d&apos;une transaction immobilière</li>
                    <li>Compréhension des contrats</li>
                    <li>Sécurisation des investissements</li>
                    <li>
                      Rôle des différents intervenants dans une opération
                      immobilière
                    </li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <h3 className="timeline-title">
                    Analyse d&apos;un investissement immobilier
                  </h3>
                  <ul className="timeline-bullets">
                    <li>Calcul de rentabilité</li>
                    <li>Analyse financière d&apos;un projet</li>
                    <li>Étude de cas concrets</li>
                    <li>
                      Identification des critères d&apos;un investissement
                      pertinent
                    </li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <h3 className="timeline-title">
                    Accompagnement des investisseurs
                  </h3>
                  <ul className="timeline-bullets">
                    <li>Compréhension des objectifs d&apos;un investisseur</li>
                    <li>
                      Présentation d&apos;opportunités d&apos;investissement
                    </li>
                    <li>Structuration d&apos;un projet immobilier</li>
                    <li>
                      Approche professionnelle de la relation investisseur
                    </li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item timeline-item-last">
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <h3 className="timeline-title">
                    Mise en situation professionnelle
                  </h3>
                  <p className="timeline-desc">
                    Les participants travaillent sur des cas concrets permettant
                    d&apos;appliquer les méthodes étudiées durant la formation.
                    Cette approche permet de développer une compréhension
                    pratique du métier.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* === REVENUS POSSIBLES === */}
          <div className="section-block">
            <div className="section-header">
              <TrendingUp className="text-red-500" size={32} />
              <h2 className="section-title">
                Revenus possibles après la formation
              </h2>
            </div>

            <p className="article-text">
              Le métier de conseiller en investissement immobilier repose sur un
              modèle de rémunération basé en grande partie sur la performance.
            </p>
            <p className="article-text">
              Dans le secteur immobilier marocain, la commission d&apos;une
              transaction peut représenter environ{" "}
              <strong className="text-white">5 % du prix du bien</strong>,
              généralement répartie entre l&apos;agence et les conseillers.
            </p>

            {/* Funnel Visual */}
            <div className="funnel-grid">
              <div className="funnel-step">
                <div className="funnel-step-label">
                  Prix d&apos;un bien immobilier
                </div>
                <div className="funnel-step-value">2 000 000 MAD</div>
              </div>

              <div className="funnel-arrow">
                <ArrowRight size={24} />
              </div>

              <div className="funnel-step">
                <div className="funnel-step-label">Commission agence (5 %)</div>
                <div className="funnel-step-value">100 000 MAD</div>
              </div>

              <div className="funnel-arrow">
                <ArrowRight size={24} />
              </div>

              <div className="funnel-result">
                <div className="funnel-result-label">
                  Part conseiller (20 % à 40 %)
                </div>
                <div className="funnel-result-value">20 000 à 40 000 MAD</div>
                <div className="funnel-note">Pour une seule transaction</div>
              </div>
            </div>

            <div className="glass-box highlight">
              <p className="text-white font-semibold m-0 text-lg">
                Un conseiller actif peut réaliser plusieurs transactions par an,
                ce qui permet d&apos;atteindre des revenus significatifs selon
                l&apos;activité et le réseau développé.
              </p>
            </div>
          </div>

          {/* === EXAMEN FINAL === */}
          <div className="section-block">
            <div className="section-header">
              <Award className="text-red-500" size={32} />
              <h2 className="section-title">Examen final</h2>
            </div>

            <p className="article-text">
              À l&apos;issue de la formation, les participants passent une
              évaluation devant un jury professionnel.
            </p>
            <p className="article-text">Cette évaluation comprend :</p>

            <div className="space-y-2 mb-8">
              <div className="glass-list-item">
                <CheckCircle
                  className="text-green-500 flex-shrink-0"
                  size={20}
                />
                <span className="text-md font-medium">
                  L&apos;analyse d&apos;un projet immobilier
                </span>
              </div>
              <div className="glass-list-item">
                <CheckCircle
                  className="text-green-500 flex-shrink-0"
                  size={20}
                />
                <span className="text-md font-medium">
                  La présentation d&apos;une stratégie d&apos;investissement
                </span>
              </div>
              <div className="glass-list-item">
                <CheckCircle
                  className="text-green-500 flex-shrink-0"
                  size={20}
                />
                <span className="text-md font-medium">
                  Une mise en situation professionnelle
                </span>
              </div>
            </div>

            <div
              className="glass-box"
              style={{
                borderColor: "rgba(239, 68, 68, 0.3)",
                background: "rgba(239, 68, 68, 0.05)",
              }}
            >
              <p className="text-red-100 font-bold m-0 text-lg">
                Les profils validés peuvent accéder à des opportunités
                professionnelles dans des agences partenaires à Marrakech.
              </p>
            </div>
          </div>

          {/* === INVESTISSEMENT POUR LA FORMATION === */}
          <div className="section-block">
            <div className="section-header">
              <DollarSign className="text-red-500" size={32} />
              <h2 className="section-title">
                Investissement pour la formation
              </h2>
            </div>

            <div className="pricing-grid">
              {/* LEFT: Pricing Card */}
              <div className="pricing-card-unified">
                <div className="pricing-ribbon">Places limitées</div>
                <div className="pricing-card-top">
                  <div className="pricing-badge">Tarif de la formation</div>
                  <div className="pricing-amount">
                    2 499 <span>€</span>
                  </div>
                </div>

                <div className="pricing-divider" />

                <div className="pricing-card-bottom">
                  <p className="pricing-includes-label">Ce tarif comprend :</p>
                  <div className="pricing-includes">
                    <div className="pricing-include-item">
                      <CheckCircle size={18} />
                      L&apos;accès à l&apos;intégralité du programme
                    </div>
                    <div className="pricing-include-item">
                      <CheckCircle size={18} />
                      Les sessions pédagogiques pendant 14 jours
                    </div>
                    <div className="pricing-include-item">
                      <CheckCircle size={18} />
                      Les études de cas et mises en situation
                    </div>
                    <div className="pricing-include-item">
                      <CheckCircle size={18} />
                      L&apos;évaluation finale devant jury
                    </div>
                    <div className="pricing-include-item">
                      <CheckCircle size={18} />
                      L&apos;accès au réseau Entrepreneurs Morocco
                    </div>
                    <div className="pricing-include-item">
                      <CheckCircle size={18} />
                      Entretien d&apos;embauche dès le lendemain de la formation
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT: À prévoir par le participant */}
              <div className="provisions-card">
                <div className="provisions-card-top">
                  <div className="provisions-badge">
                    À prévoir par le participant
                  </div>
                  <Briefcase
                    className="text-red-500 mx-auto"
                    size={28}
                    style={{ marginBottom: "12px" }}
                  />
                  <p className="provisions-subtitle">
                    Les participants doivent prévoir les éléments suivants, non
                    inclus dans le tarif de la formation
                  </p>
                </div>

                <div className="provisions-card-body">
                  <div className="provision-item">
                    <Plane size={18} />
                    Leur billet d&apos;avion jusqu&apos;à Marrakech
                  </div>
                  <div className="provision-item">
                    <Home size={18} />
                    Leur hébergement pendant la formation
                  </div>
                  <div className="provision-item">
                    <Wallet size={18} />
                    Leurs dépenses personnelles sur place
                  </div>
                  <p className="provisions-note">
                    Marrakech dispose d&apos;une large offre d&apos;hébergement
                    permettant d&apos;organiser son séjour selon ses
                    préférences.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* === PROCESSUS D'ADMISSION === */}
          <div className="section-block">
            <div className="section-header">
              <ClipboardList className="text-red-500" size={32} />
              <h2 className="section-title">Processus d&apos;admission</h2>
            </div>

            <p className="article-text">
              L&apos;accès à la formation se fait sur candidature. Le processus
              comprend :
            </p>

            <div className="admission-steps">
              <div className="admission-step">
                <div className="admission-step-number">1</div>
                <div className="admission-step-text">
                  Dépôt d&apos;une candidature
                </div>
              </div>
              <div className="admission-step">
                <div className="admission-step-number">2</div>
                <div className="admission-step-text">Étude du profil</div>
              </div>
              <div className="admission-step">
                <div className="admission-step-number">3</div>
                <div className="admission-step-text">
                  Validation de l&apos;inscription
                </div>
              </div>
              <div className="admission-step">
                <div className="admission-step-number">4</div>
                <div className="admission-step-text">
                  Participation à la formation
                </div>
              </div>
            </div>

            <div className="glass-box highlight">
              <p className="text-white font-semibold m-0 text-lg">
                Les places étant limitées, les candidatures sont étudiées avant
                validation.
              </p>
            </div>
          </div>

          {/* === FAQ === */}
          <div className="section-block">
            <div className="section-header">
              <BookOpen className="text-red-500" size={32} />
              <h2 className="section-title">FAQ</h2>
            </div>

            <div className="faq-list">
              <details className="faq-item">
                <summary className="faq-question">
                  Faut-il une expérience préalable dans l&apos;immobilier ?
                  <span className="faq-icon">▾</span>
                </summary>
                <div className="faq-answer">
                  Aucune expérience préalable dans l&apos;immobilier n&apos;est
                  obligatoire. La formation est accessible à toute personne
                  motivée souhaitant comprendre les mécanismes du secteur.
                </div>
              </details>

              <details className="faq-item">
                <summary className="faq-question">
                  Où se déroule la formation ?
                  <span className="faq-icon">▾</span>
                </summary>
                <div className="faq-answer">
                  La formation se déroule à Marrakech sur une durée de 14 jours.
                  Les participants doivent prévoir leur billet d&apos;avion,
                  leur hébergement et leurs dépenses personnelles sur place.
                  Marrakech dispose d&apos;une large offre d&apos;hébergement.
                </div>
              </details>

              <details className="faq-item">
                <summary className="faq-question">
                  Qu&apos;est-ce qui est inclus dans le tarif de 2 499 € ?
                  <span className="faq-icon">▾</span>
                </summary>
                <div className="faq-answer">
                  Le tarif inclut l&apos;accès à l&apos;intégralité du
                  programme, les sessions pédagogiques pendant 14 jours, les
                  études de cas et mises en situation, l&apos;évaluation finale
                  devant jury, l&apos;accès au réseau Entrepreneurs Morocco, et
                  un entretien d&apos;embauche dès le lendemain de la formation.
                </div>
              </details>

              <details className="faq-item">
                <summary className="faq-question">
                  Que se passe-t-il après l&apos;examen final ?
                  <span className="faq-icon">▾</span>
                </summary>
                <div className="faq-answer">
                  Les profils validés peuvent accéder à des opportunités
                  professionnelles dans des agences partenaires à Marrakech. Un
                  entretien d&apos;embauche est organisé dès le lendemain de la
                  formation.
                </div>
              </details>

              <details className="faq-item">
                <summary className="faq-question">
                  Comment soumettre ma candidature ?
                  <span className="faq-icon">▾</span>
                </summary>
                <div className="faq-answer">
                  Le processus comprend quatre étapes : dépôt d&apos;une
                  candidature, étude du profil, validation de
                  l&apos;inscription, puis participation à la formation. Les
                  candidatures sont étudiées avant validation.
                </div>
              </details>

              <details className="faq-item">
                <summary className="faq-question">
                  Les places sont-elles vraiment limitées ?
                  <span className="faq-icon">▾</span>
                </summary>
                <div className="faq-answer">
                  Oui. Les places étant limitées, les candidatures sont étudiées
                  et validées dans l&apos;ordre de réception. Il est recommandé
                  de candidater le plus tôt possible pour garantir sa place dans
                  la prochaine session.
                </div>
              </details>
            </div>
          </div>

          {/* === FINAL CTA === */}
          <div className="final-cta-glass section-block">
            <GraduationCap className="text-red-500 mx-auto mb-6" size={48} />
            <h2 className="text-3xl font-black text-white uppercase mb-4">
              Rejoindre la prochaine session
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Cette formation s&apos;adresse aux personnes souhaitant comprendre
              les mécanismes de l&apos;investissement immobilier et développer
              une expertise recherchée dans le marché immobilier marocain.
            </p>

            <Link href="/contact-quiz/" className="poly-btn red group">
              <span>Candidater à la prochaine session</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </main>
      </div>

      <div
        style={{
          position: "fixed",
          bottom: "24px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 9999,
          pointerEvents: "auto",
        }}
      >
        <div
          style={{
            background: "rgba(15, 15, 15, 0.92)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(239, 68, 68, 0.4)",
            padding: "14px 24px",
            borderRadius: "999px",
            boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span
              style={{
                width: "10px",
                height: "10px",
                background: "#22c55e",
                borderRadius: "50%",
                display: "inline-block",
                animation: "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
              }}
            />
            <span
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: "rgba(255,255,255,0.9)",
              }}
            >
              Prochaine session bientôt —{" "}
              <span style={{ color: "#ef4444" }}>4 places restantes</span>
            </span>
          </div>
          <Link
            href="/contact-quiz/"
            style={{
              background: "#ef4444",
              color: "#fff",
              fontSize: "11px",
              fontWeight: 900,
              padding: "8px 20px",
              borderRadius: "999px",
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              transition: "background 0.2s",
              whiteSpace: "nowrap",
            }}
          >
            Postuler
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProgrammeImmobilierComponent;
