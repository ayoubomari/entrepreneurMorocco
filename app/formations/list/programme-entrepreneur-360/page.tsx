import { Metadata } from "next";
import ProgrammeEntrepreneur360 from "./ProgrammeEntrepreneur360";

export const metadata: Metadata = {
  title: "Formation Entrepreneur 360° au Maroc | Entrepreneurs Morocco",
  description:
    "Programme complet pour lancer votre activité au Maroc : bilan de compétences, création d'entreprise, stratégie marketing et mise en réseau investisseurs.",
  openGraph: {
    title: "Formation Entrepreneur 360° — Lancer son business au Maroc",
    description:
      "De l'idée au lancement : bilan, création juridique, marketing et réseau. Le programme tout-en-un pour entreprendre au Maroc.",
    url: "/formations/list/programme-entrepreneur-360",
  },
  alternates: { canonical: "/formations/list/programme-entrepreneur-360" },
};

export default function Page() {
  return <ProgrammeEntrepreneur360 />;
}
