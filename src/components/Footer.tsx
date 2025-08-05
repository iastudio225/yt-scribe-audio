import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Heart, Code, Mic } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-gradient-subtle">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 bg-gradient-primary rounded-lg">
                <Mic className="h-4 w-4 text-white" />
              </div>
              <h3 className="font-bold text-lg bg-gradient-primary bg-clip-text text-transparent">
                YT Scribe Audio
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Solution de transcription automatique pour YouTube utilisant les dernières 
              technologies d'intelligence artificielle.
            </p>
            <div className="flex gap-2">
              <Badge variant="outline" className="text-xs">
                Whisper AI
              </Badge>
              <Badge variant="outline" className="text-xs">
                yt-dlp
              </Badge>
            </div>
          </div>
          
          {/* Technologies */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Technologies</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Code className="h-3 w-3" />
                Kotlin + Ktor (Backend)
              </li>
              <li className="flex items-center gap-2">
                <Code className="h-3 w-3" />
                Whisper.cpp (Transcription)
              </li>
              <li className="flex items-center gap-2">
                <Code className="h-3 w-3" />
                yt-dlp (Download)
              </li>
              <li className="flex items-center gap-2">
                <Code className="h-3 w-3" />
                React + TypeScript (Frontend)
              </li>
            </ul>
          </div>
          
          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Ressources</h4>
            <div className="space-y-2">
              <Button variant="ghost" size="sm" asChild className="justify-start p-0 h-auto">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-3 w-3 mr-2" />
                  Code source
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild className="justify-start p-0 h-auto">
                <a href="https://openai.com/whisper" target="_blank" rel="noopener noreferrer">
                  Documentation Whisper
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild className="justify-start p-0 h-auto">
                <a href="https://github.com/yt-dlp/yt-dlp" target="_blank" rel="noopener noreferrer">
                  Documentation yt-dlp
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Créé avec</span>
            <Heart className="h-3 w-3 text-primary fill-current" />
            <span>pour la communauté open source</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © 2024 YT Scribe Audio. Interface démo créée avec Lovable.
          </div>
        </div>
      </div>
    </footer>
  );
}