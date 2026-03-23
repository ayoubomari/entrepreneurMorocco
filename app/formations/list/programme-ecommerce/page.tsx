import { Metadata } from "next";
import ProgrammeEcommerce from "./ProgrammeEcommerce";

export const metadata: Metadata = {
  title: "Formation E-Commerce & Business Digital au Maroc | Entrepreneurs Morocco",
  description:
    "Lancez votre boutique en ligne, maîtrisez Meta Ads & TikTok Ads, et développez votre logistique export depuis le Maroc.",
  openGraph: {
    title: "Formation E-Commerce & Business Digital au Maroc",
    description: "De la boutique en ligne à la logistique export : le programme complet pour réussir dans le e-commerce depuis le Maroc.",
    url: "/formations/list/programme-ecommerce",
  },
  alternates: { canonical: "/formations/list/programme-ecommerce" },
};

export default function Page() {
  return <ProgrammeEcommerce />;
}
