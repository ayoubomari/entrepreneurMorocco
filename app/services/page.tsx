import { Metadata } from "next";
import ServicesPageComponent from "./ServicesPageComponent";

export const metadata: Metadata = {
  title: "Services pour Entreprendre au Maroc : Création, Growth & Réseau",
  description:
    "Accompagnement 360° : Création d'entreprise, étude de marché, marketing digital, recrutement, formation et accès exclusif à notre Club Privilège.",
  keywords: [
    "Création entreprise Maroc",
    "Étude de marché Maroc",
    "Marketing digital Maroc",
    "Recrutement Maroc",
    "Formation entrepreneur Maroc",
    "Réseau d'affaires Maroc",
    "Club investisseurs Maroc",
    "Entrepreneurs Morocco services",
  ],
  openGraph: {
    title: "Nos 7 Services pour Réussir votre Business au Maroc",
    description:
      "De la création juridique à l'acquisition client : découvrez nos solutions complètes (Fiscalité, RH, Growth, Networking) pour les MRE et investisseurs.",
    url: "/services",
    siteName: "Entrepreneurs Morocco",
    images: [
      {
        url: "/logo.jpg",
        width: 403,
        height: 120,
        alt: "Entrepreneurs Morocco - Services 360",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesPageComponent />;
}
