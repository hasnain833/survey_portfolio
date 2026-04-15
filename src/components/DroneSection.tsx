import { motion } from "framer-motion";
// https://images.unsplash.com/photo-1508614589041-895b9394f79f is known working aerial survey
const droneSurvey = "https://images.unsplash.com/photo-1508614589041-895b9394f79f?q=80&w=2070&auto=format&fit=crop";
import { CheckCircle2, Zap } from "lucide-react";

const benefits = [
  { text: "Up to 10× faster data collection than traditional ground methods", highlight: "10×" },
  { text: "High-resolution orthomosaic maps and photogrammetric 3D models", highlight: null },
  { text: "Survey hazardous or inaccessible terrain safely without risk", highlight: null },
  { text: "Cost-effective for large-scale land surveys over vast areas", highlight: null },
  { text: "Centimetre-level accuracy with RTK/PPK-enabled drone systems", highlight: "RTK/PPK" },
  { text: "Real-time construction progress monitoring and site reporting", highlight: null },
];

const metrics = [
  { value: "2cm", label: "Ground accuracy" },
  { value: "500ha", label: "Per flight" },
  { value: "4K", label: "Resolution" },
];

const DroneSection = () => {
  return (
    <section id="drone" className="py-28 relative overflow-hidden">
      {/* Dark mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-background to-blue-50/30 grid-overlay opacity-50" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/6 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="section-badge">// 03 — Drone Surveying</span>
          <div className="h-px flex-1 bg-gradient-to-r from-blue-500/30 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Aerial Mapping &{" "}
            <span className="text-gradient-amber">UAV Technology</span>
          </h2>
          <p className="text-slate-600 font-medium mt-3 max-w-2xl">
            Leveraging cutting-edge drone systems to deliver faster, safer, and more accurate surveying results for projects of any scale.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images stack */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main image */}
            <div className="rounded-2xl overflow-hidden border border-border/50 shadow-card-hover">
              <img
                src={droneSurvey}
                alt="Drone surveying over construction site"
                className="w-full h-80 object-cover"
                loading="lazy"
                width={1024}
                height={768}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
            </div>


            {/* Metrics row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-14 grid grid-cols-3 gap-4"
            >
              {metrics.map((m) => (
                <div key={m.label} className="glass rounded-xl p-4 text-center border border-border/50">
                  <p className="text-2xl font-bold text-gradient-blue" style={{ fontFamily: "var(--font-display)" }}>
                    {m.value}
                  </p>
                  <p className="mono-tag text-slate-500 font-semibold mt-1">{m.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Benefits list */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Why badge */}
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4 text-amber-400" />
              <span className="mono-tag text-amber-400">WHY DRONE SURVEYING?</span>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-8">
              Smarter surveys, delivered faster.
            </h3>

            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.09 }}
                  className="flex items-start gap-3 glass p-4 rounded-xl border border-border/50 hover:border-blue-500/20 transition-colors duration-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 font-medium text-sm leading-relaxed">
                    {benefit.highlight ? (
                      <>
                        {benefit.text.split(benefit.highlight)[0]}
                        <span className="text-amber-600 font-bold">{benefit.highlight}</span>
                        {benefit.text.split(benefit.highlight)[1]}
                      </>
                    ) : (
                      benefit.text
                    )}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DroneSection;
