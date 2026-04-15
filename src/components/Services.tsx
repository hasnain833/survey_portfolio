import { motion } from "framer-motion";
import { MapPin, Compass, Camera, Ruler, FileText } from "lucide-react";

const services = [
  {
    icon: MapPin,
    title: "Land Surveying",
    description: "Comprehensive boundary and topographic surveys with precision instruments for construction and development projects.",
  },
  {
    icon: Compass,
    title: "Site Analysis & Planning",
    description: "Detailed site evaluation and planning support to ensure optimal project layout and compliance with regulations.",
  },
  {
    icon: Camera,
    title: "Drone Surveying & Aerial Mapping",
    description: "Cutting-edge UAV technology for fast, accurate aerial surveys, orthomosaics, and 3D terrain models.",
  },
  {
    icon: Ruler,
    title: "Construction Layout",
    description: "Precise construction staking and layout services ensuring structures are built according to design specifications.",
  },
  {
    icon: FileText,
    title: "Data Collection & Reporting",
    description: "Thorough field data collection with detailed reports, maps, and deliverables for informed decision-making.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-display font-semibold uppercase tracking-[0.15em] text-sm">
            What I Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            Professional Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-card hover-lift group cursor-default"
            >
              <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center mb-6 group-hover:animate-pulse-glow transition-all">
                <service.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
