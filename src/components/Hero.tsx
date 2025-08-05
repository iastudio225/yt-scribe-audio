import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-transcription.jpg";

export function Hero() {
  const scrollToForm = () => {
    const formElement = document.getElementById('transcription-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            <Play className="h-3 w-3 mr-2" />
            Powered by Whisper AI & yt-dlp
          </Badge>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transcrivez vos vidéos{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              YouTube
            </span>{" "}
            en quelques clics
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Obtenez des transcriptions précises et rapides de n'importe quelle vidéo YouTube 
            grâce à l'intelligence artificielle de pointe.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={scrollToForm}
              variant="hero" 
              size="xl"
              className="group"
            >
              Commencer la transcription
              <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-smooth" />
            </Button>
            
            <Button 
              variant="outline" 
              size="xl"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                Voir le code source
              </a>
            </Button>
          </div>
          
          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>100+ langues supportées</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>Transcription en temps réel</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full" />
              <span>Export multi-formats</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}