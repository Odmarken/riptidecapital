import riptideLogo from "@/assets/riptide-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={riptideLogo} alt="Riptide Capital" className="w-10 h-10 object-contain" />
            <span className="font-display font-semibold text-foreground">Riptide Capital</span>
          </div>
          <p className="text-muted-foreground text-sm text-center">
            Past performance is not indicative of future results. Trading involves risk.
          </p>
          <p className="text-muted-foreground text-sm">© 2026 Riptide Capital</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
