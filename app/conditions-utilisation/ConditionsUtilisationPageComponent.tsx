"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { staggerContainer, fadeUp } from "@/lib/animations";

const SECTIONS = [
  {
    title: "Acceptation des conditions",
    content: [
      {
        label: null,
        text: "En accédant au site entrepreneursmorocco.com et en l'utilisant, vous acceptez sans réserve les présentes conditions générales d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site.",
      },
      {
        label: null,
        text: "Entrepreneurs Morocco se réserve le droit de modifier ces conditions à tout moment. Les modifications prennent effet dès leur publication sur cette page. Il vous appartient de consulter régulièrement cette page.",
      },
    ],
  },
  {
    title: "Description des services",
    content: [
      {
        label: null,
        text: "Entrepreneurs Morocco propose des services d'accompagnement pour entrepreneurs et investisseurs souhaitant s'installer ou développer leur activité au Maroc. Les services incluent notamment :",
      },
      {
        label: "Accompagnement à la création d'entreprise",
        text: "Conseil, démarches administratives, statuts juridiques, fiscalité et ouverture bancaire.",
      },
      {
        label: "Formations et programmes",
        text: "Formations en e-commerce, immobilier, innovation et entrepreneuriat au Maroc.",
      },
      {
        label: "Conseil et stratégie",
        text: "Études de marché, marketing, stratégie de développement et accompagnement RH.",
      },
      {
        label: "Réseaux et mise en relation",
        text: "Accès à un réseau d'entrepreneurs, investisseurs et partenaires locaux.",
      },
    ],
  },
  {
    title: "Utilisation du site",
    content: [
      {
        label: null,
        text: "Vous vous engagez à utiliser ce site conformément aux lois et réglementations en vigueur, et à ne pas :",
      },
      {
        label: "Usages interdits",
        text: "Publier, transmettre ou diffuser des contenus illicites, diffamatoires, obscènes ou portant atteinte aux droits de tiers. Tenter d'accéder sans autorisation à des systèmes informatiques. Utiliser le site à des fins commerciales non autorisées ou pour des activités frauduleuses.",
      },
    ],
  },
  {
    title: "Propriété intellectuelle",
    content: [
      {
        label: null,
        text: "L'ensemble du contenu de ce site (textes, images, logos, vidéos, graphismes) est la propriété d'Entrepreneurs Morocco et est protégé par les droits de propriété intellectuelle.",
      },
      {
        label: null,
        text: "Toute reproduction, distribution, modification ou exploitation de ce contenu, en tout ou en partie, est strictement interdite sans autorisation écrite préalable d'Entrepreneurs Morocco.",
      },
    ],
  },
  {
    title: "Limitation de responsabilité",
    content: [
      {
        label: null,
        text: "Les informations diffusées sur ce site sont fournies à titre indicatif et ne constituent pas un conseil juridique, fiscal ou financier. Entrepreneurs Morocco ne saurait être tenu responsable de l'utilisation qui est faite de ces informations.",
      },
      {
        label: null,
        text: "Entrepreneurs Morocco ne garantit pas que le site sera disponible en permanence ou sans interruption. La responsabilité d'Entrepreneurs Morocco ne peut être engagée en cas d'interruption ou d'inaccessibilité du site.",
      },
      {
        label: null,
        text: "Entrepreneurs Morocco ne saurait être tenu pour responsable des dommages directs ou indirects résultant de l'utilisation de ce site ou de l'impossibilité d'y accéder.",
      },
    ],
  },
  {
    title: "Liens externes",
    content: [
      {
        label: null,
        text: "Ce site peut contenir des liens vers des sites tiers. Ces liens sont fournis à titre informatif uniquement. Entrepreneurs Morocco n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu, leurs politiques de confidentialité ou leurs pratiques.",
      },
    ],
  },
  {
    title: "Comptes utilisateurs",
    content: [
      {
        label: null,
        text: "Si vous créez un compte sur notre site, vous êtes responsable du maintien de la confidentialité de vos identifiants et de toutes les activités effectuées depuis votre compte. Vous acceptez de nous informer immédiatement de toute utilisation non autorisée de votre compte.",
      },
    ],
  },
  {
    title: "Loi applicable et juridiction",
    content: [
      {
        label: null,
        text: "Les présentes conditions d'utilisation sont régies par le droit marocain. Tout litige relatif à l'utilisation de ce site sera soumis à la compétence exclusive des tribunaux de Marrakech, Maroc.",
      },
    ],
  },
  {
    title: "Contact",
    content: [
      {
        label: null,
        text: "Pour toute question relative aux présentes conditions d'utilisation, contactez-nous :",
      },
      {
        label: "Email",
        text: "salam@entrepreneursmorocco.com",
      },
      {
        label: "Adresse",
        text: "Immeuble STAVROULA, Gueliz, Marrakech 40000, Maroc",
      },
      {
        label: "Téléphone",
        text: "+33 6 44 66 02 52",
      },
    ],
  },
];

export default function ConditionsUtilisationPageComponent() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero */}
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute top-0 right-1/3 w-[600px] h-[400px] rounded-full bg-[var(--accent)]/[0.03] blur-[150px] pointer-events-none" />

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
              Règles d'utilisation
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="font-[family-name:var(--font-montserrat)] font-black text-4xl md:text-5xl uppercase text-white leading-[1.05] tracking-tight mb-4"
            >
              Conditions{" "}
              <span className="gradient-text">d'utilisation</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-[var(--text-secondary)] text-base max-w-xl"
            >
              Les présentes conditions régissent votre utilisation du site
              entrepreneursmorocco.com. En naviguant sur ce site, vous
              acceptez ces conditions dans leur intégralité.
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
                  href="/mentions-legales"
                  className="text-sm text-[var(--accent-light)] hover:text-white transition-colors duration-200"
                >
                  → Mentions légales
                </Link>
                <Link
                  href="/politique-confidentialite"
                  className="text-sm text-[var(--accent-light)] hover:text-white transition-colors duration-200"
                >
                  → Politique de confidentialité
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
