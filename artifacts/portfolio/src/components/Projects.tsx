import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Filter, Zap } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Apna Ghar",
    subtitle: "PG Rental Platform",
    subtitleColor: "text-cyan-400",
    category: "Full-Stack",
    badgeColor: "bg-cyan-500/15 text-cyan-300 border-cyan-500/25",
    description:
      "Full-stack application with separate dashboards for tenants and landlords. Features authentication, property listings, pricing management, and search...",
    impact: "Streamlined PG discovery & booking for 50+ users",
    emoji: "🏠",
    cardBg: "from-[#0d2a2a] via-[#0e2020] to-[#091818]",
    cardBorder: "border-cyan-900/40",
    tags: ["Full-Stack"],
    links: { github: "https://github.com/Ashwini08-04", demo: "#" },
  },
  {
    id: 2,
    title: "FoodieHub",
    subtitle: "Food Delivery Platform",
    subtitleColor: "text-amber-400",
    category: "Full-Stack",
    badgeColor: "bg-amber-500/15 text-amber-300 border-amber-500/25",
    description:
      "Complete food delivery solution with real-time order tracking, restaurant dashboard, menu management, and customer interface. Built with live update...",
    impact: "Real-time order tracking with sub-second updates",
    emoji: "🍔",
    cardBg: "from-[#2a1800] via-[#201200] to-[#140b00]",
    cardBorder: "border-amber-900/40",
    tags: ["Full-Stack"],
    links: { github: "https://github.com/Ashwini08-04", demo: "#" },
  },
  {
    id: 3,
    title: "SevaDesk",
    subtitle: "Government Service Platform",
    subtitleColor: "text-violet-400",
    category: "Full-Stack",
    badgeColor: "bg-violet-500/15 text-violet-300 border-violet-500/25",
    description:
      "AI-guided multi-service government platform streamlining citizen applications. Features intelligent workflow routing, document management, and stat...",
    impact: "Reduced service application time by 70%",
    emoji: "🏛️",
    cardBg: "from-[#1a0d2e] via-[#180d28] to-[#100820]",
    cardBorder: "border-violet-900/40",
    tags: ["Full-Stack", "AI"],
    links: { github: "https://github.com/Ashwini08-04", demo: "#" },
  },
];

const filters = ["All", "Full-Stack", "AI"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = projects.filter(
    (p) => active === "All" || p.tags.includes(active)
  );

  return (
    <section id="projects" className="py-20 relative border-t border-border/50 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-violet-500/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-screen-xl mx-auto px-4 md:px-5 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p
            className="text-primary text-sm font-semibold tracking-[0.18em] uppercase mb-3"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            — Projects
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Featured{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(100deg, #a855f7, #818CF8)" }}
            >
              Projects
            </span>
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex items-center gap-2 mb-10"
        >
          <Filter className="w-4 h-4 text-muted-foreground" />
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all border ${
                active === f
                  ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/25"
                  : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className={`group bg-[#0b0e17] border ${project.cardBorder} rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/8 transition-all hover:-translate-y-1`}
              >
                {/* Top image area */}
                <div className={`relative h-44 bg-gradient-to-br ${project.cardBg} flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className="text-6xl relative z-10 drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {project.emoji}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col gap-3">
                  {/* Title row */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3
                        className="text-lg font-bold text-foreground leading-tight"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {project.title}
                      </h3>
                      <p className={`text-sm font-semibold mt-0.5 ${project.subtitleColor}`}>
                        {project.subtitle}
                      </p>
                    </div>
                    <span
                      className={`text-[10px] font-bold tracking-wider border px-2 py-1 rounded-md shrink-0 ${project.badgeColor}`}
                    >
                      Full-Stack
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Impact highlight */}
                  <div className="flex items-center gap-2 bg-yellow-500/5 border border-yellow-500/15 rounded-lg px-3 py-2">
                    <Zap className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                    <span className="text-xs font-medium text-yellow-300/90">{project.impact}</span>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2 mt-1">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
                    >
                      <Github className="w-3.5 h-3.5" /> GitHub
                    </a>
                    <a
                      href={project.links.demo}
                      className="flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
