import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Loading = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 350);
          return 100;
        }
        return Math.min(prev + 4, 100);
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at center, #0B1220 0%, #070B14 55%, #05070D 100%)",
      }}
      exit={{
        opacity: 0,
        scale: 1.05,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
    >
      {/* Graph-paper texture, matches the rest of the site */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#14B8A6 1px, transparent 1px), linear-gradient(90deg, #14B8A6 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ambient glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="text-center relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="inline-block font-mono text-xs tracking-[0.3em] text-teal-400/80 mb-4 uppercase">
            // Loading
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            <span className="text-teal-400">&gt;</span> Portfolio
          </h1>

          {/* Heartbeat character — teal line fills in from left, in exact sync with progress */}
          <div className="relative w-72 md:w-80 mx-auto mb-6">
            <svg viewBox="0 0 320 40" className="w-full h-10">
              {/* Base line, always visible */}
              <path
                d="M0 20 L110 20 L122 6 L136 34 L148 20 L320 20"
                fill="none"
                stroke="#1E293B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Fill line — pathLength normalizes to 0-100 regardless of actual geometry */}
              <path
                d="M0 20 L110 20 L122 6 L136 34 L148 20 L320 20"
                fill="none"
                stroke="#14B8A6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength={100}
                strokeDasharray={100}
                strokeDashoffset={100 - progress}
              />
            </svg>
            <motion.div
              className="absolute top-1/2 w-2.5 h-2.5 rounded-full bg-teal-400"
              style={{
                left: `${progress}%`,
                translateX: "-50%",
                translateY: "-50%",
                boxShadow: "0 0 10px 2px rgba(20,184,166,0.7)",
              }}
            />
          </div>

          {/* Progress bar — same progress value, so it finishes at the same instant as the line above */}
          <div className="w-72 md:w-80 h-2 bg-slate-800/80 rounded-full overflow-hidden mb-4 mx-auto border border-slate-800">
            <motion.div
              className="h-full bg-teal-500 rounded-full relative"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: [-100, 320] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          </div>

          <p className="text-teal-400 font-mono text-lg">
            {Math.round(progress)}%
          </p>

          <motion.p
            className="text-slate-500 text-sm mt-3 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Compiling the experience...
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loading;