import { motion } from "framer-motion";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    image: project1,
    title: "Highway Interchange Survey",
    description: "Complete topographic and alignment survey for a major highway interchange project in the central region of Saudi Arabia.",
    type: "Infrastructure",
  },
  {
    image: project2,
    title: "Commercial Complex Layout",
    description: "Construction staking and as-built surveys for a multi-building commercial development with steel framework.",
    type: "Commercial",
  },
  {
    image: project3,
    title: "Residential Community Planning",
    description: "Aerial drone survey and master plan layout for a large-scale residential community with 500+ units.",
    type: "Residential",
  },
  {
    image: project4,
    title: "Pipeline Route Survey",
    description: "GPS-based route survey and terrain analysis for an industrial pipeline stretching across desert terrain.",
    type: "Industrial",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-display font-semibold uppercase tracking-[0.15em] text-sm">
            Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-card shadow-card hover-lift"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-accent-foreground font-display text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">
                    {project.type}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
