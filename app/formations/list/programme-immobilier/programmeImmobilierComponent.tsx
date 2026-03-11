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
  DollarSign,
  HelpCircle,
  ChevronDown,
  Building2,
} from "lucide-react";
import Link from "next/link";

import { CloudRedEffect1 } from "@/components/CloudRedEffect";

// ============================================
// DATA
// ============================================

const faqs = [
  {
    q: "Faut-il une expérience préalable dans l'immobilier ?",
    a: "Aucune expérience préalable dans l'immobilier n'est obligatoire. La formation est ouverte à toute personne motivée souhaitant comprendre les mécanismes du secteur.",
  },
  {
    q: "Qu'est-ce qui est inclus dans le tarif de 2 499 € ?",
    a: "Le tarif comprend l'accès à l'intégralité du programme, les sessions pédagogiques pendant 14 jours, les études de cas et mises en situation, l'évaluation finale devant un jury, l'accès au réseau Entrepreneurs Morocco, ainsi qu'un entretien d'embauche dès le lendemain de la formation.",
  },
  {
    q: "Que se passe-t-il après l'examen final ?",
    a: "Les profils validés peuvent accéder à des opportunités professionnelles dans des agences partenaires à Marrakech. Un entretien d'embauche est d'ailleurs prévu dès le lendemain de la formation.",
  },
  {
    q: "Comment soumettre ma candidature ?",
    a: "Le processus se fait en 4 étapes : le dépôt d'une candidature, l'étude de votre profil, la validation de l'inscription, et enfin la participation à la formation.",
  },
];

// ============================================
// HERO SECTION
// ============================================
const HeroSection: React.FC = () => {
  return (
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
  );
};

// ============================================
// INTRO SECTION
// ============================================

const IntroSection: React.FC = () => {
  return (
    <div className="section-block intro-split">
      <div className="intro-split-text">
        <p className="article-text">
          Le marché immobilier marocain attire chaque année de nombreux
          investisseurs : entrepreneurs, expatriés, membres de la diaspora et
          investisseurs internationaux.
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
          Pendant 14 jours, les participants découvrent les mécanismes du marché
          immobilier marocain et apprennent à analyser des projets
          d&apos;investissement de manière structurée.
        </p>
      </div>

      <div className="intro-split-image-wrapper">
        <div className="intro-image-cadre">
          <img
            src="/immob.webp"
            alt="Paysage immobilier Marrakech"
            className="intro-image-clipped"
          />
        </div>
      </div>
    </div>
  );
};

// ============================================
// WHY FORMATION SECTION
// ============================================

const WhyFormationSection: React.FC = () => {
  return (
    <div className="section-block">
      <div className="section-header">
        <Target className="text-red-500" size={32} />
        <h2 className="section-title">Pourquoi cette formation</h2>
      </div>

      <div className="pourquoi-grid-new">
        <div className="pourquoi-left-new">
          <p className="article-text">
            L&apos;immobilier est aujourd&apos;hui l&apos;un des secteurs les
            plus dynamiques au Maroc. Entre le développement de nouvelles
            infrastructures, l&apos;attractivité touristique et l&apos;intérêt
            croissant des investisseurs étrangers, le marché immobilier offre de
            nombreuses opportunités.
          </p>
          <p className="article-text" style={{ marginBottom: 0 }}>
            Cependant, investir dans l&apos;immobilier nécessite une
            compréhension claire :
          </p>
        </div>

        <div className="pourquoi-right-new">
          <div className="pourquoi-card-new">
            <div className="pourquoi-icon-wrapper">
              <Building2 size={26} color="#ef4444" strokeWidth={1.5} />
            </div>
            <div className="pourquoi-label-new">
              Du fonctionnement du marché
            </div>
          </div>
          <div className="pourquoi-card-new">
            <div className="pourquoi-icon-wrapper">
              <MapPin size={26} color="#ef4444" strokeWidth={1.5} />
            </div>
            <div className="pourquoi-label-new">Des dynamiques locales</div>
          </div>
          <div className="pourquoi-card-new">
            <div className="pourquoi-icon-wrapper">
              <TrendingUp size={26} color="#ef4444" strokeWidth={1.5} />
            </div>
            <div className="pourquoi-label-new">
              De la rentabilité des projets
            </div>
          </div>
          <div className="pourquoi-card-new">
            <div className="pourquoi-icon-wrapper">
              <ClipboardList size={26} color="#ef4444" strokeWidth={1.5} />
            </div>
            <div className="pourquoi-label-new">
              Des étapes d&apos;une transaction immobilière
            </div>
          </div>
        </div>
      </div>

      <div className="glass-box highlight">
        <p className="text-white font-semibold m-0 text-lg">
          Cette formation permet d&apos;acquérir les bases nécessaires pour
          analyser un investissement immobilier et comprendre les mécanismes du
          secteur.
        </p>
      </div>
    </div>
  );
};

// ============================================
// TARGET AUDIENCE SECTION
// ============================================

const TargetAudienceSection: React.FC = () => {
  return (
    <div className="section-block">
      <div className="section-header">
        <Users className="text-red-500" size={32} />
        <h2 className="section-title">À qui s&apos;adresse cette formation</h2>
      </div>

      <p className="article-text-no-margin-b">
        Cette formation s&apos;adresse aux personnes souhaitant développer une
        expertise dans le secteur immobilier ou comprendre les mécanismes de
        l&apos;investissement immobilier.
      </p>
      <p className="article-text">Elle est particulièrement adaptée pour :</p>

      <div className="space-y-2 mb-8">
        <div className="glass-list-item">
          <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
          <span className="text-md font-medium">
            Les personnes en reconversion professionnelle
          </span>
        </div>
        <div className="glass-list-item">
          <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
          <span className="text-md font-medium">
            Les commerciaux souhaitant évoluer dans l&apos;immobilier
          </span>
        </div>
        <div className="glass-list-item">
          <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
          <span className="text-md font-medium">
            Les entrepreneurs intéressés par l&apos;investissement immobilier
          </span>
        </div>
        <div className="glass-list-item">
          <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
          <span className="text-md font-medium">
            Les profils souhaitant travailler dans l&apos;immobilier au Maroc
          </span>
        </div>
        <div className="glass-list-item">
          <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
          <span className="text-md font-medium">
            Les personnes souhaitant comprendre les opportunités immobilières
          </span>
        </div>
      </div>

      <p className="article-text" style={{ fontStyle: "italic" }}>
        Aucune expérience préalable dans l&apos;immobilier n&apos;est requise
      </p>
    </div>
  );
};

// ============================================
// PROGRAM TIMELINE SECTION
// ============================================

const ProgramTimelineSection: React.FC = () => {
  return (
    <div className="section-block">
      <div className="section-header">
        <BookOpen className="text-red-500" size={32} />
        <h2 className="section-title">Le programme de la formation</h2>
      </div>

      <div className="timeline-container">
        {/* Module 1 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3 className="timeline-title">
              Comprendre le marché immobilier marocain
            </h3>
            <div className="module-bullets">
              <div className="module-bullet">
                <Dot size={28} />
                Fonctionnement du marché immobilier au Maroc
              </div>
              <div className="module-bullet">
                <Dot size={28} />
                Analyse des différentes typologies de biens
              </div>
              <div className="module-bullet">
                <Dot size={28} />
                Identification des zones à fort potentiel
              </div>
              <div className="module-bullet">
                <Dot size={28} />
                Compréhension des dynamiques de marché
              </div>
            </div>
          </div>
        </div>

        {/* Module 2 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3 className="timeline-title">
              Cadre juridique et sécurisation des projets
            </h3>
            <div className="module-bullets">
              <div className="module-bullet">
                <Dot size={28} />
                Étapes d&apos;une transaction immobilière
              </div>
              <div className="module-bullet">
                <Dot size={28} />
                Compréhension des contrats
              </div>
              <div className="module-bullet">
                <Dot size={28} />
                Sécurisation des investissements
              </div>
              <div className="module-bullet">
                <Dot size={28} />
                Rôle des différents intervenants dans une opération immobilière
              </div>
            </div>
          </div>
        </div>

        {/* Module 3 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3 className="timeline-title">
              Analyse d&apos;un investissement immobilier
            </h3>
            <div className="module-bullets">
              <div className="module-bullet">
                <Dot size={28} />
                Calcul de rentabilité
              </div>
              <div className="module-bullet">
                <Dot size={28} />
                Analyse financière d&apos;un projet
              </div>
              <div className="module-bullet">
                <Dot size={28} />
                Étude de cas concrets
              </div>
              <div className="module-bullet">
                <Dot size={28} />
                Identification des critères d&apos;un investissement pertinent
              </div>
            </div>
          </div>
        </div>

        {/* Module 4 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3 className="timeline-title">Accompagnement des investisseurs</h3>
            <div className="module-bullets">
              <div className="module-bullet">
                <Dot size={28} />
                Compréhension des objectifs d&apos;un investisseur
              </div>
              <div className="module-bullet">
                <Dot size={28} />
                Présentation d&apos;opportunités d&apos;investissement
              </div>
              <div className="module-bullet">
                <Dot size={28} />
                Structuration d&apos;un projet immobilier
              </div>
              <div className="module-bullet">
                <Dot size={28} />
                Approche professionnelle de la relation investisseur
              </div>
            </div>
          </div>
        </div>

        {/* Module 5 */}
        <div className="timeline-item">
          {/* ---> ADDED THE MISSING DOT HERE <--- */}
          <div className="timeline-dot"></div>
          <div
            className="timeline-content"
            style={{ borderColor: "rgba(239, 68, 68, 0.2)" }}
          >
            <h3 className="timeline-title">
              Mise en situation professionnelle
            </h3>
            <div className="module-bullets">
              <p
                style={{
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.8)",
                  fontWeight: 500,
                  margin: 0,
                  lineHeight: 1.7,
                }}
              >
                Les participants travaillent sur des cas concrets permettant
                d&apos;appliquer les méthodes étudiées durant la formation.
                Cette approche permet de développer une compréhension pratique
                du métier.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================
// REVENUE SECTION
// ============================================

const RevenueSection: React.FC = () => {
  return (
    <div className="section-block">
      <div className="section-header">
        <TrendingUp className="text-red-500" size={32} />
        <h2 className="section-title">Revenus possibles après la formation</h2>
      </div>

      <p className="article-text-no-margin-b">
        Le métier de conseiller en investissement immobilier repose sur un
        modèle de rémunération basé en grande partie sur la performance.
      </p>
      <p className="article-text">
        Dans le secteur immobilier marocain, la commission d&apos;une
        transaction peut représenter environ{" "}
        <strong className="text-white">5 % du prix du bien</strong>,
        généralement répartie entre l&apos;agence et les conseillers.
      </p>

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
          Un conseiller actif peut réaliser plusieurs transactions par an, ce
          qui permet d&apos;atteindre des revenus significatifs selon
          l&apos;activité et le réseau développé.
        </p>
      </div>
    </div>
  );
};

// ============================================
// EXAM SECTION
// ============================================

const ExamSection: React.FC = () => {
  return (
    <div className="section-block">
      <div className="section-header">
        <Award className="text-red-500" size={32} />
        <h2 className="section-title">Examen final</h2>
      </div>

      <p className="article-text-no-margin-b">
        À l&apos;issue de la formation, les participants passent une évaluation
        devant un jury professionnel.
      </p>
      <p className="article-text">Cette évaluation comprend :</p>

      <div className="space-y-2 mb-8">
        <div className="glass-list-item">
          <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
          <span className="text-md font-medium">
            L&apos;analyse d&apos;un projet immobilier
          </span>
        </div>
        <div className="glass-list-item">
          <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
          <span className="text-md font-medium">
            La présentation d&apos;une stratégie d&apos;investissement
          </span>
        </div>
        <div className="glass-list-item">
          <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
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
  );
};

// ============================================
// PRICING SECTION
// ============================================

const PricingSection: React.FC = () => {
  return (
    <div className="section-block">
      <div className="section-header">
        <DollarSign className="text-red-500" size={32} />
        <h2 className="section-title">Investissement pour la formation</h2>
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
            <div className="provisions-badge">À prévoir par le participant</div>
            <Briefcase
              className="text-red-500 mx-auto"
              size={28}
              style={{ marginBottom: "12px" }}
            />
            <p className="provisions-subtitle">
              Les participants doivent prévoir les éléments suivants, non inclus
              dans le tarif de la formation
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
              permettant d&apos;organiser son séjour selon ses préférences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================
// ADMISSION SECTION
// ============================================

const AdmissionSection: React.FC = () => {
  return (
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
  );
};

// ============================================
// FAQ SECTION
// ============================================

interface FAQSectionProps {
  openFaq: number | null;
  toggleFaq: (index: number) => void;
}

const FAQSection: React.FC<FAQSectionProps> = ({ openFaq, toggleFaq }) => {
  return (
    <div className="section-block">
      <div className="section-header">
        <HelpCircle className="text-red-500" size={32} />
        <h2 className="section-title">Foire aux questions</h2>
      </div>

      <div className="faq-list">
        {faqs.map((faq, idx) => (
          <div className="faq-item" key={idx}>
            <button
              className="faq-question"
              onClick={() => toggleFaq(idx)}
              aria-expanded={openFaq === idx}
            >
              {faq.q}
              <ChevronDown
                className={`faq-icon ${openFaq === idx ? "open" : ""}`}
                size={20}
              />
            </button>
            {openFaq === idx && <div className="faq-answer">{faq.a}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

// ============================================
// FINAL CTA SECTION
// ============================================

const FinalCTASection: React.FC = () => {
  return (
    <div className="final-cta-glass section-block">
      <GraduationCap className="text-red-500 mx-auto mb-6" size={48} />
      <h2 className="text-3xl font-black text-white uppercase mb-4">
        Rejoindre la prochaine session
      </h2>
      <p className="text-gray-400 mb-8 max-w-lg mx-auto">
        Cette formation s&apos;adresse aux personnes souhaitant comprendre les
        mécanismes de l&apos;investissement immobilier et développer une
        expertise recherchée dans le marché immobilier marocain.
      </p>

      <Link href="/contact-quiz/" className="poly-btn red group">
        <span>Candidater à la prochaine session</span>
        <ArrowRight
          size={18}
          className="group-hover:translate-x-1 transition-transform"
        />
      </Link>
    </div>
  );
};

// ============================================
// FLOATING STICKY BAR
// ============================================

const FloatingStickyBar: React.FC = () => {
  return (
    <div className="floating-sticky-bar">
      <div className="floating-left">
        <div className="pulse-container">
          <div className="pulse-ping"></div>
          <div className="pulse-dot"></div>
        </div>
        <span className="floating-text">Prochaine session bientôt</span>
      </div>
      <Link href="/contact-quiz/" className="floating-btn">
        POSTULER
      </Link>
    </div>
  );
};

// ============================================
// MAIN COMPONENT
// ============================================

const ProgrammeImmobilierComponent: React.FC = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="article-page">
      {/* Background Effect */}
      <CloudRedEffect1 />

      {/* Main Wrapper */}
      <div className="article-wrap">
        {/* === HERO SECTION === */}
        <HeroSection />

        {/* === CONTENT CONTAINER === */}
        <main className="content-container">
          {/* === INTRO TEXT === */}
          <IntroSection />

          {/* === POURQUOI CETTE FORMATION === */}
          <WhyFormationSection />

          {/* === À QUI S'ADRESSE CETTE FORMATION === */}
          <TargetAudienceSection />

          {/* === LE PROGRAMME DE LA FORMATION (TIMELINE) === */}
          <ProgramTimelineSection />

          {/* === REVENUS POSSIBLES === */}
          <RevenueSection />

          {/* === EXAMEN FINAL === */}
          <ExamSection />

          {/* === INVESTISSEMENT POUR LA FORMATION === */}
          <PricingSection />

          {/* === PROCESSUS D'ADMISSION === */}
          <AdmissionSection />

          {/* === FAQ === */}
          <FAQSection openFaq={openFaq} toggleFaq={toggleFaq} />

          {/* === FINAL CTA === */}
          <FinalCTASection />
        </main>
      </div>

      {/* FLOATING STICKY BAR */}
      <FloatingStickyBar />
    </div>
  );
};

export default ProgrammeImmobilierComponent;
