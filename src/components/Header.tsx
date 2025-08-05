import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Youtube, Mic } from "lucide-react";

export function Header() {
  return (
    <header className="border-b bg-gradient-subtle backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-primary rounded-lg shadow-glow">
              <Mic className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                YT Scribe Audio
              </h1>
              <p className="text-sm text-muted-foreground">
                Transcription YouTube automatique
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="hidden sm:flex">
              <Youtube className="h-3 w-3 mr-1" />
              Powered by yt-dlp + Whisper
            </Badge>
            
            <Button variant="ghost" size="sm" asChild>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}