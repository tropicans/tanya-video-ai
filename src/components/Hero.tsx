import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Video, Brain, History } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const Hero = () => {
  const features = [
    {
      icon: Video,
      title: "Transkripsi Otomatis",
      description: "Video YouTube diubah jadi teks dengan AI"
    },
    {
      icon: MessageCircle,
      title: "Chat Interaktif",
      description: "Tanya apapun tentang isi video"
    },
    {
      icon: Brain,
      title: "AI Gemini",
      description: "Jawaban akurat dari AI terdepan"
    },
    {
      icon: History,
      title: "Riwayat Chat",
      description: "Simpan semua percakapan Anda"
    }
  ];

  return (
    <section className="min-h-[80vh] relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-orange bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
              Tanya
            </span>{" "}
            <span className="text-foreground">
              Video YouTube
            </span>
            <br />
            <span className="text-foreground">
              Dengan{" "}
            </span>
            <span className="gradient-orange bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
              AI
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Mencerna isi video dalam playlist YouTube dan menjawab pertanyaan 
            Anda dengan bantuan AI. Belajar jadi lebih cepat dan efektif!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="gradient-orange hover-lift text-lg px-8 py-6 rounded-xl"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Kirim Pertanyaan
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 rounded-xl border-2 hover:border-primary"
            >
              Lihat Demo
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover-lift bg-white/90 backdrop-blur-sm border-0 shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 gradient-orange rounded-2xl flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;