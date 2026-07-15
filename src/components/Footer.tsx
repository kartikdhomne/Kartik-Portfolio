import { Github, Linkedin, Mail, Heart, LucideTwitter } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/kartikdhomne", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/kartik-dhomne",
      label: "LinkedIn",
    },
    {
      icon: LucideTwitter,
      href: "https://x.com/kartik_dhomne",
      label: "X",
    },
    { icon: Mail, href: "mailto:kartikdhomne1997@google.com", label: "Email" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <footer
      className="relative border-t border-slate-800/80"
      style={{ background: "#070B14" }}
    >
      {/* Graph-paper texture, matches other sections */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#14B8A6 1px, transparent 1px), linear-gradient(90deg, #14B8A6 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-40 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 max-[767px]:px-3 py-12 max-[767px]:py-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid md:grid-cols-3 gap-8 max-[767px]:gap-6 items-center">
          {/* Left side - Branding */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <h3 className="text-2xl font-bold font-mono mb-2">
              <span className="text-teal-400">&gt;</span>{" "}
              <span className="text-white">Kartik</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Senior Frontend Engineer building scalable, <br />
              high-performance web applications with React,<br />
              Next.js, TypeScript, and modern web technologies.
            </p>
          </motion.div>

          {/* Center - Social Links */}
          <motion.div
            className="flex justify-center space-x-4"
            variants={itemVariants}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.icon !== Mail ? "_blank" : undefined}
                rel={social.icon !== Mail ? "noopener noreferrer" : undefined}
                className="p-3 bg-[#0F1626] rounded-md border border-slate-800/80 hover:border-teal-500/50 transition-all duration-300 group"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-slate-400 group-hover:text-teal-400 transition-colors duration-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* Right side - Copyright */}
          <motion.div
            className="text-center md:text-right"
            variants={itemVariants}
          >
            <div className="flex items-center justify-center md:justify-end space-x-1 text-slate-400 text-sm">
              <span>© {currentYear} Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-teal-400 fill-current" />
              </motion.div>
              <span>by Kartik</span>
            </div>
            <p className="text-xs text-slate-500 mt-1 font-mono">
              All rights reserved
            </p>
          </motion.div>
        </div>

        {/* Bottom border with gradient */}
        <motion.div
          className="mt-8 max-[767px]:mt-6 pt-8 max-[767px]:pt-6 border-t border-slate-800/80"
          variants={itemVariants}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4 text-xs text-slate-500 font-mono">
              <span>Built with React &amp; Tailwind CSS</span>
            </div>
            <motion.div
              className="w-32 h-px bg-teal-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;