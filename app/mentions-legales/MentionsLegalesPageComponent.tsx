"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { staggerContainer, fadeUp } from "@/lib/animations";

const SECTIONS = [
  {
    title: "Éditeur du site",
    content: [
      {
        label: "Dénomination sociale",
        text: "Entrepreneurs Morocco",
      },
      {
        label: "Adresse",
        text: "Immeuble STAVROULA, Gueliz, Marrakech 40000, Maroc",
      },
      {
        label: "Téléphone",
        text: "+33 6 44 66 02 52",
      },
      {
        label: "Email",
        text: "salam@entrepreneursmorocco.com",
      },
      {
        label: "Directeurs de la publication",
        text: "Imad & Zakaria",
      },
    ],
  },
  {
    title: "Hébergement",
    content: [
      {
        label: "Hébergeur",
        text: "Le site entrepreneursmorocco.com est hébergé sur des serveurs sécurisés. Pour toute question relative à l'hébergement, vous pouvez nous contacter à l'adresse salam@entrepreneursmorocco.com.",
      },
    ],
  },
  {
    title: "Propriété intellectuelle",
    content: [
      {
        label: null,
        text: "L'ensemble du contenu présent sur ce site (textes, images, logos, vidéos, graphismes, icônes) est la propriété exclusive d'Entrepreneurs Morocco ou de ses partenaires, et est protégé par les lois relatives à la propriété intellectuelle applicables au Maroc et à l'international.",
      },
      {
        label: null,
        text: "Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable d'Entrepreneurs Morocco.",
      },
    ],
  },
  {
    title: "Responsabilité",
    content: [
      {
        label: null,
        text: "Entrepreneurs Morocco s'efforce de fournir sur ce site des informations aussi précises que possible. Toutefois, les informations et/ou documents figurant sur ce site sont susceptibles de contenir des inexactitudes techniques et des erreurs typographiques.",
      },
      {
        label: null,
        text: "Entrepreneurs Morocco se réserve le droit de corriger, à tout moment et sans préavis, le contenu de ce site. La responsabilité d'Entrepreneurs Morocco ne peut être engagée en raison d'une information, opinion ou recommandation formulée par un tiers.",
      },
    ],
  },
  {
    title: "Liens hypertextes",
    content: [
      {
        label: null,
        text: "Le site peut contenir des liens hypertextes vers d'autres sites présents sur le réseau Internet. Entrepreneurs Morocco n'a pas la possibilité de vérifier le contenu des sites ainsi visités et décline donc toute responsabilité de ce fait quant aux risques éventuels de contenus illicites.",
      },
    ],
  },
  {
    title: "Droit applicable",
    content: [
      {
        label: null,
        text: "Les présentes mentions légales sont soumises au droit marocain. En cas de litige, les tribunaux marocains seront seuls compétents.",
      },
    ],
  },
];

export default function MentionsLegalesPageComponent() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero */}
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] rounded-full bg-[var(--accent)]/[0.03] blur-[150px] pointer-events-none" />

        <Container className="relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-medium tracking-[0.12em] uppercase border border-[var(--accent)]/20 text-[var(--accent-light)] bg-[var(--accent)]/[0.06] mb-6"
            >
              Informations légales
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="font-[family-name:var(--font-montserrat)] font-black text-4xl md:text-5xl uppercase text-white leading-[1.05] tracking-tight mb-4"
            >
              Mentions <span className="gradient-text">légales</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-[var(--text-secondary)] text-base max-w-xl"
            >
              Conformément aux dispositions légales en vigueur, vous trouverez
              ci-dessous les informations relatives à l'éditeur du site
              entrepreneursmorocco.com.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Sommaire */}
      <section className="relative pb-12">
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={fadeUp} className="v3-glass p-8 rounded-2xl">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[var(--accent)] mb-6">
                Sommaire
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
                {SECTIONS.map((section, i) => (
                  <a
                    key={section.title}
                    href={`#section-${i}`}
                    className="flex items-baseline gap-3 group"
                  >
                    <span className="text-[11px] font-bold text-[var(--accent)] tabular-nums shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-[var(--text-secondary)] group-hover:text-white transition-colors duration-200">
                      {section.title}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Content */}
      <section className="relative pb-32">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto flex flex-col gap-6"
          >
            {SECTIONS.map((section, i) => (
              <motion.div
                key={section.title}
                id={`section-${i}`}
                variants={fadeUp}
                transition={{ delay: i * 0.05 }}
                className="v3-glass p-8 rounded-2xl"
              >
                <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-lg uppercase text-white mb-5 pb-4 border-b border-white/[0.06]">
                  {section.title}
                </h2>
                <div className="flex flex-col gap-4">
                  {section.content.map((item, j) => (
                    <div key={j}>
                      {item.label && (
                        <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[var(--accent-light)] block mb-1">
                          {item.label}
                        </span>
                      )}
                      <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Links to other legal pages */}
            <motion.div
              variants={fadeUp}
              className="v3-glass p-8 rounded-2xl"
            >
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-lg uppercase text-white mb-5 pb-4 border-b border-white/[0.06]">
                Documents associés
              </h2>
              <div className="flex flex-col gap-3">
                <Link
                  href="/politique-confidentialite"
                  className="text-sm text-[var(--accent-light)] hover:text-white transition-colors duration-200"
                >
                  → Politique de confidentialité
                </Link>
                <Link
                  href="/conditions-utilisation"
                  className="text-sm text-[var(--accent-light)] hover:text-white transition-colors duration-200"
                >
                  → Conditions d'utilisation
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
