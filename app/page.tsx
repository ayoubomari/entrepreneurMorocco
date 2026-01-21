import { Metadata } from "next";
import HomePageClient from "./PageComponent";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.entrepreneursmorocco.com"),
  title: "Entrepreneurs Morocco",
  description:
    "Accompagnement expert pour MRE et entrepreneurs au Maroc. De la création d'entreprise à l'installation de votre famille, nous simplifions votre projet de vie.",
  keywords: [
    "Entreprendre au Maroc",
    "MRE Maroc",
    "Création entreprise Maroc",
    "S'installer au Maroc",
    "Investir au Maroc",
    "Accompagnement entrepreneurs",
    "Pack Family Maroc",
    "Guide MRE Maroc",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Entrepreneurs Morocco | On vous montre le chemin",
    description:
      "Simplifiez votre installation professionnelle et personnelle au Maroc avec Imad & Zakaria.",
    url: "https://www.entrepreneursmorocco.com",
    siteName: "Entrepreneurs Morocco",
    images: [
      {
        url: "/logofooter.png",
        width: 1200,
        height: 630,
        alt: "Entrepreneurs Morocco - Accompagnement Business et Installation",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Entrepreneurs Morocco | Entreprendre au Maroc",
    description:
      "Accompagnement sur mesure pour réussir votre retour ou votre installation au Maroc.",
    images: ["/logofooter.png"],
  },
};

const HomePage = () => {
  return <HomePageClient />;
};

export default HomePage;
