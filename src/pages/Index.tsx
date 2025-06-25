
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialSection from "@/components/TestimonialSection";
import ServicesSection from "@/components/ServicesSection";
import NewsletterSection from "@/components/NewsletterSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PortfolioSection />
      <TestimonialSection />
      <ServicesSection />
      <NewsletterSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
