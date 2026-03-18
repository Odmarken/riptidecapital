import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import PerformanceChart from "@/components/PerformanceChart";
import ProgramSection from "@/components/ProgramSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <StatsSection />
      <PerformanceChart />
      <ProgramSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
