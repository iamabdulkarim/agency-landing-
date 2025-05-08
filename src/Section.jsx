import CompaniesLogoSection from "./CompaniesLogoSection";
import FaqSection from "./FaqSection";
import HeroSection from "./HeroSection";
import "./icon.css";
import PricingSection from "./PricingSection";
import ServiceSection from "./ServiceSection";
import TestimonialSection from "./TestimonialSection";
import TrialSection from "./TrialSection";
export default function Section() {
  return (
    <>
      <HeroSection />
      <CompaniesLogoSection />
      <ServiceSection />
      <TestimonialSection />
      <PricingSection />
      <FaqSection />
      <TrialSection />
    </>
  );
}
