import { motion } from "framer-motion";
import droneSurvey from "@/assets/drone-survey.jpg";
import droneMapping from "@/assets/drone-mapping.jpg";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Up to 10x faster data collection than traditional methods",
  "High-resolution orthomosaic maps and 3D models",
  "Reduced risk — survey hazardous or hard-to-reach areas safely",
  "Cost-effective for large-scale land surveys",
  "Centimeter-level accuracy with RTK-enabled drones",
  "Real-time progress monitoring for construction sites",
];

const DroneSection = () => {
  return (
    <section id="drone" className="py-24 bg-gradient-hero text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-display font-semibold uppercase tracking-[0.15em] text-sm">
            Modern Technology
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
            Drone Surveying & Aerial Mapping
          </h2>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto mt-4">
            Leveraging UAV technology to deliver faster, safer, and more accurate surveying results for projects of any scale.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-card-hover">
              <img src={droneSurvey} alt="Drone surveying" className="w-full h-80 object-cover" loading="lazy" width={1024} height={1024} />
            </div>
            <motion.div
              className="absolute -bottom-8 -right-4 w-64 rounded-xl overflow-hidden shadow-card-hover border-4 border-navy-deep"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img src={droneMapping} alt="Aerial mapping" className="w-full h-40 object-cover" loading="lazy" width={1280} height={720} />
            </motion.div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-display text-2xl font-bold mb-8">
              Why <span className="text-gradient-accent">Drone Surveying</span>?
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-primary-foreground/80">{benefit}</span>
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
