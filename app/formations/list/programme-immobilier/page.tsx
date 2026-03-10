import { Metadata } from "next";
import ProgrammeImmobilierComponent from "./programmeImmobilierComponent";

export const metadata: Metadata = {
  title: "Devenez Conseiller en Investissement Immobilier au Maroc",
  description:
    "Une formation immersive de 14 jours à Marrakech pour comprendre le marché immobilier marocain et accéder à des opportunités professionnelles.",
};

export default function ProgrammeImmobilier() {
  return <ProgrammeImmobilierComponent />;
}
