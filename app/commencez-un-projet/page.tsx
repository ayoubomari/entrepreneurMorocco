import { Metadata } from "next";
import CommencezUnProjetComponent from "./CommencezUnProjetComponent";

export const metadata: Metadata = {
  title:
    "Plan d'Action Personnalisé : Commencez Votre Projet au Maroc | Entrepreneurs Morocco",
  description:
    "Répondez à 3 questions rapides pour recevoir votre plan d'action personnalisé par email. Un accompagnement sur-mesure pour MRE, freelances et familles souhaitant entreprendre au Maroc.",
  keywords: [
    "Projet entrepreneurial Maroc",
    "Investir au Maroc",
    "Accompagnement personnalisé Maroc",
    "MRE retour au Maroc",
    "Plan d'action business Maroc",
    "Création entreprise Maroc",
    "S'installer au Maroc",
  ],
  openGraph: {
    title: "Dites-nous où vous en êtes - Votre Plan d'Action au Maroc",
    description:
      "Quel est votre profil ? Où en êtes-vous ? Recevez des conseils adaptés à votre situation pour réussir votre lancement au Maroc.",
    url: "/commencez-un-projet",
    siteName: "Entrepreneurs Morocco",
    images: [
      {
        url: "/logo.jpg",
        width: 403,
        height: 120,
        alt: "Entrepreneurs Morocco - Questionnaire Projet",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "/commencez-un-projet",
  },
};

export default function CommencezUnProjet() {
  return <CommencezUnProjetComponent />;
}
