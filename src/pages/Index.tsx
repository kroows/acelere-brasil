import Hero from "@/components/Hero";
import Speakers from "@/components/Speakers";
import Benefits from "@/components/Benefits";
import Mission from "@/components/Mission";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <Hero />
      <Speakers />
      <Mission />
      <Benefits />
      <VideoSection />
      <Footer />
    </div>
  );
};

export default Index;
