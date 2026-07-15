import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const [ref, isVisible] = useIntersectionObserver(0.2);

  const testimonials = [
    {
      name: "Saravan Krishna",
      role: "Software Developer, Freelancer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content:
        "Kartik delivered an exceptional website that exceeded our expectations. The attention to detail and user experience is outstanding.",
      rating: 5,
      accent: "#14B8A6",
    },
    {
      name: "John Doe",
      role: "Software Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content:
        "Working with Kartik was a game-changer for our project. Professional, creative, and incredibly skilled. Highly recommended!",
      rating: 5,
      accent: "#F59E0B",
    },
    {
      name: "Michael Smith",
      role: "Software Developer",
      image:
        "https://images.unsplash.com/photo-1756475394041-53bd65722fac?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "The quality of work and communication throughout the project was fantastic. Kartik truly understands modern web development.",
      rating: 5,
      accent: "#38BDF8",
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
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section
      className="py-20 max-[991px]:py-14 max-[767px]:py-10 px-4 max-[767px]:px-3 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at top, #0B1220 0%, #070B14 55%, #05070D 100%)",
      }}
      ref={ref}
    >
      {/* Graph-paper texture, matches About / Projects */}
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
      <motion.div
        className="absolute top-1/3 right-1/4 w-80 max-[767px]:w-48 h-80 max-[767px]:h-48 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16 max-[991px]:mb-12 max-[767px]:mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block font-mono text-xs tracking-[0.3em] max-[767px]:tracking-[0.2em] text-teal-400/80 mb-4 uppercase">
            // Feedback
          </span>
          <h2 className="text-4xl max-[991px]:text-[2.25rem] max-[767px]:text-3xl font-bold text-white mb-4">
            What Clients <span className="text-teal-400">Say</span>
          </h2>

          {/* EKG / pulse divider — signature element, matches About / Projects */}
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

          <p className="text-xl max-[767px]:text-base text-slate-400 max-w-2xl mx-auto px-2 max-[767px]:px-0">
            Don't just take my word for it — here's what my clients have to
            say about working together
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 max-[767px]:gap-5"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              className="group relative p-8 max-[767px]:p-5 bg-[#0F1626] rounded-lg border border-slate-800/80 transition-colors duration-300"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              {/* Corner brackets — instrument-panel motif */}
              <div
                className="absolute top-0 left-0 w-3 h-3 border-t border-l opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ borderColor: testimonial.accent }}
              />
              <div
                className="absolute bottom-0 right-0 w-3 h-3 border-b border-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ borderColor: testimonial.accent }}
              />

              {/* Quote icon */}
              <div
                className="absolute -top-4 -left-4 w-11 h-11 max-[767px]:w-9 max-[767px]:h-9 rounded-md flex items-center justify-center"
                style={{ backgroundColor: `${testimonial.accent}1A`, border: `1px solid ${testimonial.accent}40` }}
              >
                <Quote
                  className="w-5 h-5 max-[767px]:w-4 max-[767px]:h-4"
                  style={{ color: testimonial.accent }}
                />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4 pt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={
                      isVisible
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0 }
                    }
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  </motion.div>
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-300 text-base max-[767px]:text-sm leading-relaxed mb-6 max-[767px]:mb-4">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4 pt-4 border-t border-slate-800/80">
                <div
                  className="w-11 h-11 max-[767px]:w-9 max-[767px]:h-9 rounded-full overflow-hidden border"
                  style={{ borderColor: `${testimonial.accent}60` }}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm max-[767px]:text-xs">
                    {testimonial.name}
                  </h4>
                  <p className="text-slate-500 text-xs font-mono">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;