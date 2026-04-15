const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-display text-2xl font-bold tracking-wide">
              SURVEY<span className="text-accent">PRO</span>
            </span>
            <p className="text-primary-foreground/50 text-sm mt-1">Professional Land Surveying Services</p>
          </div>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            {["Home", "About", "Services", "Projects", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-accent transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center text-primary-foreground/40 text-sm">
          © {new Date().getFullYear()} SurveyPro. All rights reserved. Saudi Arabia.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
