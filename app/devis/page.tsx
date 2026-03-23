import { Metadata } from "next";
import DevisComponent from "./DevisComponent";

export const metadata: Metadata = {
  title:
    "Devis Sur-Mesure : Services Digitaux & Business au Maroc | Entrepreneurs Morocco",
  description:
    "Demandez un devis personnalisé pour vos besoins au Maroc : création de site web, SEO, branding, publicité en ligne et stratégie de contenu. Réponse sous 48h.",
  keywords: [
    "Devis site web Maroc",
    "Expert SEO Maroc",
    "Agence branding Maroc",
    "Publicité digitale Maroc",
    "Marketing digital Maroc",
    "Services business Maroc",
    "Accompagnement digital MRE",
    "Création de contenu Maroc",
  ],
  openGraph: {
    title: "Demande de Devis Personnalisé - Entrepreneurs Morocco",
    description:
      "Besoin d'un site web, d'une stratégie SEO ou d'une identité visuelle au Maroc ? Parlez-nous de votre projet et recevez une offre sur-mesure adaptée à vos objectifs.",
    url: "/devis",
    siteName: "Entrepreneurs Morocco",
    images: [
      {
        url: "/images/hero-cfc-poster.jpg",
        width: 1920,
        height: 1080,
        alt: "Entrepreneurs Morocco - Devis Services Digitaux",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "/devis",
  },
};

export default function Devis() {
  return <DevisComponent />;
}
