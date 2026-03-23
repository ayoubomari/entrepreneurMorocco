"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight, CheckCircle, ChevronDown, ShoppingCart,
  MapPin, Calendar, Lock, Rocket,
  Store, Megaphone, Truck, BarChart3,
} from "lucide-react";

const MODULES = [
  {
    title: "Créer sa boutique en ligne de A à Z",
    bullets: [
      "Choix de plateforme (Shopify, WooCommerce, custom)",
      "Design produit et optimisation UX",
      "Intégration paiement Maroc & international",
      "Catalogue produits et pricing strategy",
    ],
  },
  {
    title: "Stratégies TikTok Ads & Meta Ads",
    bullets: [
      "Création de campagnes publicitaires performantes",
      "Ciblage avancé et audiences lookalike",
      "Création de contenu vidéo qui convertit",
      "Optimisation ROAS et scaling des campagnes",
    ],
  },
  {
    title: "Logistique & export depuis le Maroc",
    bullets: [
      "Supply chain et gestion des stocks",
      "Partenaires logistiques au Maroc",
      "Export vers l'Europe, l'Afrique et le Moyen-Orient",
      "Douanes, réglementation et conformité",
    ],
  },
  {
    title: "Growth & analytics",
    bullets: [
      "Analyse de données et KPIs e-commerce",
      "Email marketing et automation",
      "Fidélisation et programme de rétention",
      "Scaling de 0 à 100K MAD/mois",
    ],
  },
];

const FAQS = [
  {
    q: "Faut-il des compétences techniques ?",
    a: "Non, le programme est conçu pour les débutants. Nous vous accompagnons pas à pas dans la création de votre boutique, les publicités et la logistique. Aucune compétence en code n'est requise.",
  },
  {
    q: "Quel type de produits peut-on vendre ?",
    a: "Tous types de produits physiques ou digitaux. Beaucoup de nos participants se lancent dans les cosmétiques, l'artisanat marocain, la mode, l'alimentaire ou les produits digitaux (formations, templates).",
  },
  {
    q: "Combien investir pour démarrer après la formation ?",
    a: "Un budget de 5 000 à 15 000 MAD suffit pour démarrer : stock initial, premiers tests publicitaires et frais de plateforme. Nous vous apprenons à commencer lean et scaler progressivement.",
  },
  {
    q: "La formation inclut-elle un accompagnement post-formation ?",
    a: "Oui, 2 mois de suivi inclus après la formation : revue de boutique, optimisation des campagnes, et accès au groupe privé d'entraide entre e-commerçants.",
  },
];

export default function ProgrammeEcommerce() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* ── HERO ── */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="aurora-glow w-[800px] h-[600px] top-0 right-0 opacity-60" />
        <div className="aurora-glow w-[500px] h-[400px] bottom-0 left-0 opacity-40" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 text-[11px] font-bold tracking-[0.2em] uppercase text-white mb-8 animate-[fadeUp_0.8s_ease-out_both]" style={{ background: "var(--accent)", transform: "skewX(-12deg)" }}>
            <ShoppingCart size={14} style={{ transform: "skewX(12deg)" }} />
            <span style={{ transform: "skewX(12deg)" }}>Formation digitale</span>
          </div>

          <h1 className="font-[family-name:var(--font-montserrat)] font-black uppercase tracking-[-0.03em] text-white leading-[0.95] max-w-4xl animate-[fadeUp_0.8s_ease-out_0.1s_both]" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
            E-COMMERCE &amp; <span className="gradient-text">BUSINESS DIGITAL</span>
          </h1>

          <p className="text-white/50 text-lg max-w-xl mt-6 leading-relaxed animate-[fadeUp_0.8s_ease-out_0.2s_both]">
            Créez votre boutique en ligne, maîtrisez la publicité digitale et développez
            votre logistique export depuis le Maroc.
          </p>

          <div className="flex flex-wrap gap-3 mt-8 animate-[fadeUp_0.8s_ease-out_0.3s_both]">
            {[
              { icon: MapPin, text: "En ligne + présentiel" },
              { icon: Calendar, text: "3 semaines" },
              { icon: Lock, text: "15 places max" },
            ].map((p) => (
              <div key={p.text} className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wider uppercase text-white/80 backdrop-blur-xl bg-white/[0.06] border border-white/[0.1] rounded-lg">
                <p.icon size={14} />
                {p.text}
              </div>
            ))}
          </div>

          <div className="mt-10 animate-[fadeUp_0.8s_ease-out_0.4s_both]">
            <Link href="/contact-quiz" className="group relative inline-flex items-center gap-3 px-9 py-[17px] text-[12px] font-bold tracking-[0.2em] uppercase text-white cursor-pointer">
              <span className="absolute inset-0 bg-[var(--accent)] skew-x-[-12deg] transition-all duration-500 group-hover:bg-[var(--accent-light)] group-hover:scale-[1.04] group-hover:shadow-[0_0_50px_rgba(220,38,38,0.35)]" />
              <span className="relative z-10">Rejoindre la formation</span>
              <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4 PILLARS ── */}
      <section className="v3-section relative">
        <div className="aurora-glow w-[600px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-14">
            <h2 className="v3-section-title" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}>
              CE QUE VOUS ALLEZ <span className="gradient-text">MAÎTRISER</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Store, label: "Boutique en ligne", desc: "Créez une boutique professionnelle sur Shopify ou WooCommerce, optimisée pour convertir. Design produit, UX et intégration paiement Maroc & international.", tags: ["Shopify", "WooCommerce", "UX", "Paiement"] },
              { icon: Megaphone, label: "Publicité digitale", desc: "Lancez des campagnes rentables sur TikTok Ads et Meta Ads. Ciblage avancé, création de contenu vidéo et optimisation ROAS.", tags: ["TikTok Ads", "Meta Ads", "ROAS", "Vidéo"] },
              { icon: Truck, label: "Logistique & export", desc: "Mettez en place votre supply chain depuis le Maroc. Partenaires logistiques, export vers l'Europe et l'Afrique, douanes et conformité.", tags: ["Supply chain", "Export", "Douanes", "Maroc"] },
              { icon: BarChart3, label: "Growth & scaling", desc: "Passez de 0 à 100K MAD/mois. Analytics, email marketing, fidélisation et stratégies de scaling éprouvées.", tags: ["Analytics", "Email", "Scaling", "KPIs"] },
            ].map((item, i) => (
              <div key={item.label} className="v3-glass p-8 relative overflow-hidden animate-[fadeUp_0.8s_ease-out_both]" style={{ borderRadius: 24, animationDelay: `${0.1 + i * 0.1}s` }}>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--accent-glow)", border: "1px solid rgba(220,38,38,0.15)", transform: "skewX(-6deg)" }}>
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

      {/* ── PROGRAMME ── */}
      <section className="v3-section relative bg-[var(--bg-elevated)]">
        <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="v3-section-title" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}>
              LE PROGRAMME <span className="gradient-text">EN DÉTAIL</span>
            </h2>
          </div>
          <div className="space-y-6">
            {MODULES.map((mod, i) => (
              <div key={mod.title} className="v3-glass p-8 relative overflow-hidden" style={{ borderRadius: 20 }}>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />
                <div className="flex items-start gap-6">
                  <span className="v3-step-number flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex-1">
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

      {/* ── PRICING ── */}
      <section className="v3-section relative">
        <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="v3-glass p-10 md:p-14 relative overflow-hidden text-center" style={{ borderRadius: 28 }}>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent" />
            <div className="inline-flex items-center gap-2 px-5 py-2 text-[10px] font-bold tracking-[0.2em] uppercase text-white mb-8" style={{ background: "var(--accent)", transform: "skewX(-12deg)" }}>
              <span style={{ transform: "skewX(12deg)" }}>Places limitées</span>
            </div>
            <p className="text-[var(--text-muted)] text-xs font-semibold tracking-[0.2em] uppercase">Investissement formation</p>
            <p className="font-[family-name:var(--font-montserrat)] font-black text-white mt-2" style={{ fontSize: "clamp(3rem, 8vw, 5rem)" }}>
              2 199 <span className="text-[var(--accent)] text-2xl">€</span>
            </p>
            <p className="text-[var(--text-muted)] text-sm mt-2">Paiement en 3x sans frais possible</p>
            <div className="h-px bg-[var(--border)] my-8" />
            <div className="text-left max-w-md mx-auto space-y-3">
              {["3 semaines de formation intensive", "Création de boutique accompagnée", "Campagnes publicitaires lancées", "Logistique & partenaires activés", "2 mois de suivi post-formation", "Accès groupe privé e-commerçants"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-[var(--accent)] flex-shrink-0" />
                  <span className="text-sm text-[var(--text-secondary)]">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link href="/contact-quiz" className="group relative inline-flex items-center gap-3 px-10 py-[18px] text-[12px] font-bold tracking-[0.2em] uppercase text-white cursor-pointer">
                <span className="absolute inset-0 bg-[var(--accent)] skew-x-[-12deg] transition-all duration-500 group-hover:bg-[var(--accent-light)] group-hover:scale-[1.04]" />
                <span className="relative z-10">Candidater maintenant</span>
                <ArrowRight className="relative z-10 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="v3-section relative bg-[var(--bg-elevated)]">
        <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="v3-section-title text-center mb-12" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}>
            QUESTIONS <span className="gradient-text">FRÉQUENTES</span>
          </h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={faq.q} className={`v3-glass overflow-hidden cursor-pointer transition-all duration-300 ${openFaq === i ? "bg-white/[0.06]" : ""}`} style={{ borderRadius: 16 }} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
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
      <section className="v3-section relative">
        <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <Rocket size={48} className="text-[var(--accent)] mx-auto mb-6 opacity-60" />
          <h2 className="v3-section-title" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}>
            LANCEZ VOTRE <span className="gradient-text">E-COMMERCE</span>
          </h2>
          <p className="text-[var(--text-muted)] text-sm mt-4 max-w-md mx-auto">
            Rejoignez la prochaine session et créez votre business digital depuis le Maroc.
          </p>
          <div className="mt-10">
            <Link href="/contact-quiz" className="group relative inline-flex items-center gap-3 px-10 py-[18px] text-[12px] font-bold tracking-[0.2em] uppercase text-white cursor-pointer">
              <span className="absolute inset-0 bg-[var(--accent)] skew-x-[-12deg] transition-all duration-500 group-hover:bg-[var(--accent-light)] group-hover:scale-[1.04]" />
              <span className="relative z-10">Candidater à la prochaine session</span>
              <ArrowRight className="relative z-10 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
