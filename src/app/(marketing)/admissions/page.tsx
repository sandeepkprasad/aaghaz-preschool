import Hero from "@/components/sections/admissions/hero";
import Eligibility from "@/components/sections/admissions/eligibility";
import AdmissionProcess from "@/components/sections/admissions/process";
import FeeEnquiry from "@/components/sections/admissions/fee-enquiry";

export default function AdmissionsPage() {
  return (
    <>
      <Hero />
      <Eligibility />
      <AdmissionProcess />
      <FeeEnquiry />
    </>
  );
}
