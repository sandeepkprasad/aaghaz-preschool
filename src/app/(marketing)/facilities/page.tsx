import Hero from "@/components/sections/facilities/hero";
import FacilitiesGrid from "@/components/sections/facilities/facilities-grid";
import SpecializedRooms from "@/components/sections/facilities/specialized-rooms";
import TrustStats from "@/components/sections/facilities/trust-stats";
import FinalCTA from "@/components/sections/facilities/final-cta";

export default function FacilitiesPage() {
  return (
    <>
      <Hero />
      <FacilitiesGrid />
      <SpecializedRooms />
      <TrustStats />
      <FinalCTA />
    </>
  );
}
