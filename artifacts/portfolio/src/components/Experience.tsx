import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    role: "In-Plant Training Intern",
    company: "Dhoot Automotive Systems Pvt. Ltd.",
    period: "Jun 2025 – Jul 2025",
    location: "Jalgaon, India",
    type: "Industrial Training",
    color: "from-blue-500/20 to-cyan-500/10",
    accent: "border-blue-500/40",
    iconColor: "text-blue-400",
    points: [
      "Gained hands-on exposure to automotive manufacturing processes and operational workflows",
      "Observed system-level issues and participated in troubleshooting operational failures",
      "Learned production systems, quality control processes, and industrial operations",
      "Developed analytical thinking and technical problem-solving skills in real-time environment",
    ],
  },
  {
    role: "Internship Trainee",
    company: "Hitachi Astemo India Pvt. Ltd.",
    period: "Jun 2024 – Jul 2024",
    location: "Jalgaon, India",
    type: "Internship",
    color: "from-purple-500/20 to-indigo-500/10",
    accent: "border-purple-500/40",
    iconColor: "text-purple-400",
    points: [
      "Gained exposure to automotive systems and manufacturing processes",
      "Observed industrial systems and assisted in identifying technical issues",
      "Learned quality assurance practices and troubleshooting workflows",
      "Recognized for sincerity, adaptability, and strong learning ability",
    ],
  },
];

const education = {
  degree: "Bachelor of Engineering – ENTC",
  institution: "Shramsadhana Bombay Trust, College of Engineering & Technology",
  location: "Jalgaon, India",
  period: "2023 – 2026",
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative border-t border-border/50 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-screen-xl mx-auto px-4 md:px-5 relative z-10">
        {/* Section Header */}
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
            — Work History
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Experience &<br />
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(100deg, #3B82F6, #818CF8)" }}>
              Education
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Cards */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.15 }}
                className={`group relative bg-card border ${exp.accent} rounded-2xl p-6 md:p-8 hover:shadow-lg hover:shadow-primary/5 transition-all overflow-hidden`}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity`} />

                <div className="relative z-10">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-card border border-border flex items-center justify-center shrink-0 group-hover:border-primary/30 transition-colors">
                        <Briefcase className={`w-5 h-5 ${exp.iconColor}`} />
                      </div>
                      <div>
                        <h3
                          className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {exp.role}
                        </h3>
                        <p className="text-base font-medium text-muted-foreground mt-0.5">{exp.company}</p>
                      </div>
                    </div>
                    <span
                      className="text-xs font-semibold tracking-wider text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mb-5 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" /> {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.points.map((point, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.15 + j * 0.06 }}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary/70 mt-0.5 shrink-0" />
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Education + Achievements */}
          <div className="flex flex-col gap-6">
            {/* Education card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="text-xs font-semibold text-primary tracking-widest uppercase"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Education
                </span>
              </div>
              <h3
                className="text-lg font-bold text-foreground mb-1"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {education.degree}
              </h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{education.institution}</p>
              <div className="flex flex-col gap-1.5 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" /> {education.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3" /> {education.location}
                </span>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.45 }}
              className="bg-card border border-border rounded-2xl p-6 flex-1"
            >
              <span
                className="text-xs font-semibold text-primary tracking-widest uppercase mb-4 block"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Achievements
              </span>
              <ul className="space-y-3">
                {[
                  "Completed Industrial Training at 2 automotive manufacturing firms",
                  "Built multiple full-stack web applications from scratch",
                  "Hands-on debugging, error handling & API troubleshooting",
                  "Real-world exposure to production systems & quality control",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5 text-base leading-none">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
