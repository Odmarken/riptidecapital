import { motion } from "framer-motion";
import { Zap, LineChart, Users, Lock } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Algorithmic Edge",
    description: "Our proprietary algorithm analyzes market patterns in real-time, executing trades with precision timing on NASDAQ and S&P 500.",
  },
  {
    icon: LineChart,
    title: "Proven Track Record",
    description: "With an 81.3% win rate, our strategy has consistently delivered positive returns across various market conditions.",
  },
  {
    icon: Users,
    title: "Managed Accounts",
    description: "Sit back while our team manages your investments. Full transparency with real-time reporting on every trade.",
  },
  {
    icon: Lock,
    title: "Capital Protection",
    description: "Strict risk management protocols ensure your capital is protected with defined stop-losses and position sizing.",
  },
];

const ProgramSection = () => {
  return (
    <section id="program" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient-ocean">Program</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A comprehensive investment program designed for consistent growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass rounded-xl p-8 group hover:border-primary/40 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-ocean flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
