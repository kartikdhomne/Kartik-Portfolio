import { ShieldCheck, Gauge, Globe2, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import TechMarquee from "./TechMarquee";

const About = () => {
  const [ref, isVisible] = useIntersectionObserver(0.2);

  const features = [
    {
      icon: Gauge,
      title: "Performance Optimization",
      description:
        "Cut page load times from 8s to 1.5–2s across 10+ healthcare platforms via code-splitting, CDN delivery, and bundle optimization, lifting Lighthouse scores from 65 to 95.",
      accent: "#14B8A6",
      stat: "65 → 95",
      statLabel: "Lighthouse",
    },
    {
      icon: ShieldCheck,
      title: "Compliance-Grade Frontend",
      description:
        "Delivered 15+ production projects for pharma and healthcare clients across the USA, UK, Canada, and Italy, with WCAG 2.1 AA accessibility and GDPR-aligned consent flows across 18 countries.",
      accent: "#F59E0B",
      stat: "18",
      statLabel: "Countries",
    },
    {
      icon: Globe2,
      title: "Global Collaboration",
      description:
        "Worked within distributed UK/EU teams building high-traffic healthcare platforms, mentoring junior engineers and raising code quality through regular reviews.",
      accent: "#38BDF8",
      stat: "UK / EU",
      statLabel: "Distributed",
    },
    {
      icon: BarChart3,
      title: "Analytics-Driven Development",
      description:
        "Built end-to-end user behavior tracking with GTM and Google Analytics, uncovering high-engagement flows and enabling data-driven UX decisions.",
      accent: "#FB7185",
      stat: "GTM + GA",
      statLabel: "Instrumented",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section
      id="about"
      className="py-20 max-[991px]:py-14 max-[767px]:py-10 px-4 max-[767px]:px-3 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at top, #0B1220 0%, #070B14 55%, #05070D 100%)",
      }}
      ref={ref}
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
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] max-[767px]:w-[320px] h-[300px] max-[767px]:h-[180px] rounded-full bg-teal-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16 max-[991px]:mb-12 max-[767px]:mb-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.span
            className="inline-block font-mono text-xs tracking-[0.3em] max-[767px]:tracking-[0.2em] text-teal-400/80 mb-4 uppercase"
            variants={itemVariants}
          >
            // Profile
          </motion.span>
          <motion.h2
            className="text-4xl max-[991px]:text-[2.25rem] max-[767px]:text-3xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            About <span className="text-teal-400">Me</span>
          </motion.h2>

          {/* EKG / pulse divider — signature element */}
          <motion.svg
            viewBox="0 0 400 40"
            className="w-64 max-[767px]:w-48 h-8 mx-auto mb-6 max-[767px]:mb-4"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.path
              d="M0 20 L130 20 L145 5 L160 35 L175 20 L400 20"
              fill="none"
              stroke="#14B8A6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1.4, ease: "easeInOut", delay: 0.4 }}
            />
          </motion.svg>

          <motion.p
            className="text-xl max-[767px]:text-base text-slate-400 max-w-3xl mx-auto px-2 max-[767px]:px-0"
            variants={itemVariants}
          >
            Senior Frontend Engineer with 4 years of production experience
            delivering compliance-grade web platforms for global clients
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 min-[992px]:grid-cols-2 gap-12 max-[991px]:gap-10 max-[767px]:gap-8 items-center mb-16 max-[991px]:mb-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.h3 className="text-2xl max-[767px]:text-xl font-semibold text-white mb-6 max-[767px]:mb-4 font-mono">
              <span className="text-teal-400">&gt;</span> My Journey
            </motion.h3>
            <motion.p
              className="text-slate-300 mb-4 leading-relaxed max-[767px]:text-sm"
              variants={itemVariants}
            >
              Senior Frontend Engineer with 4 years of experience building
              scalable React and Next.js applications for healthcare and
              pharmaceutical clients across the USA, UK, Canada, and Europe.
              Delivered 15+ production projects, specializing in performance
              optimization, accessibility (WCAG), and GDPR-compliant web
              experiences.
            </motion.p>
            <motion.p
              className="text-slate-300 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Passionate about creating fast, user-centric products that deliver
              measurable business impact. Experienced in collaborating with
              distributed teams across time zones, mentoring developers, and{" "}
              <span className="font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                open to relocation{" "}
              </span>{" "}
              and{" "}
              <span className="font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                visa-sponsored{" "}
              </span>
              opportunities.
            </motion.p>

            <motion.div variants={itemVariants}>
              <TechMarquee />
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 min-[768px]:grid-cols-2 gap-5 max-[767px]:gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                className="group relative bg-[#0F1626] p-6 max-[767px]:p-4 rounded-lg border border-slate-800/80 overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Corner brackets — instrument-panel motif */}
                <div
                  className="absolute top-0 left-0 w-3 h-3 border-t border-l opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ borderColor: feature.accent }}
                />
                <div
                  className="absolute bottom-0 right-0 w-3 h-3 border-b border-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ borderColor: feature.accent }}
                />

                <div className="flex items-start justify-between gap-2 mb-4 max-[767px]:mb-3 flex-wrap">
                  <div
                    className="w-11 h-11 max-[767px]:w-9 max-[767px]:h-9 rounded-md flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${feature.accent}1A` }}
                  >
                    <feature.icon
                      className="w-5 h-5 max-[767px]:w-4 max-[767px]:h-4"
                      style={{ color: feature.accent }}
                    />
                  </div>
                  <div className="text-right">
                    <div
                      className="font-mono text-sm max-[767px]:text-xs font-semibold"
                      style={{ color: feature.accent }}
                    >
                      {feature.stat}
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-slate-500">
                      {feature.statLabel}
                    </div>
                  </div>
                </div>

                <h4 className="text-lg max-[767px]:text-base font-semibold text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
