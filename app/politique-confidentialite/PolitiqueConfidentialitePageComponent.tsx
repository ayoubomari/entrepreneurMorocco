"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { staggerContainer, fadeUp } from "@/lib/animations";

const SECTIONS = [
  {
    title: "Introduction",
    content: [
      {
        label: null,
        text: "Entrepreneurs Morocco s'engage à protéger la vie privée des utilisateurs de son site web entrepreneursmorocco.com. La présente politique de confidentialité décrit comment nous collectons, utilisons et protégeons vos informations personnelles lorsque vous utilisez notre site.",
      },
      {
        label: null,
        text: "En utilisant notre site, vous acceptez les pratiques décrites dans la présente politique. Si vous n'acceptez pas ces pratiques, nous vous invitons à ne pas utiliser notre site.",
      },
    ],
  },
  {
    title: "Données collectées",
    content: [
      {
        label: "Données que vous nous fournissez",
        text: "Lors de l'utilisation de nos formulaires (contact, devis, téléchargement de brochure, quiz), nous pouvons collecter : votre nom, prénom, adresse email, numéro de téléphone, ainsi que toute information que vous choisissez de partager dans vos messages.",
      },
      {
        label: "Données collectées automatiquement",
        text: "Lors de votre visite, nous collectons automatiquement certaines informations techniques telles que votre adresse IP, le type et la version de votre navigateur, les pages consultées, la date et l'heure de votre visite.",
      },
      {
        label: "Cookies",
        text: "Notre site utilise des cookies pour améliorer votre expérience de navigation, analyser l'utilisation du site et personnaliser le contenu. Vous pouvez désactiver les cookies dans les paramètres de votre navigateur, mais cela pourrait affecter certaines fonctionnalités du site.",
      },
    ],
  },
  {
    title: "Utilisation des données",
    content: [
      {
        label: null,
        text: "Nous utilisons vos données personnelles pour les finalités suivantes :",
      },
      {
        label: "Répondre à vos demandes",
        text: "Traiter vos demandes de contact, de devis ou d'informations et vous apporter les réponses adaptées.",
      },
      {
        label: "Améliorer nos services",
        text: "Analyser l'utilisation du site pour améliorer l'expérience utilisateur et nos offres de services.",
      },
      {
        label: "Communication",
        text: "Vous envoyer des informations sur nos services, formations et actualités si vous y avez consenti.",
      },
      {
        label: "Conformité légale",
        text: "Respecter nos obligations légales et réglementaires applicables.",
      },
    ],
  },
  {
    title: "Partage des données",
    content: [
      {
        label: null,
        text: "Nous ne vendons, ne louons et ne partageons pas vos données personnelles avec des tiers à des fins commerciales. Vos données peuvent toutefois être transmises à des prestataires techniques (hébergement, envoi d'emails) dans le cadre strict de l'exécution de leurs services.",
      },
      {
        label: null,
        text: "Nous pouvons également communiquer vos données si la loi l'exige ou si cela est nécessaire pour protéger nos droits légaux.",
      },
    ],
  },
  {
    title: "Conservation des données",
    content: [
      {
        label: null,
        text: "Nous conservons vos données personnelles uniquement le temps nécessaire aux finalités pour lesquelles elles ont été collectées, ou conformément aux exigences légales applicables. À l'issue de cette période, vos données sont supprimées ou anonymisées.",
      },
    ],
  },
  {
    title: "Vos droits",
    content: [
      {
        label: null,
        text: "Conformément à la législation applicable en matière de protection des données, vous disposez des droits suivants :",
      },
      {
        label: "Droit d'accès",
        text: "Vous pouvez demander l'accès aux données personnelles que nous détenons à votre sujet.",
      },
      {
        label: "Droit de rectification",
        text: "Vous pouvez demander la correction de données inexactes ou incomplètes.",
      },
      {
        label: "Droit à l'effacement",
        text: "Vous pouvez demander la suppression de vos données personnelles dans certaines circonstances.",
      },
      {
        label: "Droit d'opposition",
        text: "Vous pouvez vous opposer au traitement de vos données à des fins de prospection commerciale.",
      },
    ],
  },
  {
    title: "Sécurité",
    content: [
      {
        label: null,
        text: "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, perte, destruction ou altération.",
      },
    ],
  },
  {
    title: "Contact",
    content: [
      {
        label: null,
        text: "Pour exercer vos droits ou pour toute question relative à la présente politique de confidentialité, vous pouvez nous contacter :",
      },
      {
        label: "Email",
        text: "salam@entrepreneursmorocco.com",
      },
      {
        label: "Adresse",
        text: "Immeuble STAVROULA, Gueliz, Marrakech 40000, Maroc",
      },
    ],
  },
  {
    title: "Modifications",
    content: [
      {
        label: null,
        text: "Nous nous réservons le droit de modifier la présente politique de confidentialité à tout moment. Toute modification prendra effet dès sa publication sur cette page. Nous vous invitons à consulter régulièrement cette page.",
      },
    ],
  },
];

export default function PolitiqueConfidentialitePageComponent() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero */}
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full bg-[var(--accent)]/[0.03] blur-[150px] pointer-events-none" />

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
              Confidentialité & données
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="font-[family-name:var(--font-montserrat)] font-black text-4xl md:text-5xl uppercase text-white leading-[1.05] tracking-tight mb-4"
            >
              Politique de{" "}
              <span className="gradient-text">confidentialité</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-[var(--text-secondary)] text-base max-w-xl"
            >
              Nous prenons la protection de vos données personnelles très au
              sérieux. Cette page vous explique comment nous collectons,
              utilisons et protégeons vos informations.
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
