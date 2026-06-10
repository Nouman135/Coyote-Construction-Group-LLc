import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ReviewWidget from "@/components/ReviewWidget";
import ServiceAreas from "@/components/ServiceAreas";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUs />
        <ReviewWidget />
        <ServiceAreas />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}