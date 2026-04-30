import { motion } from "framer-motion";
import { CheckCircle2, Layout, Zap, Users, HardHat, FileCheck } from "lucide-react";

const expertiseAreas = [
  {
    category: "Project Leadership",
    icon: Layout,
    color: "blue",
    items: [
      "Lead and manage geospatial surveying projects from planning to execution.",
      "Liaise with engineers, planners, and government officials for project alignment.",
      "Supervise and mentor junior surveyors and UAV technicians.",
      "Represent survey teams in project meetings and regulatory audits."
    ]
  },
  {
    category: "Advanced UAV Operations",
    icon: Zap,
    color: "teal",
    items: [
      "Expert UAV operation for topographic surveys, mapping, and 3D modeling.",
      "Process high-resolution aerial imagery and LiDAR data (Pix4D, TBC, Global Mapper).",
      "Develop detailed survey methodologies and regulatory flight plans.",
      "Ensure strict compliance with GACA and national airspace regulations."
    ]
  },
  {
    category: "Infrastructure Specialization",
    icon: HardHat,
    color: "amber",
    items: [
      "Detailed surveying and layout of sewerage pipeline networks.",
      "Supervised installation, alignment, and leveling of treatment plant systems.",
      "Conducted site inspections for quality control and design adherence.",
      "Managed as-built surveys and commissioning of wastewater systems."
    ]
  },
  {
    category: "Precision & Measurement",
    icon: FileCheck,
    color: "blue",
    items: [
      "Precise land surveys using GNSS, total stations, and digital levels.",
      "Perform boundary, construction, and deformation surveys.",
      "Produce accurate DTMs, orthomosaics, and technical documentation.",
      "Stay at the forefront of emerging remote sensing and geospatial software."
    ]
  }
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-28 relative overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 grid-overlay-subtle" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-20"
        >
          <span className="section-badge">// 03 — Core Competencies</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-6 mb-4">
            Professional <span className="text-gradient-blue">Expertise</span>
          </h2>
          <p className="text-slate-600 font-medium max-w-2xl leading-relaxed">
            A comprehensive overview of my core responsibilities and technical capabilities developed across 15+ years of international field experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {expertiseAreas.map((area, i) => (
            <motion.div
              key={area.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl border border-border hover:border-blue-500/30 transition-all duration-500 group relative overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-500/5"
            >
              {/* Decorative gradient corner */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${
                area.color === "blue" ? "from-blue-500/10" : area.color === "amber" ? "from-amber-500/10" : "from-teal-500/10"
              } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="flex items-center gap-5 mb-8">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                  area.color === "blue" ? "bg-blue-500/10 text-blue-600" : area.color === "amber" ? "bg-amber-500/10 text-amber-600" : "bg-teal-500/10 text-teal-600"
                } group-hover:scale-110`}>
                  <area.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                  {area.category}
                </h3>
              </div>

              <ul className="space-y-4">
                {area.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                      area.color === "blue" ? "bg-blue-500" : area.color === "amber" ? "bg-amber-500" : "bg-teal-500"
                    }`} />
                    <span className="text-slate-600 text-sm font-medium leading-relaxed group-hover:text-slate-900 transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
