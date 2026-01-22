import { Metadata } from "next";
import DiagnosticProjectMarocComponent from "./DiagnosticProjectMarocComponent";

export const metadata: Metadata = {
  title: "Diagnostic Maturité Projet Maroc 2030 | Entrepreneurs Morocco",
  description:
    "Évaluez la viabilité de votre projet d'installation au Maroc. Répondez au diagnostic pour obtenir votre score de préparation, votre plan d'action personnalisé et un appel stratégique offert.",
  keywords: [
    "Diagnostic projet Maroc",
    "Maturité business Maroc",
    "Entreprendre au Maroc 2030",
    "Installation MRE Maroc",
    "Business Plan Maroc",
    "Investir au Maroc guide",
    "Étude de faisabilité Maroc",
    "Accompagnement expatriation Maroc",
  ],
  openGraph: {
    title: "Votre projet au Maroc est-il prêt ? Faites le Diagnostic Complet",
    description:
      "Score de maturité, analyse de situation financière et plan d'action. Découvrez si c'est le bon moment pour lancer votre activité au Maroc.",
    url: "/diagnostic-projet-maroc",
    siteName: "Entrepreneurs Morocco",
    images: [
      {
        url: "/logo.jpg",
        width: 403,
        height: 120,
        alt: "Entrepreneurs Morocco - Diagnostic Projet Maroc 2030",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "/diagnostic-projet-maroc",
  },
};

export default function DiagnosticProjectMaroc() {
  return <DiagnosticProjectMarocComponent />;
}
