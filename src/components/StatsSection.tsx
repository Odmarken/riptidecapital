import { motion } from "framer-motion";
import { TrendingUp, Target, BarChart3, Shield } from "lucide-react";

const stats = [
  { icon: Target, value: "81.3%", label: "Win Rate", description: "Proven strategy accuracy" },
  { icon: TrendingUp, value: "NASDAQ", label: "& S&P 500", description: "Primary markets traded" },
  { icon: BarChart3, value: "24/7", label: "Monitoring", description: "Continuous market analysis" },
  { icon: Shield, value: "Risk", label: "Managed", description: "Strict risk protocols" },
];

const StatsSection = () => {
  return (
    <section id="performance" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--gradient-glow)' }} />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Performance <span className="text-gradient-ocean">Statistics</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Numbers that speak for themselves. Our strategy consistently outperforms the market.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gradient-card rounded-xl p-6 shadow-card border border-border/50 text-center group hover:border-primary/40 transition-colors"
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-ocean mx-auto mb-4 flex items-center justify-center">
                <stat.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="font-display text-lg font-semibold text-ocean-light mb-1">{stat.label}</div>
              <div className="text-muted-foreground text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
