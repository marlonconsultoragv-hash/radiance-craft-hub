import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import InstagramSection from "@/components/InstagramSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import LocationSection from "@/components/LocationSection";
import MissionSection from "@/components/MissionSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <InstagramSection />
      <CTASection />
      <ContactSection />
      <LocationSection />
      <MissionSection />
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
