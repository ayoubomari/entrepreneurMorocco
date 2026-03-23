import { Metadata } from "next";
import HomePageClient from "./PageComponent";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.entrepreneursmorocco.com"),
  title: "Entrepreneurs Morocco | Accompagnement Business & Installation au Maroc",
  description:
    "Le guichet unique pour entreprendre au Maroc. Création d'entreprise, fiscalité, immobilier, titre de séjour — accompagnement complet pour MRE, investisseurs et entrepreneurs. +500 familles accompagnées.",
  keywords: [
    "Entreprendre au Maroc",
    "MRE Maroc retour",
    "Création entreprise Maroc",
    "S'installer au Maroc",
    "Investir au Maroc",
    "Accompagnement entrepreneurs Maroc",
    "Fiscalité Maroc",
    "Titre de séjour Maroc",
    "Immobilier Maroc",
    "Business Plan Maroc",
    "CFC Casablanca",
    "Maroc 2030",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Entrepreneurs Morocco | Votre partenaire pour réussir au Maroc",
    description:
      "De l'idée à la concrétisation — stratégie, juridique, installation. +500 entrepreneurs accompagnés. Création d'entreprise, fiscalité, immobilier au Maroc.",
    url: "https://www.entrepreneursmorocco.com",
    siteName: "Entrepreneurs Morocco",
    images: [
      {
        url: "/images/hero-cfc-poster.jpg",
        width: 1920,
        height: 1080,
        alt: "Entrepreneurs Morocco - Casablanca Finance City",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Entrepreneurs Morocco | Entreprendre au Maroc simplifié",
    description:
      "+500 entrepreneurs accompagnés. Création d'entreprise, fiscalité, immobilier — votre guichet unique pour réussir au Maroc.",
    images: ["/images/hero-cfc-poster.jpg"],
  },
};

const HomePage = () => {
  return <HomePageClient />;
};

export default HomePage;
