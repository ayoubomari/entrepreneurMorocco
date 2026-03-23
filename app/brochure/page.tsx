import { Metadata } from "next";
import BrochurePageComponent from "./BrochurePageComponent";

export const metadata: Metadata = {
  title:
    "Brochure Complète : Entreprendre & S'installer au Maroc | Entrepreneurs Morocco",
  description:
    "Téléchargez notre brochure détaillée : découvrez nos tarifs, nos services d'accompagnement (administratif, fiscal, installation) et notre méthodologie pour réussir votre projet au Maroc.",
  keywords: [
    "Brochure Entreprendre Maroc",
    "Guide installation Maroc",
    "Tarifs création entreprise Maroc",
    "Accompagnement MRE Maroc",
    "Services aux entrepreneurs Maroc",
    "S'installer au Maroc",
    "Investir au Maroc guide",
  ],
  openGraph: {
    title: "Téléchargez la Brochure de l'Offre - Entrepreneurs Morocco",
    description:
      "Contenu détaillé, tarifs et délais de nos accompagnements pour entreprendre et s'installer au Maroc sans stress.",
    url: "/brochure",
    siteName: "Entrepreneurs Morocco",
    images: [
      {
        url: "/images/hero-cfc-poster.jpg",
        width: 1920,
        height: 1080,
        alt: "Entrepreneurs Morocco - Télécharger la Brochure",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "/brochure",
  },
};

export default function BrochurePage() {
  return <BrochurePageComponent />;
}
