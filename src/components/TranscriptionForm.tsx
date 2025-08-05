import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Download, Youtube, FileText, AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type TranscriptionStatus = 'idle' | 'downloading' | 'transcribing' | 'completed' | 'error';

interface TranscriptionData {
  text: string;
  videoTitle?: string;
  duration?: string;
  language?: string;
}

export function TranscriptionForm() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<TranscriptionStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [transcription, setTranscription] = useState<TranscriptionData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const isValidYouTubeUrl = (url: string) => {
    const youtubeRegex = /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/;
    return youtubeRegex.test(url);
  };

  const simulateTranscription = async () => {
    if (!isValidYouTubeUrl(url)) {
      setError("Veuillez entrer une URL YouTube valide");
      return;
    }

    setError(null);
    setStatus('downloading');
    setProgress(0);

    // Simulate download phase
    for (let i = 0; i <= 40; i += 5) {
      setProgress(i);
      await new Promise(resolve => setTimeout(resolve, 200));
    }

    setStatus('transcribing');
    
    // Simulate transcription phase
    for (let i = 40; i <= 100; i += 10) {
      setProgress(i);
      await new Promise(resolve => setTimeout(resolve, 300));
    }

    // Simulate successful transcription
    setTranscription({
      text: `Bonjour et bienvenue dans cette vidéo ! Aujourd'hui, nous allons explorer les dernières innovations en intelligence artificielle et leur impact sur notre quotidien. 

L'IA générative a révolutionné la façon dont nous créons du contenu, que ce soit du texte, des images ou même de la musique. Les modèles de langage comme GPT ont ouvert de nouvelles possibilités pour l'automatisation de tâches complexes.

Dans le domaine de la santé, l'IA aide maintenant les médecins à diagnostiquer des maladies plus rapidement et avec une précision accrue. Les algorithmes d'apprentissage automatique peuvent analyser des milliers d'images médicales en quelques secondes.

L'avenir de l'IA semble prometteur, mais il est important de rester conscient des défis éthiques et sociétaux qu'elle pose. La régulation et l'utilisation responsable de ces technologies seront cruciales pour notre société.

Merci de m'avoir écouté, n'hésitez pas à vous abonner pour plus de contenu sur la technologie !`,
      videoTitle: "Les Innovations en Intelligence Artificielle - Guide Complet 2024",
      duration: "12:34",
      language: "Français"
    });
    
    setStatus('completed');
    toast({
      title: "Transcription terminée !",
      description: "Votre vidéo a été transcrite avec succès.",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    simulateTranscription();
  };

  const downloadTranscription = () => {
    if (!transcription) return;
    
    const blob = new Blob([transcription.text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'transcription.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Téléchargement démarré",
      description: "La transcription a été téléchargée.",
    });
  };

  const reset = () => {
    setUrl("");
    setStatus('idle');
    setProgress(0);
    setTranscription(null);
    setError(null);
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'downloading':
        return <Download className="h-4 w-4 animate-bounce" />;
      case 'transcribing':
        return <Loader2 className="h-4 w-4 animate-spin" />;
      case 'completed':
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case 'error':
        return <AlertCircle className="h-4 w-4 text-destructive" />;
      default:
        return <Youtube className="h-4 w-4" />;
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'downloading':
        return 'Téléchargement de l\'audio...';
      case 'transcribing':
        return 'Transcription en cours...';
      case 'completed':
        return 'Transcription terminée';
      case 'error':
        return 'Erreur';
      default:
        return 'Prêt à transcrire';
    }
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Youtube className="h-5 w-5 text-primary" />
            Transcription YouTube
          </CardTitle>
          <CardDescription>
            Entrez l'URL de votre vidéo YouTube pour obtenir une transcription automatique
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="url"
                placeholder="https://youtube.com/watch?v=..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                disabled={status === 'downloading' || status === 'transcribing'}
                className="h-12"
              />
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
            </div>
            
            <div className="flex gap-2">
              <Button
                type="submit"
                disabled={!url || status === 'downloading' || status === 'transcribing'}
                variant="gradient"
                size="lg"
                className="flex-1"
              >
                {status === 'downloading' || status === 'transcribing' ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <FileText className="h-4 w-4" />
                )}
                Transcrire
              </Button>
              
              {status !== 'idle' && (
                <Button
                  type="button"
                  onClick={reset}
                  variant="outline"
                  size="lg"
                >
                  Nouveau
                </Button>
              )}
            </div>
          </form>
          
          {(status === 'downloading' || status === 'transcribing') && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  {getStatusIcon()}
                  <span>{getStatusText()}</span>
                </div>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}
        </CardContent>
      </Card>

      {transcription && status === 'completed' && (
        <Card className="shadow-elegant">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-accent" />
                Transcription
              </CardTitle>
              <Button onClick={downloadTranscription} variant="outline" size="sm">
                <Download className="h-4 w-4" />
                Télécharger
              </Button>
            </div>
            {transcription.videoTitle && (
              <CardDescription className="text-base font-medium">
                {transcription.videoTitle}
              </CardDescription>
            )}
            <div className="flex gap-2">
              {transcription.duration && (
                <Badge variant="secondary">
                  Durée: {transcription.duration}
                </Badge>
              )}
              {transcription.language && (
                <Badge variant="outline">
                  {transcription.language}
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <Textarea
              value={transcription.text}
              readOnly
              className="min-h-[300px] resize-none"
              placeholder="La transcription apparaîtra ici..."
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}