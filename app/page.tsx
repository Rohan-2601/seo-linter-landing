import Image from "next/image";
import { Hero } from "@/components/Hero";
import FeatureSection from "@/components/Feature";
import { Cta } from "@/components/Cta";
import { LandingFooter } from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeatureSection />
      <Cta />
      <LandingFooter />
    </div>
  );
}
