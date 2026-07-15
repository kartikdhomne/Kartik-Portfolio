import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [ref, isVisible] = useIntersectionObserver(0.2);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_85yfn9u",
        "template_0gr69ho",
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "P1bYDjESIsTjN43Kh"
      );

      toast({
        title: "Message Sent!",
        description: "I’ll get back to you soon.",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error Sending Email",
        description: "Please try again or contact me directly.",
        variant: "destructive",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "kartikdhomne1997@gmail.com",
      href: "mailto:kartikdhomne1997@gmail.com",
      accent: "#14B8A6",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 8208463693",
      href: "tel:+91 8208463693",
      accent: "#F59E0B",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Nagpur, Maharashtra, India",
      accent: "#38BDF8",
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
    hidden: { y: 30, opacity: 0.5 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const inputClasses =
    "w-full px-4 py-3 bg-[#0F1626] border border-slate-800/80 rounded-md text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/60 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300";

  return (
    <section
      id="contact"
      className="py-20 max-[991px]:py-14 max-[767px]:py-10 px-4 max-[767px]:px-3 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at top, #0B1220 0%, #070B14 55%, #05070D 100%)",
      }}
      ref={ref}
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 max-[767px]:w-56 h-96 max-[767px]:h-56 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 max-[767px]:w-56 h-96 max-[767px]:h-56 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
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
            // Get in touch
          </motion.span>

          <motion.h2
            className="text-4xl max-[991px]:text-[2.25rem] max-[767px]:text-3xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            <span className="text-teal-400">Contact</span> Me
          </motion.h2>

          {/* EKG / pulse divider — signature element, matches other sections */}
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
            className="text-xl max-[767px]:text-base text-slate-400 max-w-2xl mx-auto px-2 max-[767px]:px-0"
            variants={itemVariants}
          >
            Let's work together to bring your ideas to life. I'm always open
            to discussing new opportunities.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 min-[768px]:grid-cols-2 gap-12 max-[991px]:gap-10 max-[767px]:gap-8">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <div className="space-y-4 mb-8 max-[767px]:mb-6">
              {contactInfo.map((item) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  className="group relative flex items-center space-x-4 p-4 max-[767px]:p-3 bg-[#0F1626] rounded-lg border border-slate-800/80 transition-colors duration-300 overflow-hidden"
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                >
                  <div
                    className="absolute top-0 left-0 w-3 h-3 border-t border-l opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ borderColor: item.accent }}
                  />
                  <div
                    className="absolute bottom-0 right-0 w-3 h-3 border-b border-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ borderColor: item.accent }}
                  />
                  <div
                    className="w-11 h-11 max-[767px]:w-10 max-[767px]:h-10 rounded-md flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${item.accent}1A` }}
                  >
                    <item.icon
                      className="w-5 h-5"
                      style={{ color: item.accent }}
                    />
                  </div>
                  <div>
                    <h4 className="text-slate-500 text-xs font-mono uppercase tracking-wider">
                      {item.title}
                    </h4>
                    <p className="text-white font-medium text-sm max-[767px]:text-xs">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Map */}
            <motion.div
              variants={itemVariants}
              className="rounded-lg overflow-hidden border border-slate-800/80 h-64 max-[767px]:h-48"
            >
              <iframe
                title="Nagpur, Maharashtra, India location map"
                src="https://www.google.com/maps?q=Nagpur,Maharashtra,India&output=embed"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "invert(92%) hue-rotate(180deg) grayscale(20%)",
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.form
              className="space-y-6 max-[767px]:space-y-4"
              variants={itemVariants}
              onSubmit={handleSubmit}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <motion.div variants={itemVariants}>
                  <label className="block text-slate-400 text-xs font-mono uppercase tracking-wider mb-2">
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={inputClasses}
                    placeholder="John"
                    disabled={isSubmitting}
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label className="block text-slate-400 text-xs font-mono uppercase tracking-wider mb-2">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={inputClasses}
                    placeholder="Doe"
                    disabled={isSubmitting}
                  />
                </motion.div>
              </div>

              <motion.div variants={itemVariants}>
                <label className="block text-slate-400 text-xs font-mono uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={inputClasses}
                  placeholder="john@example.com"
                  required
                  disabled={isSubmitting}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-slate-400 text-xs font-mono uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={inputClasses}
                  placeholder="Project inquiry"
                  disabled={isSubmitting}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-slate-400 text-xs font-mono uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`${inputClasses} resize-none`}
                  placeholder="Tell me about your project..."
                  required
                  disabled={isSubmitting}
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-teal-500 hover:bg-teal-400 text-[#04342C] font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                variants={itemVariants}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;