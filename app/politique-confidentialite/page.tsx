import { Metadata } from "next";
import PolitiqueConfidentialitePageComponent from "./PolitiqueConfidentialitePageComponent";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Entrepreneurs Morocco",
  description: "Politique de confidentialité d'Entrepreneurs Morocco — comment nous collectons, utilisons et protégeons vos données personnelles.",
  alternates: {
    canonical: "/politique-confidentialite",
  },
};

export default function PolitiqueConfidentialitePage() {
  return <PolitiqueConfidentialitePageComponent />;
}
