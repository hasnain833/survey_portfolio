import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.png";
import profileImg from "@/assets/profile-placeholder.png";
import { Satellite, Crosshair, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      {/* Background photo with dark overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Aerial construction site"
          className="w-full h-full object-cover opacity-40"
          width={1920}
          height={1080}
        />
        {/* Light gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(210_40%_98%/0.5)] via-transparent to-[hsl(210_40%_98%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(210_100%_50%/0.03)] via-transparent to-[hsl(38_95%_50%/0.02)]" />
      </div>

      {/* Survey grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-50" />

      {/* Decorative coordinate corners */}
      <CoordCorner className="top-24 left-8 opacity-60 text-blue-500" label="N 24°41'20&quot;" />
      <CoordCorner className="top-24 right-8 opacity-60 text-right text-blue-500" label='E 46°42&apos;10"' reverse />
      <CoordCorner className="bottom-16 left-8 opacity-40 text-blue-500" label="ALT 612m" small />
      <CoordCorner className="bottom-16 right-8 opacity-40 text-right text-blue-500" label="HDOP 0.8" small reverse />
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center pt-24 lg:pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-0 items-center w-full">

          {/* Left Column: Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 max-w-xl">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-3"
            >
              <div className="w-8 h-[1px] bg-blue-500 hidden lg:block" />
              <span className="mono-tag text-blue-600 font-black text-[10px] tracking-[0.2em] uppercase">
                Accomplished Senior Surveyor
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 leading-[0.95] mb-4 tracking-tighter"
            >
              Engineering Precision.
              <br />
              <span className="text-blue-600">Elevating Insight.</span>
            </motion.h1>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-slate-500 text-base sm:text-lg font-medium mb-4 leading-relaxed lg:pr-10"
            >
              Accomplished <span className="text-slate-900 font-bold">Senior Surveyor</span> and Drone Pilot with 15+ years of expertise in pipelines and treatment plants. Delivering millimetric accuracy and strategic consulting for premier infrastructure development.
            </motion.p>

            {/* Quick Metrics (Modern Strip) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 mb-6"
            >
              {[
                { label: "Accuracy", value: "±5mm" },
                { label: "Experience", value: "15+ Yrs" },
                { label: "Software", value: "ArcGIS" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col border-l border-slate-200 pl-4">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">{item.label}</span>
                  <span className="text-base font-black text-slate-900">{item.value}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3"
            >
              <a
                href="#resume"
                className="group relative inline-flex items-center justify-center gap-2 bg-slate-900 text-white font-bold text-[13px] px-8 py-3 rounded-full transition-all duration-300 hover:bg-blue-600 hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/10"
              >
                VIEW RESUME
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 bg-slate-100 text-slate-700 font-bold text-[13px] px-8 py-3 rounded-full hover:bg-slate-200 transition-all duration-300 active:scale-95"
              >
                SURVEY PROJECTS
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white/50 backdrop-blur-sm border border-slate-200 text-slate-700 font-bold text-[13px] px-8 py-3 rounded-full hover:bg-white/80 transition-all duration-300 active:scale-95"
              >
                GET IN TOUCH
              </a>
            </motion.div>
          </div>

          {/* Right Column: Profile Presentation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative group">
              {/* Technical Marker Overlays */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-l-2 border-t-2 border-blue-500/40 rounded-tl-xl z-20 transition-all duration-500 group-hover:-top-6 group-hover:-left-6" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-r-2 border-b-2 border-amber-500/40 rounded-br-xl z-20 transition-all duration-500 group-hover:-bottom-6 group-hover:-right-6" />

              {/* Main Image Container */}
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-slate-900">
                <img
                  src={profileImg}
                  alt="Mohsin Aftab"
                  className="w-full h-full object-cover opacity-90 grayscale-[0.2] hover:grayscale-0 hover:scale-105 transition-all duration-700"
                />
                
                {/* Status Overlay */}
                <div className="absolute top-4 right-4 glass px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-black text-slate-900 tracking-tighter uppercase">ACTIVE SITE</span>
                </div>

                {/* Bottom Info Gradient */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/80 to-transparent pointer-events-none" />
              </div>

              {/* Redesigned Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-6 -left-6 lg:-left-12 glass-strong px-6 py-4 rounded-2xl shadow-xl border border-white/40 flex items-center gap-4 z-30"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <Crosshair className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Professional Role</p>
                  <p className="text-[13px] font-black text-slate-900 tracking-tight leading-none">SENIOR SURVEYOR</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CoordCorner = ({
  className,
  label,
  reverse = false,
  small = false,
}: {
  className?: string;
  label: string;
  reverse?: boolean;
  small?: boolean;
}) => (
  <div
    className={`absolute hidden md:block pointer-events-none ${className}`}
    style={{ fontFamily: "var(--font-mono)" }}
  >
    <div
      className={`flex items-start gap-2 ${reverse ? "flex-row-reverse" : ""}`}
    >
      <div
        className={`relative ${small ? "w-4 h-4" : "w-6 h-6"} crosshair`}
        style={{ flexShrink: 0 }}
      />
      <span
        className={`text-inherit ${small ? "text-[9px]" : "text-[10px]"} tracking-widest`}
        dangerouslySetInnerHTML={{ __html: label }}
      />
    </div>
  </div>
);

export default Hero;
