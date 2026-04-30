import { motion } from "framer-motion";
import { Download, Briefcase, GraduationCap, Calendar } from "lucide-react";

const experience = [
  {
    title: "Consultant Surveyor",
    company: "FKEC (Fouad Al Saleh & Khaled Al Dhowalia Co.)",
    period: "May 2025 - Present",
    description: "Environmental & Engineering Consultants in Riyadh. Providing expert consulting and high-precision surveying for strategic infrastructure projects.",
  },
  {
    title: "Senior Surveyor & UAV Specialist",
    company: "Arabian Space Imaging",
    period: "Jan 2017 - April 2025",
    description: "Expert Drone Pilot with GACA License 107. Operated advanced UAV systems including DJI Mavic 3, Inspire, Wingtra (Gen 1 & 2), and Trinity Quantum System for large-scale geospatial mapping and analysis.",
  },
  {
    title: "AutoCAD Designer & Surveyor",
    company: "Al-Mohadded Consulting Engineering",
    period: "2013 - 2017",
    description: "Managed surveying and AutoCAD design for key municipal projects under the Hail Municipality, ensuring technical accuracy and compliance.",
  },
  {
    title: "Consulting Surveyor",
    company: "Abalkhail Consulting Engineers",
    period: "2011 - 2013",
    description: "Provided surveying expertise for regional consulting projects in Hail, Saudi Arabia.",
  },
  {
    title: "Site Civil Engineer",
    company: "DOOSAN HEAVY INDUSTRIES",
    period: "2010 - 2011",
    description: "Worked on the SECO Project (Rabigh Power Plant No. 2), managing site civil works and surveying operations.",
  },
  {
    title: "Civil Surveyor",
    company: "Bahria Town, Islamabad",
    period: "2008 - 2010",
    description: "Conducted site surveys and land measurements for major residential developments in Pakistan.",
  },
];

const education = [
  {
    degree: "Diploma in Civil Engineering Surveying",
    school: "Skill Professional Trade Testing Council, Punjab",
    period: "2008",
    description: "Government of Punjab, Lahore Pakistan. Comprehensive training in advanced surveying techniques and infrastructure planning.",
  },
  {
    degree: "High School (Matric Class 10)",
    school: "Board of Intermediate Rawalpindi",
    period: "2005",
    description: "Foundational education focusing on mathematics and science.",
  },
];

const Resume = () => {
  return (
    <section id="resume" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay-subtle" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="section-badge">// 02 — Resume</span>
              <div className="h-px w-24 bg-gradient-to-r from-blue-500/30 to-transparent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Professional <span className="text-gradient-blue">Experience</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Work History</h3>
            </div>

            <div className="space-y-8 border-l-2 border-slate-100 ml-5 pl-8">
              {experience.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-blue-500 shadow-sm" />

                  <div className="glass p-6 rounded-2xl border border-border/50 hover:border-blue-500/30 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <h4 className="text-lg font-bold text-foreground">{item.title}</h4>
                      <div className="flex items-center gap-1.5 text-slate-500 text-[11px] font-bold uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-md">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </div>
                    </div>
                    <p className="text-blue-600 font-bold text-sm mb-3">{item.company}</p>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>

            <div className="space-y-8 border-l-2 border-slate-100 ml-5 pl-8">
              {education.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-amber-500 shadow-sm" />

                  <div className="glass p-6 rounded-2xl border border-border/50 hover:border-amber-500/30 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <h4 className="text-lg font-bold text-foreground">{item.degree}</h4>
                      <div className="flex items-center gap-1.5 text-slate-500 text-[11px] font-bold uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-md">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </div>
                    </div>
                    <p className="text-amber-600 font-bold text-sm mb-3">{item.school}</p>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Professional Summary Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16" />
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-4">Ready to collaborate?</h4>
                <p className="text-blue-100 text-sm leading-relaxed mb-6 font-medium">
                  I am available for freelance consulting and full-time opportunities. If you need a precision-focused Senior Surveyor with expertise in pipelines and treatment plants, let's connect.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center bg-white text-blue-600 font-bold text-[12px] px-6 py-3 rounded-full hover:bg-blue-50 transition-colors"
                >
                  HIRE ME TODAY
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
