import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

const workflowSteps = [
  { num: "01", text: "Understand the problem and user flow" },
  { num: "02", text: "Build clean responsive frontend screens" },
  { num: "03", text: "Connect backend APIs and databases" },
  { num: "04", text: "Test real workflows and improve delivery" },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-screen-xl mx-auto px-4 md:px-5 w-full grid lg:grid-cols-2 gap-12 xl:gap-20 items-center py-28 lg:py-0 relative z-10">

        {/* ─── LEFT ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6"
        >
          {/* Badge */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-primary border border-primary/30 bg-primary/8 px-3 py-1.5 rounded-full">
              Full-Stack Developer
            </span>
          </div>

          {/* Name */}
          <div className="flex flex-col gap-2">
            <h1
              className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight text-foreground"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Hi, I'm Ashwini
              <br />
              Sonwane.
            </h1>
            <h2
              className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                backgroundImage: "linear-gradient(100deg, #3B82F6, #60A5FA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Building scalable<br />
              web applications.
            </h2>
          </div>

          {/* Bullet points */}
          <div className="flex flex-col gap-2 mt-1">
            {[
              { label: "Current role:", value: "aspiring Full-Stack Developer" },
              { label: "Focus:", value: "responsive interfaces, APIs, dashboards, and real-world workflows" },
              { label: "Strength:", value: "problem-solving with practical project delivery" },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="flex gap-2 text-sm md:text-base"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <span className="text-primary shrink-0">&gt;</span>
                <span className="text-muted-foreground">
                  <span className="text-foreground/80">{label}</span>{" "}{value}
                </span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 mt-2">
            <button
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="/Ashwini_Sonwane_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-card border border-border text-foreground text-sm font-semibold rounded-lg hover:border-primary/40 hover:text-primary transition-all"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
            <a
              href="https://github.com/Ashwini08-04"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-card border border-border text-foreground text-sm font-semibold rounded-lg hover:border-primary/40 hover:text-primary transition-all"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/ashwini-sonawane"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-card border border-border text-foreground text-sm font-semibold rounded-lg hover:border-primary/40 hover:text-primary transition-all"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </motion.div>

        {/* ─── RIGHT: Developer Workflow Card ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="bg-[#0d1117] border border-white/8 rounded-2xl overflow-hidden shadow-2xl">
            {/* Card header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/8">
              <span
                className="text-sm text-muted-foreground"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                developer-workflow.ts
              </span>
              <span className="text-xs font-semibold text-blue-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block animate-pulse" />
                available
              </span>
            </div>

            {/* Steps */}
            <div className="flex flex-col gap-3 p-5">
              {workflowSteps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4 bg-white/[0.03] border border-white/[0.06] rounded-xl px-5 py-4 hover:bg-white/[0.06] hover:border-primary/20 transition-all group"
                >
                  <span
                    className="text-sm font-bold text-primary shrink-0 w-6"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {step.num}
                  </span>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {step.text}
                  </span>
                </motion.div>
              ))}

              {/* Bottom message */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.5 }}
                className="flex items-start gap-4 bg-primary/8 border border-primary/20 rounded-xl px-5 py-4 mt-1"
              >
                <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  Open to internships, entry-level opportunities, and full-stack project collaborations.
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
