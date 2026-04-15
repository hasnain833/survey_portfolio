import { motion } from "framer-motion";
import { MapPin, Compass, Camera, Ruler, FileText, Globe } from "lucide-react";

const services = [
  {
    icon: MapPin,
    title: "Land Surveying",
    description: "Comprehensive boundary and topographic surveys with precision instruments for construction and development projects.",
    tag: "BOUNDARY",
    color: "blue",
  },
  {
    icon: Compass,
    title: "Site Analysis & Planning",
    description: "Detailed site evaluation and planning support to ensure optimal project layout and compliance with regulations.",
    tag: "PLANNING",
    color: "amber",
  },
  {
    icon: Camera,
    title: "Drone Aerial Mapping",
    description: "Cutting-edge UAV technology for fast, accurate aerial surveys, orthomosaics, and 3D terrain models.",
    tag: "UAV",
    color: "teal",
  },
  {
    icon: Ruler,
    title: "Construction Layout",
    description: "Precise construction staking and layout services ensuring structures are built exactly to design specifications.",
    tag: "STAKING",
    color: "blue",
  },
  {
    icon: FileText,
    title: "Data Collection & Reporting",
    description: "Thorough field data collection with detailed reports, maps, and deliverables for informed decision-making.",
    tag: "REPORTS",
    color: "amber",
  },
  {
    icon: Globe,
    title: "GIS & Spatial Analysis",
    description: "Geographic information system mapping and spatial data analysis for infrastructure planning and development.",
    tag: "GIS",
    color: "teal",
  },
];

const colorMap = {
  blue:  { icon: "text-blue-600",  border: "hover:border-blue-500/40",  glow: "group-hover:shadow-blue",  badge: "bg-blue-500/10 text-blue-600 border-blue-500/20" },
  amber: { icon: "text-amber-600", border: "hover:border-amber-500/40", glow: "group-hover:shadow-amber", badge: "bg-amber-500/10 text-amber-600 border-amber-500/20" },
  teal:  { icon: "text-teal-600",  border: "hover:border-teal-500/40",  glow: "group-hover:shadow-[0_8px_32px_hsl(174_72%_40%/0.15)]", badge: "bg-teal-500/10 text-teal-600 border-teal-500/20" },
};

const Services = () => {
  return (
    <section id="services" className="py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-amber-500/4 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="section-badge">// 02 — Services</span>
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
            What I <span className="text-gradient-blue">Offer</span>
          </h2>
          <p className="text-slate-600 font-medium mt-3 max-w-xl">
            End-to-end surveying services powered by precision instruments and modern UAV technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const colors = colorMap[service.color as keyof typeof colorMap];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group glass rounded-2xl p-7 border border-border card-hover ${colors.border} ${colors.glow}`}
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-black/5 group-hover:bg-black/8 transition-colors`}>
                    <service.icon className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                  <span className={`mono-tag px-2.5 py-1 rounded-md border ${colors.badge}`}>
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-display)" }}>
                  {service.title}
                </h3>
                <p className="text-slate-600 font-medium text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom line indicator */}
                <div className="mt-6 h-px bg-gradient-to-r from-border via-border/50 to-transparent group-hover:via-blue-500/30 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
