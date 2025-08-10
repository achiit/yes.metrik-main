import { Navigation } from "@/components/Navigation";
import { AnimatedHero } from "@/components/AnimatedHero";
import { ClientLogos } from "@/components/ClientLogos";
import { KeyMetrics } from "@/components/KeyMetrics";
import { ValueProposition } from "@/components/ValueProposition";
import { ProductOfferings } from "@/components/ProductOfferings";
import { PricingSection } from "@/components/PricingSection";
import { CaseStudy } from "@/components/CaseStudy";
import { BespokeSection } from "@/components/BespokeSection";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFBF9] via-amber-50/50 to-orange-50/40 font-inter">
      <Navigation />
      <AnimatedHero />
      {/* <ClientLogos /> */}
      <KeyMetrics />
      <ValueProposition />
      <ProductOfferings />
      {/* <PricingSection /> */}
      {/* <CaseStudy /> */}
      <BespokeSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
