import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", returns: 4.2 },
  { month: "Feb", returns: 6.8 },
  { month: "Mar", returns: 5.1 },
  { month: "Apr", returns: 8.4 },
  { month: "May", returns: 7.2 },
  { month: "Jun", returns: 9.6 },
  { month: "Jul", returns: 6.9 },
  { month: "Aug", returns: 11.3 },
  { month: "Sep", returns: 8.7 },
  { month: "Oct", returns: 10.5 },
  { month: "Nov", returns: 12.1 },
  { month: "Dec", returns: 9.8 },
];

const tradeData = [
  { pair: "NASDAQ", wins: 83, losses: 17, trades: 247 },
  { pair: "S&P 500", wins: 79, losses: 21, trades: 189 },
];

const PerformanceChart = () => {
  return (
    <section className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Monthly <span className="text-gradient-ocean">Returns</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Consistent performance across all market conditions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-gradient-card rounded-xl p-6 shadow-card border border-border/50"
          >
            <h3 className="font-display text-xl font-semibold mb-6 text-foreground">Cumulative Returns (%)</h3>
            <ResponsiveContainer width="100%" height={320}>
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorReturns" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(205, 85%, 50%)" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="hsl(205, 85%, 50%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 18%)" />
                <XAxis dataKey="month" stroke="hsl(215, 12%, 55%)" fontSize={12} />
                <YAxis stroke="hsl(215, 12%, 55%)" fontSize={12} tickFormatter={(v) => `${v}%`} />
                <Tooltip
                  contentStyle={{
                    background: "hsl(220, 18%, 10%)",
                    border: "1px solid hsl(220, 15%, 18%)",
                    borderRadius: "8px",
                    color: "hsl(210, 20%, 92%)",
                  }}
                  formatter={(value: number) => [`${value}%`, "Returns"]}
                />
                <Area
                  type="monotone"
                  dataKey="returns"
                  stroke="hsl(205, 85%, 50%)"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorReturns)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Trade breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {tradeData.map((item) => (
              <div key={item.pair} className="bg-gradient-card rounded-xl p-6 shadow-card border border-border/50">
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">{item.pair}</h4>
                <p className="text-muted-foreground text-sm mb-4">{item.trades} total trades</p>

                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-success">Wins {item.wins}%</span>
                    <span className="text-destructive">Losses {item.losses}%</span>
                  </div>
                  <div className="h-3 rounded-full bg-secondary overflow-hidden flex">
                    <div
                      className="h-full rounded-l-full bg-success transition-all"
                      style={{ width: `${item.wins}%` }}
                    />
                    <div
                      className="h-full rounded-r-full bg-destructive transition-all"
                      style={{ width: `${item.losses}%` }}
                    />
                  </div>
                </div>

                <div className="text-3xl font-display font-bold text-gradient-ocean">{item.wins}%</div>
                <div className="text-muted-foreground text-sm">Win Rate</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceChart;
