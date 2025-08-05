import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TranscriptionForm } from "@/components/TranscriptionForm";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <section id="transcription-form" className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <TranscriptionForm />
        </div>
      </section>
      
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
