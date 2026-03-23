import { Metadata } from "next";
import SetupPageComponent from "./SetupPageComponent";

export const metadata: Metadata = {
  title:
    "Setup Complet : Entreprendre et S'installer au Maroc | Entrepreneurs Morocco",
  description:
    "Méthodologie en 4 étapes pour lancer votre projet : Bilan de compétences, création juridique (statuts/banque), installation (RH/bureaux) et stratégie go-to-market.",
  keywords: [
    "Entreprendre au Maroc",
    "Création entreprise Maroc",
    "Fiscalité Maroc",
    "Bilan de compétences entrepreneur",
    "Installation business Maroc",
    "Recrutement Maroc",
    "Statuts juridiques Maroc",
  ],
  openGraph: {
    title: "Setup Complet : De l'Idée aux Premiers Clients au Maroc",
    description:
      "Diagnostic, Juridique, Implantation et Lancement. Découvrez notre parcours guidé pour réussir votre installation au Maroc.",
    url: "/setup",
    siteName: "Entrepreneurs Morocco",
    images: [
      {
        url: "/images/hero-cfc-poster.jpg",
        width: 1920,
        height: 1080,
        alt: "Entrepreneurs Morocco - Méthodologie Setup",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "/setup",
  },
};

export default function SetupPage() {
  return <SetupPageComponent />;
}
