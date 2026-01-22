import { Metadata } from "next";
import ContactQuizComponent from "./ContactQuizComponent";

export const metadata: Metadata = {
  title:
    "Devis & Tarifs : Votre Pack d'Accompagnement au Maroc | Entrepreneurs Morocco",
  description:
    "Choisissez votre formule : Pack Starter (solo), Pack Family (MRE & installation) ou Pack Growth (startup). Obtenez un devis personnalisé pour votre projet au Maroc.",
  keywords: [
    "Tarifs création entreprise Maroc",
    "Prix accompagnement MRE",
    "Devis installation Maroc",
    "Pack business Maroc",
    "Coût création société Maroc",
    "Services expatriation Maroc",
    "Accompagnement startup Maroc",
  ],
  openGraph: {
    title: "Quel pack d'accompagnement pour votre projet au Maroc ?",
    description:
      "Comparez nos offres Starter, Family et Growth. Recevez une proposition chiffrée adaptée à votre profil et à vos besoins d'installation.",
    url: "/contact-quiz",
    siteName: "Entrepreneurs Morocco",
    images: [
      {
        url: "/logo.jpg",
        width: 403,
        height: 120,
        alt: "Entrepreneurs Morocco - Devis et Packs",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "/contact-quiz",
  },
};

export default function ContactQuizPage() {
  return <ContactQuizComponent />;
}
