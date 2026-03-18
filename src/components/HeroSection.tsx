import { motion } from "framer-motion";
import riptideLogo from "@/assets/riptide-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full animate-pulse-glow" style={{ background: 'var(--gradient-glow)' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <img
            src={riptideLogo}
            alt="Riptide Capital"
            className="w-48 md:w-64 mb-8 animate-float"
          />

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Ride the Wave of
            <span className="block text-gradient-ocean">Smart Investing</span>
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 font-body">
            Our algorithmic trading strategy delivers consistent returns on NASDAQ & S&P 500 with a proven 81.3% win rate.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="#performance"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-lg bg-gradient-ocean font-display font-semibold text-primary-foreground text-lg glow-ocean transition-all"
            >
              View Performance
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-lg glass font-display font-semibold text-foreground text-lg transition-all hover:border-primary"
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
