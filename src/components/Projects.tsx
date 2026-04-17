import { motion } from "framer-motion";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.jpg";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    image: project1,
    title: "Highway Interchange Survey",
    description: "Complete topographic and alignment survey for a major highway interchange project in the central region of Saudi Arabia.",
    type: "Infrastructure",
    badge: "INF-001",
    color: "blue",
  },
  {
    image: project2,
    title: "Commercial Complex Layout",
    description: "Construction staking and as-built surveys for a multi-building commercial development with steel framework.",
    type: "Commercial",
    badge: "COM-002",
    color: "amber",
  },
  {
    image: project3,
    title: "Residential Community Planning",
    description: "Aerial drone survey and master plan layout for a large-scale residential community with 500+ units.",
    type: "Residential",
    badge: "RES-003",
    color: "teal",
  },
  {
    image: project4,
    title: "Pipeline Route Survey",
    description: "GPS-based route survey and terrain analysis for an industrial pipeline stretching across desert terrain.",
    type: "Industrial",
    badge: "IND-004",
    color: "blue",
  },
];

const badgeColors: Record<string, string> = {
  blue:  "bg-blue-500/10 text-blue-600 border-blue-500/20",
  amber: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  teal:  "bg-teal-500/10 text-teal-600 border-teal-500/20",
};

const Projects = () => {
  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-amber-500/4 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="section-badge">// 04 — Projects</span>
          <div className="h-px flex-1 bg-gradient-to-r from-blue-500/30 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Featured <span className="text-gradient-amber">Projects</span>
            </h2>
            <p className="text-slate-600 font-medium mt-3 max-w-lg">
              A selection of surveying and mapping projects delivered across Saudi Arabia and beyond.
            </p>
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-border card-hover hover:border-primary/20 bg-card"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                {/* Gradient overlay */}
                {/* Subtle dark gradient overlay on hover only */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Top badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className={`mono-tag px-2.5 py-1 rounded-md border ${badgeColors[project.color]}`}>
                    {project.type.toUpperCase()}
                  </span>
                  <span className="mono-tag text-foreground/30">{project.badge}</span>
                </div>

                {/* Arrow icon on hover */}
                <div className="absolute top-4 right-4 w-9 h-9 glass rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-4 h-4 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground group-hover:text-gradient-blue transition-all" style={{ fontFamily: "var(--font-display)" }}>
                  {project.title}
                </h3>
                <p className="text-slate-600 font-medium text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Bottom accent line */}
                <div className="mt-5 h-px bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
