import { useState, useEffect } from "react";
import { Menu, X, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Drone", href: "#drone" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      // Active section tracker
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-strong shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 bg-gradient-blue rounded-lg flex items-center justify-center shadow-blue group-hover:scale-110 transition-transform">
              <MapPin className="w-4 h-4 text-white" />
            </div>
            <span
              className="text-xl font-bold tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              SURVEY<span className="text-gradient-blue">PRO</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-foreground font-semibold"
                      : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: "hsl(210 100% 50% / 0.08)", border: "1px solid hsl(210 100% 50% / 0.15)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden lg:flex items-center gap-2 bg-gradient-blue text-white text-sm font-semibold px-5 py-2 rounded-lg shadow-blue hover:opacity-90 hover:scale-105 transition-all duration-200"
            >
              Hire Me
            </a>

            <button
              className="lg:hidden w-10 h-10 glass rounded-lg flex items-center justify-center text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 350, damping: 35 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 glass-strong shadow-lg lg:hidden flex flex-col pt-20 pb-8 px-6"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-5 right-5 w-9 h-9 glass rounded-lg flex items-center justify-center text-foreground/60 hover:text-foreground"
              >
                <X size={18} />
              </button>

              <nav className="flex flex-col gap-2">
                {navLinks.map((link, i) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => setMobileOpen(false)}
                      className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-gradient-blue text-white shadow-blue"
                          : "text-foreground/60 hover:text-foreground hover:bg-black/5"
                      }`}
                    >
                      {link.label}
                    </motion.a>
                  );
                })}
              </nav>

              <div className="mt-auto">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-gradient-blue text-white text-sm font-semibold px-5 py-3 rounded-xl shadow-blue"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
