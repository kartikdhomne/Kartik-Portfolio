import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const Projects = () => {
  const [ref, isVisible] = useIntersectionObserver(0.1);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform built with React, Tailwind, and Stripe integration. Features include user authentication, cart management, and responsive design.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tech: ["React", "Redux", "Tailwind CSS", "Clerk", "Stripe", "REST Api"],
      github: "https://github.com/kartikdhomne/E-Commerce-Cart-React-Redux",
      demo: "https://easy-shop-redux.netlify.app",
      accent: "#14B8A6",
    },
    {
      title: "Multi User Blog App",
      description:
        "A multi use blog app where each user can need to sign up before posting a blog and can read other person's posted blogs.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      tech: ["React", "Next Js", "Kinde Auth", "TailwindCSS", "Javscript", "React Hook Form"],
      github: "https://github.com/kartikdhomne/NextJs-Blog-APP",
      demo: "https://new-next-js-blog-app.vercel.app/",
      accent: "#F59E0B",
    },
    {
      title: "Sport Shoppie Website",
      description:
        "A responsive sport shoppie website showcasing modern design clean code, responsive and optimized performance across all devices.",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
      tech: ["HTML", "CSS", "JAVASCRIPT"],
      github: "https://github.com/kartikdhomne/E-commerce-site-HTML",
      demo: "https://sport-shoppie.netlify.app/",
      accent: "#38BDF8",
    },
    {
      title: "Weather Dashboard",
      description:
        "A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics with stunning visualizations.",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      tech: ["HTML", "Javacript", "CSS3"],
      github: "https://github.com/kartikdhomne/Code-Editor-Project",
      demo: "https://simple-online-code-editor.netlify.app/",
      accent: "#FB7185",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 max-[991px]:py-14 max-[767px]:py-10 px-4 max-[767px]:px-3 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at bottom, #0B1220 0%, #070B14 55%, #05070D 100%)",
      }}
      ref={ref}
    >
      {/* Graph-paper texture, matches About */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#14B8A6 1px, transparent 1px), linear-gradient(90deg, #14B8A6 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 max-[767px]:w-56 h-96 max-[767px]:h-56 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

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
            // Work
          </motion.span>
          <motion.h2
            className="text-4xl max-[991px]:text-[2.25rem] max-[767px]:text-3xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            My <span className="text-teal-400">Projects</span>
          </motion.h2>

          {/* EKG / pulse divider — signature element, matches About */}
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
            Here are some of my recent projects that showcase my skills and
            passion for creating amazing web experiences
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-[767px]:gap-5"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="group relative bg-[#0F1626] rounded-lg overflow-hidden border border-slate-800/80"
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Corner brackets — instrument-panel motif, matches About */}
              <div
                className="absolute top-0 left-0 w-3 h-3 border-t border-l opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                style={{ borderColor: project.accent }}
              />
              <div
                className="absolute bottom-0 right-0 w-3 h-3 border-b border-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                style={{ borderColor: project.accent }}
              />

              {/* Image container with overlay */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 max-[767px]:h-40 object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-90 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(to top, ${project.accent}CC, transparent)`,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-black/30 backdrop-blur-sm rounded-md hover:bg-black/50 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5 text-white" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-black/30 backdrop-blur-sm rounded-md hover:bg-black/50 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="p-6 max-[767px]:p-4">
                <h3
                  className="text-xl max-[767px]:text-lg font-semibold text-white mb-3 max-[767px]:mb-2 transition-colors duration-300"
                  style={{ color: undefined }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = project.accent)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                >
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 max-[767px]:mb-3 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 max-[767px]:mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-800/60 text-slate-300 text-xs font-mono rounded border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-slate-800/60 hover:bg-slate-700/60 text-slate-300 hover:text-white rounded-md transition-all duration-200 border border-slate-700/60"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 font-medium"
                    style={{
                      backgroundColor: `${project.accent}1A`,
                      color: project.accent,
                      border: `1px solid ${project.accent}40`,
                    }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;