import { Metadata } from "next";
import FormationsPageComponent from "./FormationsPageComponent";

export const metadata: Metadata = {
  title:
    "Formations Entrepreneur, E-commerce & IA au Maroc | Entrepreneurs Morocco",
  description:
    "Accélérez votre réussite avec nos 4 programmes pratiques : Entrepreneur 360°, E-commerce (Ads/Logistique), IA & Automatisation (No-code), et Innovation Tech.",
  keywords: [
    "Formation entrepreneur Maroc",
    "Formation e-commerce Maroc",
    "Formation IA et No-code",
    "Business digital Maroc",
    "Formation GreenTech Maroc",
    "Digital Nomad Maroc",
    "Formation création entreprise",
  ],
  openGraph: {
    title:
      "Formations Pratiques : Lancez et Digitalisez votre Business au Maroc",
    description:
      "De la création d'entreprise à l'automatisation IA : découvrez nos cursus intensifs pour entrepreneurs et digital nomads.",
    url: "/formations",
    siteName: "Entrepreneurs Morocco",
    images: [
      {
        url: "/logo.jpg",
        width: 403,
        height: 120,
        alt: "Entrepreneurs Morocco - Catalogue de Formations",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "/formations",
  },
};

export default function FormationsPage() {
  return <FormationsPageComponent />;
}
