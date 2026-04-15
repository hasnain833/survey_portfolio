import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

const contactInfo = [
  { icon: Phone,  label: "Phone",    value: "+966 XX XXX XXXX",    href: "tel:+966XXXXXXXXX" },
  { icon: Mail,   label: "Email",    value: "surveyor@example.com", href: "mailto:surveyor@example.com" },
  { icon: MapPin, label: "Location", value: "Saudi Arabia",         href: "#" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-overlay-subtle" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="section-badge">// 06 — Contact</span>
          <div className="h-px flex-1 bg-gradient-to-r from-blue-500/30 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Let's <span className="text-gradient-blue">Work Together</span>
          </h2>
          <p className="text-slate-600 font-medium mt-3 max-w-lg">
            Have a project or need professional surveying services? Reach out — I'm available for projects across Saudi Arabia and the region.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left column — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="flex items-center gap-4 glass p-5 rounded-2xl border border-border hover:border-blue-500/25 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-11 h-11 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/15 group-hover:bg-blue-500/20 transition-colors">
                  <item.icon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="mono-tag text-foreground/35 mb-0.5">{item.label.toUpperCase()}</p>
                  <p className="text-foreground font-semibold text-sm" style={{ fontFamily: "var(--font-display)" }}>
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass p-5 rounded-2xl border border-teal-500/20"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
                <span className="mono-tag text-teal-400">AVAILABLE FOR PROJECTS</span>
              </div>
              <p className="text-slate-600 font-medium text-sm leading-relaxed">
                Currently accepting new surveying and mapping projects in Saudi Arabia and neighbouring regions.
              </p>
            </motion.div>
          </motion.div>

          {/* Right column — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl border border-border p-8">
              {/* Form header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/20">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm" style={{ fontFamily: "var(--font-display)" }}>
                    Send a Message
                  </p>
                  <p className="mono-tag text-slate-500 font-medium">I'll respond within 24 hours</p>
                </div>
              </div>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 bg-teal-500/10 border border-teal-500/25 rounded-full flex items-center justify-center mb-4">
                    <Send className="w-7 h-7 text-teal-600" />
                  </div>
                  <h4 className="text-foreground font-bold text-lg mb-2" style={{ fontFamily: "var(--font-display)" }}>
                    Message Sent!
                  </h4>
                  <p className="text-slate-600 font-medium text-sm">Thank you — I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField
                      label="Full Name"
                      type="text"
                      value={form.name}
                      placeholder="Your name"
                      maxLength={100}
                      onChange={(v) => setForm({ ...form, name: v })}
                    />
                    <FormField
                      label="Email"
                      type="email"
                      value={form.email}
                      placeholder="your@email.com"
                      maxLength={255}
                      onChange={(v) => setForm({ ...form, email: v })}
                    />
                  </div>

                  <FormField
                    label="Subject"
                    type="text"
                    value={form.subject}
                    placeholder="Project type or inquiry topic"
                    maxLength={150}
                    onChange={(v) => setForm({ ...form, subject: v })}
                  />

                  <div>
                    <label
                      className="block mono-tag text-foreground/45 mb-2"
                    >
                      MESSAGE
                    </label>
                    <textarea
                      required
                      rows={5}
                      maxLength={1000}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your project or requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-black/4 border border-border text-foreground/85 placeholder:text-foreground/25 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/40 transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 bg-gradient-blue text-white font-semibold py-4 rounded-xl shadow-blue hover:opacity-90 hover:scale-[1.02] active:scale-[0.99] transition-all duration-200"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FormField = ({
  label,
  type,
  value,
  placeholder,
  maxLength,
  onChange,
}: {
  label: string;
  type: string;
  value: string;
  placeholder: string;
  maxLength: number;
  onChange: (v: string) => void;
}) => (
  <div>
    <label className="block mono-tag text-foreground/45 mb-2">
      {label.toUpperCase()}
    </label>
    <input
      type={type}
      required
      maxLength={maxLength}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-xl bg-black/4 border border-border text-foreground/85 placeholder:text-foreground/25 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/40 transition-all duration-200"
    />
  </div>
);

export default Contact;
