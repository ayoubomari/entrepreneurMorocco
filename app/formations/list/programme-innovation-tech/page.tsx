import { Metadata } from "next";
import ProgrammeInnovationTech from "./ProgrammeInnovationTech";

export const metadata: Metadata = {
  title: "Formation Innovation & Tech au Maroc | Entrepreneurs Morocco",
  description:
    "Blockchain, IA, GreenTech, Cybersécurité : explorez les technologies de demain pour créer un business innovant au Maroc.",
  openGraph: {
    title: "Formation Innovation & Tech au Maroc",
    description: "Blockchain, IA, GreenTech : le programme pour les entrepreneurs tech au Maroc.",
    url: "/formations/list/programme-innovation-tech",
  },
  alternates: { canonical: "/formations/list/programme-innovation-tech" },
};

export default function Page() {
  return <ProgrammeInnovationTech />;
}
