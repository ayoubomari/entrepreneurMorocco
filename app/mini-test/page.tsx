import { Metadata } from "next";
import MiniTestComponent from "./MiniTestComponent";

export const metadata: Metadata = {
  title:
    "Test : Êtes-vous prêt à Entreprendre ou s'installer au Maroc ? | Entrepreneurs Morocco",
  description:
    "Faites le test en 1 minute pour clarifier votre situation. Identifiez vos obstacles (fiscalité, logement, administratif) et recevez vos prochaines étapes concrètes par email.",
  keywords: [
    "Test entrepreneuriat Maroc",
    "Diagnostic projet Maroc",
    "S'installer au Maroc MRE",
    "Guide investissement Maroc",
    "Aide création entreprise Maroc",
    "Formalités administratives Maroc",
    "Étapes installation Maroc",
  ],
  openGraph: {
    title: "Mini Test : Par où commencer votre projet au Maroc ?",
    description:
      "Marre du manque d'infos fiables ? Faites le test pour obtenir une feuille de route claire selon votre profil (Investisseur, Famille, Entrepreneur).",
    url: "/mini-test",
    siteName: "Entrepreneurs Morocco",
    images: [
      {
        url: "/logo.jpg",
        width: 403,
        height: 120,
        alt: "Entrepreneurs Morocco - Mini Test Diagnostic",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "/mini-test",
  },
};

export default function MiniTest() {
  return <MiniTestComponent />;
}
