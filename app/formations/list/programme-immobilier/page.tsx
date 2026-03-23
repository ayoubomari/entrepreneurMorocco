import { Metadata } from "next";
import ProgrammeImmobilierComponent from "./ProgrammeImmobilierComponent";

export const metadata: Metadata = {
  title:
    "Devenez Conseiller en Investissement Immobilier au Maroc | Entrepreneurs Morocco",
  description:
    "Formation immersive de 14 jours à Marrakech pour comprendre le marché immobilier marocain, analyser la rentabilité des projets et accéder à des opportunités professionnelles.",
  keywords: [
    "Formation immobilier Maroc",
    "Conseiller en investissement immobilier",
    "Investissement immobilier Marrakech",
    "Formation agent immobilier Maroc",
    "Marché immobilier marocain",
    "Reconversion professionnelle immobilier",
    "Formation rentabilité immobilière",
    "Entrepreneurs Morocco",
  ],
  openGraph: {
    title: "Formation : Conseiller en Investissement Immobilier au Maroc",
    description:
      "Participez à notre formation immersive de 14 jours à Marrakech. Acquérez les compétences pour analyser, sécuriser des projets immobiliers et décrochez un poste en agence partenaire.",
    url: "/formations/list/programme-immobilier",
    siteName: "Entrepreneurs Morocco",
    images: [
      {
        url: "/images/hero-cfc-poster.jpg",
        width: 1920,
        height: 1080,
        alt: "Formation Conseiller en Investissement Immobilier - Entrepreneurs Morocco",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "/formations/list/programme-immobilier",
  },
};

export default function ProgrammeImmobilier() {
  return <ProgrammeImmobilierComponent />;
}
