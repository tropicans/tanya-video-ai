const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-xl font-semibold gradient-orange bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent mb-2">
              TanyaAku
            </h3>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              Aplikasi AI untuk memahami video YouTube dengan mudah dan cepat
            </p>
          </div>
          
          <div className="border-t border-border pt-6">
            <p className="text-sm text-muted-foreground">
              dibuat-buat oleh{" "}
              <span className="font-medium text-primary">Yudhi</span>{" "}
              © 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;