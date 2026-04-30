import { motion } from "framer-motion";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.jpg";
import { Crosshair, Target, MapPin, Maximize, Activity } from "lucide-react";

const projects = [
  {
    id: "SITE-24-001",
    title: "Regional Pipeline Corridor",
    desc: "120km route survey for industrial pipeline infrastructure across desert terrain.",
    deliverables: ["DTM", "Orthomosaic", "Contours"],
    stats: { acc: "±5mm", method: "GNSS / RTK", area: "120km" },
    image: project1,
    color: "blue"
  },
  {
    id: "SITE-24-002",
    title: "Wastewater Treatment Plant",
    desc: "High-precision construction layout and alignment for structural framework.",
    deliverables: ["Stakeout", "As-Built", "CAD Plan"],
    stats: { acc: "±3mm", method: "Total Station", area: "15,000m²" },
    image: project2,
    color: "amber"
  },
  {
    id: "SITE-24-003",
    title: "UAV Topographic Mapping",
    desc: "Large scale aerial mapping for residential community planning.",
    deliverables: ["Point Cloud", "3D Model", "DSM"],
    stats: { acc: "±15mm", method: "Drone / LiDAR", area: "200Ha" },
    image: project3,
    color: "teal"
  },
  {
    id: "SITE-23-004",
    title: "Commercial Layout Project",
    desc: "Millimetric accuracy layout for multi-story urban infrastructure.",
    deliverables: ["Grid Lines", "Leveling", "Verticality"],
    stats: { acc: "±2mm", method: "Digital Level", area: "Site-Wide" },
    image: project4,
    color: "blue"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-28 relative overflow-hidden bg-background">
      {/* Standard background accents from theme */}
      <div className="absolute inset-0 grid-overlay-subtle" />
      <div className="absolute top-1/2 right-0 w-96 h-96 -translate-y-1/2 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="section-badge font-bold">// 04 — Field Registry</span>
            <div className="h-px w-12 bg-blue-500/30" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tighter"
          >
            Delivering Accuracy on <br />
            <span className="text-gradient-blue">Every Coordinate.</span>
          </motion.h2>
        </div>

        {/* Technical Project Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative glass-strong rounded-[2.5rem] overflow-hidden border border-border shadow-sm hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500">
                {/* Image Container with Surveyor Overlays */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  
                  {/* Technical "Viewfinder" HUD (Light) */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-6 left-6 right-6 bottom-6 border border-white/20 rounded-2xl" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Crosshair className="w-full h-full text-white/60 stroke-[1]" />
                    </div>
                  </div>

                  {/* ID Badge */}
                  <div className="absolute top-8 left-8">
                    <span className="glass px-3 py-1.5 rounded-xl text-[10px] font-black text-slate-900 tracking-widest uppercase border border-white/30">
                      {project.id}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 lg:p-10">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-sm">
                        {project.desc}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">Precision</p>
                      <p className="text-xl font-black text-slate-900">{project.stats.acc}</p>
                    </div>
                  </div>

                  {/* Metadata Strips */}
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                        <Target className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Method</p>
                        <p className="text-xs font-black text-slate-900">{project.stats.method}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                        <Maximize className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Scope</p>
                        <p className="text-xs font-black text-slate-900">{project.stats.area}</p>
                      </div>
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.deliverables.map((item) => (
                      <span key={item} className="text-[9px] font-bold text-blue-600 px-3 py-1 bg-blue-50 rounded-full border border-blue-100">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
