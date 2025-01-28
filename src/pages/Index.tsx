import Hero from "@/components/Hero";
import FeaturedCandles from "@/components/FeaturedCandles";
import CustomizeCandle from "@/components/CustomizeCandle";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedCandles />
      <CustomizeCandle />
      <AboutSection />
    </main>
  );
};

export default Index;