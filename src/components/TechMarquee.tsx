const rowOne = [
  { name: "JavaScript (ES6+)", color: "from-yellow-400 to-orange-500" },
  { name: "TypeScript", color: "from-blue-500 to-blue-700" },
  { name: "React.js", color: "from-blue-400 to-cyan-500" },
  { name: "Next.js", color: "from-green-400 to-green-600" },
  { name: "HTML5", color: "from-orange-500 to-red-600" },
  { name: "CSS3", color: "from-sky-400 to-blue-500" },
];
const rowTwo = [
  { name: "Redux", color: "from-purple-500 to-fuchsia-500" },
  { name: "Context API", color: "from-indigo-400 to-purple-500" },
  { name: "React Router", color: "from-red-400 to-pink-500" },
  { name: "Tailwind CSS", color: "from-teal-400 to-cyan-500" },
  { name: "Bootstrap", color: "from-purple-600 to-indigo-700" },
  { name: "SCSS", color: "from-pink-400 to-rose-500" },
];
const rowThree = [
  { name: "Node.js", color: "from-green-500 to-emerald-600" },
  { name: "REST API", color: "from-orange-400 to-red-500" },
  { name: "MongoDB", color: "from-green-400 to-lime-500" },
  { name: "Contentful CMS", color: "from-cyan-400 to-blue-500" },
  { name: "Framer Motion", color: "from-violet-400 to-purple-600" },
  { name: "Git", color: "from-orange-500 to-amber-600" },
  { name: "Figma", color: "from-fuchsia-400 to-pink-500" },
  { name: "Vercel", color: "from-slate-300 to-slate-500" },
];
const rowFour = [
  { name: "WCAG 2.1 AA", color: "from-emerald-400 to-teal-500" },
  { name: "Web Accessibility", color: "from-cyan-400 to-teal-500" },
  { name: "Performance Optimization", color: "from-yellow-400 to-amber-500" },
  { name: "Page SEO", color: "from-lime-400 to-green-500" },
  { name: "Cross-Browser Testing", color: "from-blue-400 to-indigo-500" },
  { name: "Responsive Design", color: "from-pink-400 to-fuchsia-500" },
  { name: "Lighthouse", color: "from-orange-400 to-red-500" },
  { name: "WebPageTest", color: "from-red-400 to-rose-500" },
  { name: "React Testing Library", color: "from-indigo-400 to-blue-500" },
  { name: "Vitest", color: "from-yellow-300 to-lime-500" },
  { name: "BrowserStack", color: "from-orange-500 to-amber-600" },
  { name: "Jira", color: "from-sky-400 to-blue-600" },
];

const Chip = ({ tech }) => (
  <div className="group flex-shrink-0 rounded-full p-[1px] bg-slate-700/40 hover:bg-gradient-to-r hover:from-purple-500/60 hover:to-pink-500/60 transition-colors duration-300">
    <div className="px-5 py-2.5 rounded-full bg-slate-800/60 backdrop-blur-sm">
      <span
        className={`bg-gradient-to-r ${tech.color} bg-clip-text text-transparent font-semibold whitespace-nowrap text-sm`}
      >
        {tech.name}
      </span>
    </div>
  </div>
);

const MarqueeRow = ({ items, direction, duration }) => (
  <div className="relative w-full overflow-hidden mb-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
    <div
      className="flex gap-3 w-max"
      style={{
        animation: `${
          direction === "left" ? "marquee-left" : "marquee-right"
        } ${duration}s linear infinite`,
      }}
    >
      {/* Render the list twice back-to-back so the loop is seamless */}
      {[...items, ...items].map((tech, i) => (
        <Chip key={`${tech.name}-${i}`} tech={tech} />
      ))}
    </div>
  </div>
);

const TechMarquee = () => (
  <div className="relative py-4">
    <style>{`
      @keyframes marquee-left {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
      @keyframes marquee-right {
        from { transform: translateX(-50%); }
        to { transform: translateX(0); }
      }
    `}</style>

    <MarqueeRow items={rowOne} direction="left" duration={22} />
    <MarqueeRow items={rowTwo} direction="right" duration={26} />
    <MarqueeRow items={rowThree} direction="left" duration={30} />
    <MarqueeRow items={rowFour} direction="right" duration={34} />
  </div>
);

export default TechMarquee;