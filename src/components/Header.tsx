import { Button } from "@/components/ui/button";
import tanyaakuLogo from "@/assets/tanyaaku-logo.png";

const Header = () => {
  return (
    <header className="w-full bg-white/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={tanyaakuLogo} 
            alt="TanyaAku Logo" 
            className="h-10 w-auto"
          />
          <h1 className="text-2xl font-bold gradient-orange bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
            TanyaAku
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#beranda" className="text-foreground hover:text-primary transition-colors">
            Beranda
          </a>
          <a href="#playlist" className="text-foreground hover:text-primary transition-colors">
            Playlist
          </a>
          <a href="#riwayat" className="text-foreground hover:text-primary transition-colors">
            Riwayat
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="outline" className="hidden sm:flex">
            Admin
          </Button>
          <Button className="gradient-orange hover-lift">
            Mulai Tanya
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;