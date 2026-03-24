import { Metadata } from "next";
import MentionsLegalesPageComponent from "./MentionsLegalesPageComponent";

export const metadata: Metadata = {
  title: "Mentions Légales | Entrepreneurs Morocco",
  description: "Mentions légales du site Entrepreneurs Morocco — informations sur l'éditeur, l'hébergement et la propriété intellectuelle.",
  alternates: {
    canonical: "/mentions-legales",
  },
};

export default function MentionsLegalesPage() {
  return <MentionsLegalesPageComponent />;
}
