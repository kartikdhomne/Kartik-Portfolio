import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { LiquidButton } from "@/components/animate-ui/primitives/buttons/liquid";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const typewriterVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Kartik_Dhomne_Frontend_Engineer_Resume.pdf";
    link.download = "Kartik_Resume.pdf";
    link.click();
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Floating code-symbol panels. Position is set via className (with a
  // max-[640px] override) instead of inline style, so each symbol can sit
  // somewhere safe on mobile instead of inheriting its desktop percentage.
  // The four that don't have safe room on a narrow screen are hidden below
  // 640px rather than crammed in.
  const codeSymbols = [
    {
      text: "</>",
      posClasses: "top-[18%] left-[10%] max-[640px]:top-[6%] max-[640px]:left-[4%]",
      size: "text-4xl max-[640px]:text-xl",
      depth: 0.9,
      duration: 9,
    },
    {
      text: "{ }",
      posClasses: "top-[62%] left-[8%] max-[640px]:hidden",
      size: "text-3xl",
      depth: 0.6,
      duration: 11,
    },
    {
      text: "( )",
      posClasses: "top-[22%] left-[84%] max-[640px]:top-[6%] max-[640px]:left-[76%]",
      size: "text-3xl max-[640px]:text-xl",
      depth: 0.7,
      duration: 10,
    },
    {
      text: "01",
      posClasses: "top-[40%] left-[3%] max-[640px]:hidden",
      size: "text-2xl",
      depth: 0.4,
      duration: 13,
    },
    {
      text: "&&",
      posClasses: "top-[69%] left-[25%] max-[640px]:hidden",
      size: "text-3xl",
      depth: 0.6,
      duration: 12,
    },
    {
      text: "=>",
      posClasses: "top-[69%] left-[74%] max-[640px]:hidden",
      size: "text-3xl",
      depth: 0.7,
      duration: 8,
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at top, #0B1220 0%, #070B14 55%, #05070D 100%)",
      }}
    >
      {/* Background, matching the rest of the site */}
      <div
        className="absolute inset-0"
        style={{ perspective: "1200px", perspectiveOrigin: "50% 30%" }}
      >
        {/* Graph-paper texture */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#14B8A6 1px, transparent 1px), linear-gradient(90deg, #14B8A6 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Ambient glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] max-[640px]:w-[320px] h-[300px] max-[640px]:h-[160px] rounded-full bg-teal-500/10 blur-[100px] pointer-events-none" />

        {/* Floating 3D code-symbol panels */}
        {codeSymbols.map((s, i) => (
          <motion.div
            key={i}
            className={`absolute font-mono ${s.size} text-cyan-300/70 select-none ${s.posClasses}`}
            style={{
              opacity: s.depth,
              filter: `blur(${(1 - s.depth) * 1.2}px)`,
            }}
            animate={{
              y: [0, -18, 0],
              rotateY: [0, 12, 0],
              rotateX: [0, -8, 0],
            }}
            transition={{
              duration: s.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          >
            <span
              className="block px-3 py-1 max-[640px]:px-2 max-[640px]:py-0.5 rounded-lg border border-cyan-400/20 bg-cyan-400/5 backdrop-blur-sm shadow-[0_0_20px_rgba(34,211,238,0.15)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              {s.text}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center max-w-4xl mx-auto z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mb-8">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            Hi, I'm{" "}
            <motion.span
              className="bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 bg-clip-text text-transparent"
              style={{
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 18px rgba(244,114,182,0.35))",
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Kartik
            </motion.span>
          </motion.h1>

          <motion.div
            className="text-2xl md:text-3xl text-slate-300 mb-6 h-12 overflow-hidden mt-8"
            variants={itemVariants}
          >
            <motion.div
              className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent font-semibold"
              variants={typewriterVariants}
              style={{
                whiteSpace: "nowrap",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 12px rgba(244,114,182,0.25))",
              }}
            >
              Senior Frontend Developer
            </motion.div>
          </motion.div>

          <motion.p
            className="mb-12 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            I create beautiful, responsive, and user-friendly web applications
            using modern technologies like React, Next, and Tailwind CSS.
          </motion.p>
        </div>

        <div className="mb-12">
          <motion.div
            className="flex justify-center space-x-6 mb-12"
            variants={itemVariants}
          >
            {[
              {
                icon: Github,
                href: "https://github.com/kartikdhomne",
                label: "Github Icon",
                color: "hover:bg-slate-700",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/kartik-dhomne",
                label: "Linkedin Icon",
                color: "hover:bg-blue-600",
              },
              {
                icon: Mail,
                href: "mailto:kartikdhomne1997@google.com",
                label: "Mail Icon",
                color: "hover:bg-red-600",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                target={social.icon !== Mail ? "_blank" : undefined}
                rel={social.icon !== Mail ? "noopener noreferrer" : undefined}
                className={`p-4 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700 hover:border-teal-500/50 transition-colors duration-300 ${social.color}`}
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  boxShadow: "0 10px 30px rgba(20,184,166,0.3)",
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                whileTap={{
                  scale: 0.95,
                  transition: { duration: 0.1 },
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.8 + index * 0.1, duration: 0.6 },
                }}
              >
                <social.icon
                  className="w-6 h-6 text-slate-300"
                  aria-hidden="true"
                />
              </motion.a>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="relative inline-block rounded-md overflow-hidden shadow-[0_8px_24px_-8px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_30px_rgba(20,184,166,0.25)] transition-shadow duration-300">
              {/* Infinitely rotating teal border */}
              <motion.div
                className="absolute"
                style={{
                  inset: "-100%",
                  background:
                    "conic-gradient(from 0deg, transparent 0deg, #14B8A6 35deg, transparent 90deg, transparent 360deg)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              {/* Black panel with border, matches BackToTop */}
              <div className="relative m-[2px] rounded-md overflow-hidden bg-[#0F1626] border border-slate-800/80">
                <LiquidButton
                  onClick={handleDownloadResume}
                  aria-label="Download Kartik's resume (PDF)"
                  hoverScale={1.05}
                  tapScale={0.95}
                  fillHeight="120"
                  delay="0"
                  className="text-base font-semibold px-8 py-4 h-auto rounded-md overflow-hidden text-slate-100 [--liquid-button-background-color:theme(colors.slate.900)] [--liquid-button-color:theme(colors.teal.800)]"
                >
                  Download Resume
                </LiquidButton>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 flex flex-col items-center justify-center z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.button
          onClick={scrollToAbout}
          aria-label="Scroll to About section"
          className="p-2 rounded-full hover:bg-slate-800/30 transition-all duration-200"
          whileHover={{ scale: 1.2 }}
        >
          <ChevronDown
            aria-hidden="true"
            className="w-8 h-8 text-slate-400 hover:text-teal-400 transition-colors duration-200"
          />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;