import { Metadata } from "next";
import BenificesPageComponent from "./BenificesPageComponent";

export const metadata: Metadata = {
  title:
    "Pourquoi Investir au Maroc ? Opportunités 2030 & MRE | Entrepreneurs Morocco",
  description:
    "Croissance, Vision 2030 et infrastructures : découvrez les chiffres clés et opportunités concrètes pour entreprendre au Maroc (KPI, Tanger Med, Digital).",
  keywords: [
    "Investir au Maroc",
    "Vision 2030 Maroc",
    "Coupe du Monde 2030 opportunités",
    "Entreprendre au Maroc MRE",
    "Tanger Med logistique",
    "Écosystème digital Maroc",
    "Croissance économique Maroc",
  ],
  openGraph: {
    title: "Pourquoi Investir et Entreprendre au Maroc aujourd'hui ?",
    description:
      "De la Vision 2030 aux avantages pour la diaspora : chiffres clés (KPI) et opportunités sectorielles pour lancer votre projet.",
    url: "/benefices",
    siteName: "Entrepreneurs Morocco",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/logofooter.png",
        width: 1200,
        height: 630,
        alt: "Investir au Maroc - Opportunités et Vision 2030",
      },
    ],
  },
  alternates: {
    canonical: "/benefices",
  },
};

export default function BeneficesPage() {
  return <BenificesPageComponent />;
}
