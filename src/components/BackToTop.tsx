import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-8 right-8 max-[767px]:bottom-5 max-[767px]:right-5 z-40 p-3 rounded-full bg-[#0F1626] backdrop-blur-md border border-slate-800/80 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.5)] text-slate-300 hover:text-teal-400 hover:border-teal-500/50 transition-colors duration-300"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 10px 30px rgba(20,184,166,0.3)",
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
        >
          <ArrowUp className="w-5 h-5" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;