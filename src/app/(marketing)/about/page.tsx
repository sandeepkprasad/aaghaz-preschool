import Hero from "@/components/sections/about/hero";
import VisionMission from "@/components/sections/about/vision";
import Founder from "@/components/sections/about/founder";
import Philosophy from "@/components/sections/about/philosophy";
import Environment from "@/components/sections/about/environment";
import CTA from "@/components/sections/about/cta";

export default function AboutPage() {
  return (
    <>
      <Hero />
      <VisionMission />
      <Founder />
      <Philosophy />
      <Environment />
      <CTA />
    </>
  );
}
