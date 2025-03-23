import DynamicHero from "../components/HomePage/DynamicHero";
import HowItWorks from "../components/HomePage/HowItWorks";
import BenefitsSection from "../components/HomePage/BenefitsSection";
import FAQ from "../components/HomePage/FAQ";
import Footer from "../components/HomePage/Footer";
export default function Homepage() {
  return (
    <>
      <DynamicHero />
      <HowItWorks />
      <BenefitsSection />
      <FAQ />
      <Footer />
    </>
  );
}
