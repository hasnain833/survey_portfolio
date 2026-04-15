import { motion } from "framer-motion";
import surveyorWork from "@/assets/surveyor-work.jpg";
import { MapPin, Award, Clock } from "lucide-react";

const stats = [
  { icon: MapPin, label: "Location", value: "Saudi Arabia" },
  { icon: Award, label: "Expertise", value: "Land Surveying" },
  { icon: Clock, label: "Experience", value: "Years of Field Work" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src={surveyorWork}
                alt="Surveyor working with total station"
                className="w-full h-[500px] object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-accent rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-accent font-display font-semibold uppercase tracking-[0.15em] text-sm">
              About Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Professional Land Surveyor
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a professional land surveyor with extensive experience working in Saudi Arabia. Over the years, I have been involved in surveying and analyzing land for construction projects, helping companies accurately plan and develop buildings and infrastructure.
              </p>
              <p>
                My work includes site surveying, measurements, data collection, and providing precise information that is essential before construction begins. I have hands-on experience working on various types of projects, ensuring accuracy, reliability, and efficiency in every task.
              </p>
              <p>
                In addition to surveying, I am also capable of handling related technical and fieldwork tasks, contributing to smooth project execution from the initial stages.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-muted rounded-xl">
                  <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <p className="font-display font-bold text-foreground text-sm">{stat.value}</p>
                  <p className="text-muted-foreground text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
