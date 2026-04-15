import { motion } from "framer-motion";

const skills = [
  { name: "GPS Surveying", level: 95 },
  { name: "Total Station Operation", level: 92 },
  { name: "Drone Mapping", level: 88 },
  { name: "AutoCAD / Mapping Software", level: 85 },
  { name: "Site Measurement & Analysis", level: 93 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-display font-semibold uppercase tracking-[0.15em] text-sm">
            Expertise
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            Technical Skills
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-display font-semibold text-foreground">{skill.name}</span>
                <span className="text-accent font-display font-bold">{skill.level}%</span>
              </div>
              <div className="h-3 bg-border rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-accent rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
