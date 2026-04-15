import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const skills = [
  { name: "GPS & GNSS Surveying",         level: 95, color: "blue" },
  { name: "Total Station Operation",       level: 92, color: "amber" },
  { name: "Drone / UAV Mapping",           level: 88, color: "teal" },
  { name: "AutoCAD & Mapping Software",    level: 85, color: "blue" },
  { name: "Site Measurement & Analysis",   level: 93, color: "amber" },
  { name: "GIS & Spatial Data Processing", level: 80, color: "teal" },
];

const tools = [
  "Trimble", "Leica", "DJI Phantom / Matrice", "AutoCAD Civil 3D",
  "ArcGIS", "Pix4D", "Agisoft Metashape", "Global Mapper",
];

const colorBar: Record<string, string> = {
  blue:  "bg-gradient-to-r from-blue-600 to-blue-400",
  amber: "bg-gradient-to-r from-amber-600 to-amber-400",
  teal:  "bg-gradient-to-r from-teal-600 to-teal-400",
};

const colorText: Record<string, string> = {
  blue:  "text-blue-600",
  amber: "text-amber-600",
  teal:  "text-teal-600",
};

const Skills = () => {
  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30 grid-overlay-subtle" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/4 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="section-badge">// 05 — Skills</span>
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
            Technical <span className="text-gradient-blue">Expertise</span>
          </h2>
          <p className="text-slate-600 font-medium mt-3 max-w-lg">
            Core competencies built through years of fieldwork and continuous professional development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skill bars */}
          <div className="space-y-7">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-center justify-between mb-2.5">
                  <span
                    className="text-foreground/80 font-medium text-sm"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {skill.name}
                  </span>
                  <span className={`font-bold text-sm ${colorText[skill.color]}`}
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {skill.level}%
                  </span>
                </div>

                {/* Track */}
                <div className="skill-track">
                  <motion.div
                    className={`h-full rounded-full ${colorBar[skill.color]}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.12, ease: [0.25, 1, 0.5, 1] }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools & Software */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Code2 className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                Tools & Equipment
              </h3>
            </div>

            <div className="flex flex-wrap gap-3 mb-10">
              {tools.map((tool, i) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="glass px-4 py-2.5 rounded-xl text-sm font-medium text-foreground/70 border border-border hover:border-blue-500/30 hover:text-foreground transition-all duration-200"
                >
                  {tool}
                </motion.span>
              ))}
            </div>

            {/* Summary card */}
            <div className="glass rounded-2xl p-6 border border-border space-y-4">
              <p className="mono-tag text-foreground/40">PROFESSIONAL SUMMARY</p>
              <p className="text-slate-600 font-medium text-sm leading-relaxed">
                Over a decade of hands-on fieldwork with industry-leading survey equipment and software. Proficient in integrating classical total-station methods with modern UAV workflows to produce reliable, submission-ready deliverables.
              </p>
              <div className="grid grid-cols-3 gap-3 pt-2">
                {[
                  { v: "200+", l: "Projects" },
                  { v: "15+", l: "Regions" },
                  { v: "10+", l: "Years" },
                ].map((s) => (
                  <div key={s.l} className="text-center">
                    <p className="text-xl font-bold text-gradient-amber" style={{ fontFamily: "var(--font-display)" }}>{s.v}</p>
                    <p className="mono-tag text-foreground/40 mt-0.5">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
