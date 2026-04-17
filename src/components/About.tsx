import { motion } from "framer-motion";
import surveyorWork from "@/assets/surveyor-work.png";
import { MapPin, Award, Briefcase, Target } from "lucide-react";

const stats = [
  { icon: MapPin, label: "Based In", value: "Saudi Arabia", color: "blue" },
  { icon: Award, label: "Specialty", value: "Land Surveying", color: "amber" },
  { icon: Briefcase, label: "Experience", value: "10+ Years", color: "teal" },
  { icon: Target, label: "Accuracy", value: "±5mm GPS", color: "blue" },
];

const About = () => {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 grid-overlay-subtle" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 -translate-y-1/2 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="section-badge">// 01 — About Me</span>
          <div className="h-px flex-1 bg-gradient-to-r from-blue-500/30 to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Corner decoration */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-l-2 border-t-2 border-blue-500/40 rounded-tl-2xl z-10" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r-2 border-b-2 border-amber-400/40 rounded-br-2xl z-10" />

            <div className="rounded-2xl overflow-hidden shadow-card-hover border border-white/5">
              <img
                src={surveyorWork}
                alt="Surveyor working with total station"
                className="w-full h-[520px] object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
              {/* Overlay gradient on bottom */}
              <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-8 left-6 glass px-5 py-3 rounded-xl shadow-card"
            >
              <p className="mono-tag text-foreground/50 mb-1">CURRENT REGION</p>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-foreground font-semibold text-sm" style={{ fontFamily: "var(--font-display)" }}>
                  Saudi Arabia
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Content column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Professional{" "}
              <span className="text-gradient-blue">Land Surveyor</span>
            </h2>

            <div className="space-y-4 text-slate-700 font-medium leading-relaxed mb-10">
              <p>
                I am a professional land surveyor with extensive experience working across Saudi Arabia and the wider region. Over the years I have been involved in surveying and analyzing land for construction projects, helping companies accurately plan and develop buildings and infrastructure.
              </p>
              <p>
                My work includes site surveying, measurements, data collection, and providing precise information essential before construction begins. I have hands-on experience across varied project types — ensuring accuracy, reliability, and efficiency at every stage.
              </p>
              <p>
                Equipped with cutting-edge drone technology and traditional instrument expertise, I bridge legacy survey methods with modern UAV workflows to deliver faster, more cost-effective results.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`glass p-4 rounded-xl ${stat.color === "amber" ? "stat-border-amber" : "stat-border"}`}
                >
                  <stat.icon
                    className={`w-5 h-5 mb-2 ${
                      stat.color === "amber"
                        ? "text-amber-400"
                        : stat.color === "teal"
                        ? "text-teal-400"
                        : "text-blue-400"
                    }`}
                  />
                  <p className="text-foreground font-bold text-sm" style={{ fontFamily: "var(--font-display)" }}>
                    {stat.value}
                  </p>
                  <p className="mono-tag text-slate-500 font-semibold mt-0.5">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
