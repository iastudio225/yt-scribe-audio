import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Zap, Shield, Globe, FileText, Clock } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Transcription Rapide",
    description: "Utilise Whisper.cpp pour une transcription ultra-rapide et précise",
    badge: "IA",
    color: "text-accent"
  },
  {
    icon: Download,
    title: "Support Multi-formats",
    description: "Compatible avec tous les formats vidéo YouTube grâce à yt-dlp",
    badge: "Universel",
    color: "text-secondary"
  },
  {
    icon: Globe,
    title: "Multi-langues",
    description: "Transcription automatique dans plus de 100 langues différentes",
    badge: "100+ langues",
    color: "text-primary"
  },
  {
    icon: FileText,
    title: "Export Facile",
    description: "Téléchargez vos transcriptions en TXT, SRT ou autres formats",
    badge: "Multi-format",
    color: "text-accent"
  },
  {
    icon: Shield,
    title: "Sécurisé",
    description: "Aucune donnée personnelle stockée, traitement local sécurisé",
    badge: "Privé",
    color: "text-secondary"
  },
  {
    icon: Clock,
    title: "Traitement Temps Réel",
    description: "Suivez le progrès en temps réel avec des indicateurs visuels",
    badge: "Live",
    color: "text-primary"
  }
];

export function Features() {
  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Fonctionnalités Avancées
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une solution complète pour la transcription automatique de vos vidéos YouTube
            avec les dernières technologies d'intelligence artificielle.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-smooth">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-lg bg-gradient-primary/10 ${feature.color}`}>
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}