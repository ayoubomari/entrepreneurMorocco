"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, CheckCircle, Target, Users, BookOpen, Award,
  MapPin, Calendar, Lock, ChevronDown, Briefcase,
  FileText, TrendingUp, Globe, Handshake, Rocket,
} from "lucide-react";

/* ───────── DATA ───────── */

const MODULES = [
  {
    title: "Bilan de compétences & positionnement",
    bullets: [
      "Analyse de vos forces, compétences et expériences",
      "Identification des secteurs porteurs au Maroc",
      "Définition de votre projet entrepreneurial",
      "Plan d'action 30/60/90 jours personnalisé",
    ],
  },
  {
    title: "Création d'entreprise & cadre juridique",
    bullets: [
      "Choix du statut juridique optimal (SARL, SAS, auto-entrepreneur)",
      "Processus de création et enregistrement légal",
      "Ouverture bancaire et fiscalité marocaine",
      "Enregistrement CNSS et obligations sociales",
    ],
  },
  {
    title: "Stratégie marketing & acquisition clients",
    bullets: [
      "Étude de marché et analyse concurrentielle",
      "Branding et identité visuelle",
      "Tunnels de vente et stratégie digitale",
      "Acquisition des premiers clients",
    ],
  },
  {
    title: "Réseau & écosystème entrepreneurial",
    bullets: [
      "Accès au réseau Entrepreneurs Morocco",
      "Mise en relation avec investisseurs et partenaires",
      "Intégration dans les clubs business",
      "Mentorat et suivi post-formation",
    ],
  },
];

const FAQS = [
  {
    q: "Faut-il avoir un projet défini pour participer ?",
    a: "Non, le programme commence justement par un bilan de compétences qui vous aidera à définir et valider votre projet. Beaucoup de participants arrivent avec une idée générale et repartent avec un plan d'action concret.",
  },
  {
    q: "La formation est-elle en présentiel ou en ligne ?",
    a: "Le programme se déroule en présentiel à Casablanca sur 4 semaines intensives, avec un suivi en ligne de 3 mois après la formation pour accompagner votre lancement.",
  },
  {
    q: "Quel est le profil type des participants ?",
    a: "MRE souhaitant rentrer au Maroc, expatriés en reconversion, salariés voulant se lancer, ou entrepreneurs souhaitant structurer leur activité. Tous les profils motivés sont les bienvenus.",
  },
  {
    q: "Y a-t-il un financement possible ?",
    a: "Oui, nous proposons un paiement en 3 fois sans frais. Certains profils MRE peuvent aussi bénéficier d'aides spécifiques que nous vous aidons à identifier lors de l'entretien.",
  },
];

/* ───────── COMPONENT ───────── */

export default function ProgrammeEntrepreneur360() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <Image
          src="/images/Rabat-Grd.jpg"
          alt="Formation Entrepreneur 360°"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-primary)]/80 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full pb-20">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-5 py-2 text-[11px] font-bold tracking-[0.2em] uppercase text-white mb-8 animate-[fadeUp_0.8s_ease-out_both]"
            style={{ background: "var(--accent)", transform: "skewX(-12deg)" }}
          >
            <Briefcase size={14} style={{ transform: "skewX(12deg)" }} />
            <span style={{ transform: "skewX(12deg)" }}>Programme phare</span>
          </div>

          <h1
            className="font-[family-name:var(--font-montserrat)] font-black uppercase tracking-[-0.03em] text-white leading-[0.95] max-w-3xl animate-[fadeUp_0.8s_ease-out_0.1s_both]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            ENTREPRENEUR <span className="gradient-text">360°</span>
          </h1>

          <p className="text-white/60 text-lg max-w-xl mt-6 leading-relaxed animate-[fadeUp_0.8s_ease-out_0.2s_both]">
            Le programme complet pour lancer votre activité au Maroc — du bilan
            de compétences jusqu&apos;à vos premiers clients.
          </p>

          {/* Pills */}
          <div className="flex flex-wrap gap-3 mt-8 animate-[fadeUp_0.8s_ease-out_0.3s_both]">
            {[
              { icon: MapPin, text: "Casablanca" },
              { icon: Calendar, text: "4 semaines" },
              { icon: Lock, text: "12 places max" },
            ].map((p) => (
              <div
                key={p.text}
                className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wider uppercase text-white/80 backdrop-blur-xl bg-white/[0.06] border border-white/[0.1] rounded-lg"
              >
                <p.icon size={14} />
                {p.text}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 animate-[fadeUp_0.8s_ease-out_0.4s_both]">
            <Link
              href="/contact-quiz"
              className="group relative inline-flex items-center gap-3 px-9 py-[17px] text-[12px] font-bold tracking-[0.2em] uppercase text-white cursor-pointer"
            >
              <span className="absolute inset-0 bg-[var(--accent)] skew-x-[-12deg] transition-all duration-500 group-hover:bg-[var(--accent-light)] group-hover:scale-[1.04] group-hover:shadow-[0_0_50px_rgba(220,38,38,0.35)]" />
              <span className="relative z-10">Candidater maintenant</span>
              <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CE QUE VOUS ALLEZ MAÎTRISER ── */}
      <section className="v3-section relative">
        <div className="aurora-glow w-[600px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="para-bars para-bars--sm"><div className="para-bar" /><div className="para-bar" /><div className="para-bar" /></div>
              <span className="v3-section-eyebrow-text">Le programme</span>
              <div className="para-bars para-bars--sm"><div className="para-bar" style={{ opacity: 0.3 }} /><div className="para-bar" style={{ opacity: 0.6 }} /><div className="para-bar" /></div>
            </div>
            <h2 className="v3-section-title" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}>
              CE QUE VOUS ALLEZ <span className="gradient-text">MAÎTRISER</span>
            </h2>
            <p className="text-[var(--text-muted)] text-sm mt-4 max-w-xl mx-auto">
              En 4 semaines intensives, vous passez de l&apos;idée au lancement concret
              avec un plan d&apos;action validé et un réseau professionnel activé.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: FileText,
                label: "Bilan de compétences",
                desc: "Un diagnostic complet de vos forces, compétences et expériences pour identifier les secteurs porteurs au Maroc et définir votre projet entrepreneurial.",
                tags: ["Diagnostic", "Secteurs porteurs", "Plan d'action"],
              },
              {
                icon: TrendingUp,
                label: "Stratégie marketing",
                desc: "Étude de marché approfondie, positionnement, branding et tunnels de vente pour acquérir vos premiers clients dès le lancement.",
                tags: ["Étude de marché", "Branding", "Acquisition"],
              },
              {
                icon: Globe,
                label: "Présence digitale",
                desc: "Création de votre identité visuelle, site web et stratégie de contenu pour une présence digitale professionnelle dès le premier jour.",
                tags: ["Site web", "Contenu", "Identité visuelle"],
              },
              {
                icon: Handshake,
                label: "Réseau & investisseurs",
                desc: "Accès direct au réseau Entrepreneurs Morocco : investisseurs, partenaires business, experts et clubs d'entrepreneurs au Maroc.",
                tags: ["Investisseurs", "Partenaires", "Mentorat"],
              },
            ].map((item, i) => (
              <div
                key={item.label}
                className="v3-glass p-8 relative overflow-hidden animate-[fadeUp_0.8s_ease-out_both]"
                style={{ borderRadius: 24, animationDelay: `${0.1 + i * 0.1}s` }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />
                <div className="flex items-start gap-5">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--accent-glow)", border: "1px solid rgba(220,38,38,0.15)", transform: "skewX(-6deg)" }}
                  >
                    <item.icon size={26} className="text-[var(--accent)]" style={{ transform: "skewX(6deg)" }} />
                  </div>
                  <div className="flex-1">
                    <div className="para-bars para-bars--sm mb-2"><div className="para-bar" /><div className="para-bar" /></div>
                    <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-base uppercase tracking-wide text-white">{item.label}</h3>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed mt-3">{item.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 text-[10px] font-semibold tracking-wider uppercase text-[var(--accent)] rounded-md" style={{ background: "var(--accent-glow)", border: "1px solid rgba(220,38,38,0.1)" }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMME DÉTAILLÉ ── */}
      <section className="v3-section relative bg-[var(--bg-elevated)]">
        <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="para-bars para-bars--sm"><div className="para-bar" /><div className="para-bar" /><div className="para-bar" /></div>
              <span className="v3-section-eyebrow-text">4 modules</span>
              <div className="para-bars para-bars--sm"><div className="para-bar" style={{ opacity: 0.3 }} /><div className="para-bar" style={{ opacity: 0.6 }} /><div className="para-bar" /></div>
            </div>
            <h2 className="v3-section-title" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}>
              LE PROGRAMME <span className="gradient-text">COMPLET</span>
            </h2>
          </div>

          <div className="space-y-6">
            {MODULES.map((mod, i) => (
              <div key={mod.title} className="v3-glass p-8 relative overflow-hidden" style={{ borderRadius: 20 }}>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />
                <div className="flex items-start gap-6">
                  <span className="v3-step-number flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex-1">
                    <div className="para-bars para-bars--sm mb-3"><div className="para-bar" /><div className="para-bar" /></div>
                    <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-base uppercase tracking-wide text-white">{mod.title}</h3>
                    <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {mod.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <CheckCircle size={14} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PUBLIC CIBLE ── */}
      <section className="v3-section relative">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="para-bars para-bars--sm"><div className="para-bar" /><div className="para-bar" /><div className="para-bar" /></div>
            <span className="v3-section-eyebrow-text">À qui s&apos;adresse ce programme</span>
          </div>
          <h2 className="v3-section-title mb-10" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}>
            POUR CEUX QUI VEULENT <span className="gradient-text">PASSER À L&apos;ACTION</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "MRE souhaitant rentrer et entreprendre au Maroc",
              "Salariés en reconversion professionnelle",
              "Freelances voulant structurer leur activité",
              "Porteurs de projets sans expérience entrepreneuriale",
              "Entrepreneurs souhaitant se développer au Maroc",
              "Digital nomads cherchant une base au Maroc",
            ].map((item) => (
              <div key={item} className="v3-glass p-5 flex items-center gap-4" style={{ borderRadius: 14 }}>
                <CheckCircle size={18} className="text-[var(--accent)] flex-shrink-0" />
                <span className="text-sm text-[var(--text-secondary)] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="v3-section relative bg-[var(--bg-elevated)]">
        <div className="aurora-glow w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />
        <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="v3-glass p-10 md:p-14 relative overflow-hidden text-center" style={{ borderRadius: 28 }}>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent" />

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 text-[10px] font-bold tracking-[0.2em] uppercase text-white mb-8" style={{ background: "var(--accent)", transform: "skewX(-12deg)" }}>
              <span style={{ transform: "skewX(12deg)" }}>Places limitées</span>
            </div>

            <p className="text-[var(--text-muted)] text-xs font-semibold tracking-[0.2em] uppercase">Investissement formation</p>
            <p className="font-[family-name:var(--font-montserrat)] font-black text-white mt-2" style={{ fontSize: "clamp(3rem, 8vw, 5rem)" }}>
              3 499 <span className="text-[var(--accent)] text-2xl">€</span>
            </p>
            <p className="text-[var(--text-muted)] text-sm mt-2">Paiement en 3x sans frais possible</p>

            <div className="h-px bg-[var(--border)] my-8" />

            <div className="text-left max-w-md mx-auto space-y-3">
              {[
                "4 semaines de formation intensive",
                "Bilan de compétences personnalisé",
                "Création juridique accompagnée",
                "Stratégie marketing & premiers clients",
                "Accès au réseau Entrepreneurs Morocco",
                "3 mois de suivi post-formation",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-[var(--accent)] flex-shrink-0" />
                  <span className="text-sm text-[var(--text-secondary)]">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/contact-quiz"
                className="group relative inline-flex items-center gap-3 px-10 py-[18px] text-[12px] font-bold tracking-[0.2em] uppercase text-white cursor-pointer"
              >
                <span className="absolute inset-0 bg-[var(--accent)] skew-x-[-12deg] transition-all duration-500 group-hover:bg-[var(--accent-light)] group-hover:scale-[1.04] group-hover:shadow-[0_0_50px_rgba(220,38,38,0.35)]" />
                <span className="relative z-10">Candidater maintenant</span>
                <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="v3-section relative">
        <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="v3-section-title" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}>
              QUESTIONS <span className="gradient-text">FRÉQUENTES</span>
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div
                key={faq.q}
                className={`v3-glass overflow-hidden cursor-pointer transition-all duration-300 ${openFaq === i ? "bg-white/[0.06]" : ""}`}
                style={{ borderRadius: 16 }}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="flex items-center justify-between gap-4 p-5 md:p-6">
                  <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-sm uppercase tracking-wide text-white">{faq.q}</h3>
                  <ChevronDown size={16} className={`text-[var(--text-muted)] transition-transform duration-300 flex-shrink-0 ${openFaq === i ? "rotate-180" : ""}`} />
                </div>
                {openFaq === i && (
                  <div className="px-5 md:px-6 pb-6">
                    <div className="h-px bg-[var(--border)] mb-4" />
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="v3-section relative bg-[var(--bg-elevated)]">
        <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <Rocket size={48} className="text-[var(--accent)] mx-auto mb-6 opacity-60" />
          <h2 className="v3-section-title" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}>
            PRÊT À <span className="gradient-text">ENTREPRENDRE ?</span>
          </h2>
          <p className="text-[var(--text-muted)] text-sm mt-4 max-w-md mx-auto">
            Rejoignez la prochaine session et transformez votre projet en réalité.
            Les places sont limitées.
          </p>
          <div className="mt-10">
            <Link
              href="/contact-quiz"
              className="group relative inline-flex items-center gap-3 px-10 py-[18px] text-[12px] font-bold tracking-[0.2em] uppercase text-white cursor-pointer"
            >
              <span className="absolute inset-0 bg-[var(--accent)] skew-x-[-12deg] transition-all duration-500 group-hover:bg-[var(--accent-light)] group-hover:scale-[1.04] group-hover:shadow-[0_0_50px_rgba(220,38,38,0.35)]" />
              <span className="relative z-10">Candidater à la prochaine session</span>
              <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── STICKY BAR ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-xl bg-[var(--bg-primary)]/80 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-pulse" />
              <div className="absolute w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-ping" />
            </div>
            <span className="text-sm text-[var(--text-muted)] hidden sm:inline">Prochaine session bientôt</span>
          </div>
          <Link
            href="/contact-quiz"
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 text-[10px] font-bold tracking-[0.2em] uppercase text-white cursor-pointer"
          >
            <span className="absolute inset-0 bg-[var(--accent)] skew-x-[-12deg] transition-all duration-300 group-hover:bg-[var(--accent-light)]" />
            <span className="relative z-10">Postuler</span>
            <ArrowRight className="relative z-10 w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
