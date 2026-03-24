import { Metadata } from "next";
import ConditionsUtilisationPageComponent from "./ConditionsUtilisationPageComponent";

export const metadata: Metadata = {
  title: "Conditions d'Utilisation | Entrepreneurs Morocco",
  description: "Conditions générales d'utilisation du site Entrepreneurs Morocco — règles d'usage, responsabilités et droits des utilisateurs.",
  alternates: {
    canonical: "/conditions-utilisation",
  },
};

export default function ConditionsUtilisationPage() {
  return <ConditionsUtilisationPageComponent />;
}
