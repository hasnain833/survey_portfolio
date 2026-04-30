import { motion } from "framer-motion";
import { MapPin, Award, Briefcase, Target, CheckCircle2 } from "lucide-react";

const stats = [
  { icon: MapPin, label: "Current Base", value: "Saudi Arabia", color: "blue" },
  { icon: Award, label: "Core Specialty", value: "Infrastructure", color: "amber" },
  { icon: Briefcase, label: "Career Span", value: "15+ Years", color: "teal" },
  { icon: Target, label: "Precision Rate", value: "±5mm GPS", color: "blue" },
];

const highlights = [
  "Pipeline & Treatment Plant Expert",
  "Licensed UAV Pilot (GACA 107)",
  "Strategic Consulting & Planning",
  "High-Accuracy Geodetic Control"
];

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-white">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute inset-0 grid-overlay-subtle opacity-30" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="max-w-4xl mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="section-badge font-bold">// 01 — Profile</span>
            <div className="h-px w-12 bg-blue-500/30" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tighter"
          >
            Pioneering Precision in <br />
            <span className="text-gradient-blue">Global Infrastructure.</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Side: Bio */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed"
            >
              <p className="text-slate-900 font-bold text-2xl leading-tight max-w-2xl">
                I lead infrastructure development by bridging the gap between <span className="text-blue-600 underline decoration-blue-500/20 underline-offset-4">traditional surveying mastery</span> and cutting-edge UAV intelligence.
              </p>
              <p className="max-w-3xl">
                As an accomplished <span className="text-slate-900 font-bold">Senior Surveyor and Strategic Consultant</span> with over 15 years of international field experience, I specialize in the planning and execution of large-scale pipeline and treatment plant projects.
              </p>
              <p className="max-w-3xl">
                My methodology focuses on absolute precision—leveraging GACA-licensed drone operations and advanced geomatics to deliver millimetric accuracy for complex engineering challenges across Saudi Arabia and Pakistan.
              </p>

              {/* Highlights List */}
              <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 pt-8 border-t border-slate-100 mt-10">
                {highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-sm font-bold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side: Quick Stats Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid gap-4"
            >
              {stats.map((stat, i) => (
                <div key={i} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 group hover:border-blue-500/20 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color === 'blue' ? 'bg-blue-100/50 text-blue-600' : stat.color === 'amber' ? 'bg-amber-100/50 text-amber-600' : 'bg-teal-100/50 text-teal-600'
                      }`}>
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                      <p className="text-lg font-black text-slate-900 tracking-tight">{stat.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
