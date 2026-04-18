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
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-screen flex items-center pt-20 lg:pt-16">
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
                Expert Land Surveyor
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 leading-[0.95] mb-5 tracking-tighter"
            >
              Precision 
              <br />
              <span className="text-blue-600">Surveying.</span>
            </motion.h1>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-slate-500 text-base sm:text-lg font-medium mb-6 leading-relaxed lg:pr-10"
            >
              Delivering millimetric accuracy through advanced <span className="text-slate-900 font-bold">Drone Mapping</span> and traditional <span className="text-slate-900 font-bold">Analysis</span> for premier projects.
            </motion.p>

            {/* Quick Metrics (Modern Strip) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8"
            >
              {[
                { label: "Accuracy", value: "±5mm" },
                { label: "Experience", value: "10+ Yrs" },
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
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2 bg-slate-900 text-white font-bold text-[13px] px-8 py-3 rounded-full transition-all duration-300 hover:bg-blue-600 hover:scale-105 active:scale-95"
              >
                SURVEY PROJECTS
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-slate-100 text-slate-700 font-bold text-[13px] px-8 py-3 rounded-full hover:bg-slate-200 transition-all duration-300 active:scale-95"
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
            className="relative order-1 lg:order-2 flex justify-center"
          >
            {/* Visual Depth Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-500/5 rounded-full blur-[80px]" />
            
            <div className="relative">
              {/* Technical Frame */}
              <div className="relative w-full max-w-[340px] xl:max-w-[380px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-white bg-white p-2.5">
                <div className="w-full h-full rounded-[1.4rem] overflow-hidden relative">
                  <img
                    src={profileImg}
                    alt="Mohsin Aftab"
                    className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
                  />
                  {/* Subtle UI Overlays */}
                  <div className="absolute top-3 right-3 glass px-2.5 py-1 rounded-full flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[9px] font-black text-slate-900 tracking-tighter uppercase">Online</span>
                  </div>
                </div>
              </div>

              {/* Floating Tech Badge (More Compact) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-4 -left-4 lg:-left-8 bg-white px-5 py-4 rounded-[1.5rem] shadow-xl border border-slate-50 flex items-center gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-100">
                  <Crosshair className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Expertise</p>
                  <p className="text-sm font-black text-slate-900 tracking-tight">LAND SURVEYOR</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="mono-tag text-slate-400 uppercase text-[9px] tracking-[0.2em]">SCROLL</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500/40 to-transparent" />
        <ArrowDown className="w-4 h-4 text-blue-500/50" />
      </motion.div>
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
