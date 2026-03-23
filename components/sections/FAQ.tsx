"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, ArrowRight, MessageCircle } from "lucide-react";

const FAQ_ITEMS = [
  {
    q: "EST-CE FINANÇABLE ?",
    a: "Oui, absolument ! Nous proposons plusieurs solutions de financement adaptées à votre situation : étalement des paiements, financement partiel via certaines aides pour les MRE, ou encore des partenariats avec des organismes de crédit au Maroc. Lors du premier appel, nous analysons ensemble les options qui correspondent à votre profil.",
  },
  {
    q: "DOIS-JE AVOIR UN PROJET PRÉCIS ?",
    a: "Pas nécessairement. Beaucoup de nos clients arrivent avec une envie de changement mais sans projet défini. C'est précisément pour cela que nous commençons par un diagnostic approfondi : explorer vos compétences, vos ressources et les opportunités du marché marocain pour faire émerger le projet qui vous correspond vraiment.",
  },
  {
    q: "EST-CE QUE VOUS AIDEZ AUSSI POUR LA FAMILLE ?",
    a: "Oui. Avec le Pack Family, nous prenons en charge l'ensemble des démarches pour toute la famille : scolarité des enfants, regroupement familial, logement, couverture médicale et intégration sociale. Nous avons accompagné des dizaines de familles dans leur installation et chaque situation est traitée avec attention.",
  },
  {
    q: "EST-CE QUE JE PEUX VOUS PARLER EN DIRECT ?",
    a: "Bien sûr. Par téléphone, WhatsApp ou visio selon votre préférence. Nous offrons un premier appel découverte gratuit de 30 minutes pour comprendre votre situation, répondre à vos questions et voir si notre accompagnement est adapté à vos besoins. Sans engagement.",
  },
];

function AccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: (typeof FAQ_ITEMS)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`v3-glass overflow-hidden cursor-pointer transition-all duration-400 ${
        isOpen ? "bg-white/[0.06]" : ""
      }`}
      onClick={onToggle}
      style={{
        borderRadius: 16,
        borderColor: isOpen ? "rgba(220,38,38,0.15)" : undefined,
      }}
    >
      {/* Question row */}
      <div className="flex items-center justify-between gap-4 p-5 md:p-6">
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <span
            className="font-[family-name:var(--font-montserrat)] font-black text-lg flex-shrink-0 gradient-text select-none"
            style={{ letterSpacing: "-0.04em", lineHeight: 1 }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xs md:text-sm uppercase tracking-wide text-[var(--text-primary)] leading-tight">
            {item.q}
          </h3>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300"
          style={{
            background: isOpen ? "var(--accent-glow)" : "rgba(255,255,255,0.03)",
            border: `1px solid ${isOpen ? "rgba(220,38,38,0.2)" : "rgba(255,255,255,0.06)"}`,
          }}
        >
          <ChevronDown
            size={14}
            style={{ color: isOpen ? "var(--accent)" : "var(--text-secondary)" }}
          />
        </motion.div>
      </div>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-5 md:px-6 pb-6 pt-0">
              <div className="h-px bg-[var(--border)] mb-4" />
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed pl-9">
                {item.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="v3-section relative bg-[var(--bg-elevated)]" id="faq">
      {/* Aurora glow */}
      <div className="aurora-glow w-[600px] h-[600px] top-1/2 right-0 -translate-y-1/2 opacity-40" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* 2-column layout: sticky heading left + accordion right */}
        <div className="grid grid-cols-1 lg:grid-cols-[420px,1fr] gap-12 lg:gap-20">
          {/* LEFT — Sticky heading + CTA */}
          <div className="lg:sticky lg:top-32 lg:self-start animate-[fadeUp_0.8s_ease-out_both]">
            <div className="flex items-center gap-3 mb-6">
              <div className="para-bars para-bars--sm">
                <div className="para-bar" />
                <div className="para-bar" />
                <div className="para-bar" />
              </div>
              <span className="v3-section-eyebrow-text">FAQ</span>
            </div>

            <h2
              className="v3-section-title"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              VOUS AVEZ DES{" "}
              <span className="gradient-text">QUESTIONS ?</span>
            </h2>

            <p className="v3-tagline text-base mt-4">
              &ldquo;Aucune question n&apos;est trop petite pour votre nouveau départ.&rdquo;
            </p>

            <p className="text-[var(--text-secondary)] text-sm mt-6 leading-relaxed">
              Retrouvez les réponses aux questions les plus fréquentes.
              Si vous ne trouvez pas ce que vous cherchez, contactez-nous directement.
            </p>

            {/* CTA */}
            <div className="mt-10">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 px-8 py-[15px] text-[11px] font-bold tracking-[0.2em] uppercase text-white cursor-pointer"
              >
                <span className="absolute inset-0 bg-[var(--accent)] skew-x-[-12deg] transition-all duration-500 group-hover:bg-[var(--accent-light)] group-hover:scale-[1.04] group-hover:shadow-[0_0_40px_rgba(220,38,38,0.3)]" />
                <MessageCircle className="relative z-10 w-4 h-4" />
                <span className="relative z-10">Parler à un expert</span>
                <ArrowRight className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Decorative element */}
            <div className="hidden lg:flex gap-[4px] mt-12">
              <div className="w-12 h-[2px] bg-[var(--accent)]/20 skew-x-[-12deg]" />
              <div className="w-8 h-[2px] bg-[var(--accent)]/10 skew-x-[-12deg]" />
              <div className="w-4 h-[2px] bg-[var(--accent)]/5 skew-x-[-12deg]" />
            </div>
          </div>

          {/* RIGHT — Accordion */}
          <div className="flex flex-col gap-3 animate-[fadeUp_0.8s_ease-out_0.2s_both]">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem
                key={item.q}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
