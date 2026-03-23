"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";

const Audience = dynamic(() => import("@/components/sections/Audience"));
const Accompagnements = dynamic(() => import("@/components/sections/Accompagnements"));
const Services = dynamic(() => import("@/components/sections/Services"));
const Methodology = dynamic(() => import("@/components/sections/Methodology"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const Network = dynamic(() => import("@/components/sections/Network"));
const Podcast = dynamic(() => import("@/components/sections/Podcast"));
const GuideDownloadForm = dynamic(() => import("@/components/forms/GuideDownloadForm"));
const Resources = dynamic(() => import("@/components/sections/Resources"));
const AboutUs = dynamic(() => import("@/components/sections/AboutUs"));
const ContactSection = dynamic(() => import("@/components/forms/ContactSection"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const FooterV3 = dynamic(() => import("@/components/sections/Footer"));

export default function HomePageClient() {
  return (
    <div className="min-h-screen">
      <Hero />

      <div className="v3-divider" />
      <Audience />

      <div className="v3-divider" />
      <Accompagnements />

      <div className="v3-divider" />
      <Services />

      <div className="v3-divider" />
      <Methodology />

      <div className="v3-divider" />
      <Testimonials />

      <div className="v3-divider" />
      <Network />

      <div className="v3-divider" />
      <Podcast />

      <div className="v3-divider" />
      <GuideDownloadForm />

      <div className="v3-divider" />
      <Resources />

      <div className="v3-divider" />
      <AboutUs />

      <div className="v3-divider" />
      <ContactSection />

      <div className="v3-divider" />
      <FAQ />

      <FooterV3 />
    </div>
  );
}
