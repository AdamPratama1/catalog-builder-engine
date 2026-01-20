import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import ClientsSection from "@/components/home/ClientsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CategoriesSection />
        <ClientsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
