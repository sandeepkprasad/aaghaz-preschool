import Hero from "@/components/sections/home/hero";
import About from "@/components/sections/home/about";
import Programs from "@/components/sections/home/programs";
import Stats from "@/components/sections/home/stats";
import Journey from "@/components/sections/home/journey";
import Gallery from "@/components/sections/home/gallery";
//import Testimonials from "@/components/sections/home/testimonials";
import CTA from "@/components/sections/home/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <Stats />
      <Journey />
      <Gallery />
      {/* <Testimonials /> */}
      <CTA />
    </>
  );
}
