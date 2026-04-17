import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.png";
import { ArrowDown, Crosshair, Satellite } from "lucide-react";

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
      <div className="absolute inset-0 grid-overlay opacity-60" />

      {/* Decorative coordinate corners */}
      <CoordCorner className="top-24 left-8 opacity-60" label="N 24°41'20&quot;" />
      <CoordCorner className="top-24 right-8 opacity-60 text-right" label='E 46°42&apos;10"' reverse />
      <CoordCorner className="bottom-16 left-8 opacity-50" label="ALT 612m" small />
      <CoordCorner className="bottom-16 right-8 opacity-50 text-right" label="HDOP 0.8" small reverse />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <span className="mono-tag text-foreground/80 tracking-widest font-bold">
            Saudi Arabia &nbsp;•&nbsp; International Experience
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold text-foreground leading-[1.05] mb-6"
        >
          Precision Surveying
          <br />
          <span className="text-gradient-blue">For Modern</span>
          <br />
          <span className="text-gradient-amber">Construction</span>
        </motion.h1>

        {/* Sub-heading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-slate-800 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Professional land surveying, drone aerial mapping, and site analysis
          for construction and infrastructure projects across Saudi Arabia.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 bg-gradient-blue text-white font-semibold text-base px-8 py-4 rounded-xl shadow-blue hover:opacity-90 hover:scale-105 transition-all duration-300"
          >
            <Satellite className="w-5 h-5" />
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 glass text-foreground/70 hover:text-foreground font-semibold text-base px-8 py-4 rounded-xl hover:border-blue-500/50 transition-all duration-300"
          >
            <Crosshair className="w-5 h-5" />
            Get In Touch
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 flex flex-wrap justify-center gap-8"
        >
          {[
            { value: "200+", label: "Projects Completed" },
            { value: "±5mm", label: "Survey Accuracy" },
            { value: "10+", label: "Years Experience" },
            { value: "15+", label: "Regions Covered" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-3xl font-bold text-slate-900"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.value}
              </p>
              <p className="text-slate-600 text-xs font-semibold mono-tag mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="mono-tag text-foreground/30">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-blue-500/40 to-transparent" />
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
        className={`text-blue-400 ${small ? "text-[9px]" : "text-[10px]"} tracking-widest`}
        dangerouslySetInnerHTML={{ __html: label }}
      />
    </div>
  </div>
);

export default Hero;
