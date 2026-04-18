import { MapPin, Mail, Phone } from "lucide-react";

const footerLinks = {
  Navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Drone Mapping", href: "#drone" },
    { label: "Projects", href: "#projects" },
  ],
  Services: [
    { label: "Land Surveying", href: "#services" },
    { label: "Site Analysis", href: "#services" },
    { label: "Aerial Mapping", href: "#drone" },
    { label: "Construction Layout", href: "#services" },
    { label: "GIS & Reporting", href: "#services" },
  ],
};

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 bg-gradient-blue rounded-lg flex items-center justify-center shadow-blue">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <span
                className="text-xl font-bold tracking-tight text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                SURVEY<span className="text-gradient-blue">PRO</span>
              </span>
            </div>

            <p className="text-foreground/45 text-sm leading-relaxed max-w-xs mb-6">
              Professional land surveying, drone aerial mapping, and site analysis services across Saudi Arabia and the wider region.
            </p>

            {/* Contact mini */}
            <div className="space-y-2.5">
              {[
                { icon: Phone, text: "+966 XX XXX XXXX" },
                { icon: Mail, text: "surveyor@example.com" },
                { icon: MapPin, text: "Saudi Arabia" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2.5 text-foreground/40 hover:text-foreground/70 transition-colors">
                  <item.icon className="w-4 h-4 text-blue-500/60 flex-shrink-0" />
                  <span className="text-sm" style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <p className="text-foreground font-semibold text-sm mb-5" style={{ fontFamily: "var(--font-display)" }}>
                {heading}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-foreground/40 hover:text-foreground/80 text-sm transition-colors duration-200 hover-underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-foreground/25 text-xs" style={{ fontFamily: "var(--font-mono)" }}>
            © {new Date().getFullYear()} Mohsin Aftab. All rights reserved. Saudi Arabia.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[
              {
                label: "LinkedIn", href: "#",
                icon: (props: any) => (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                )
              },
              {
                label: "Twitter", href: "#",
                icon: (props: any) => (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                )
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 glass rounded-lg flex items-center justify-center text-foreground/35 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-200"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
