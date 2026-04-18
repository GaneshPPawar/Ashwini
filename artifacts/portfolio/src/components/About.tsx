import { motion } from "framer-motion";

const techCategories = [
  {
    title: "Languages",
    emoji: "{ }",
    skills: ["JavaScript", "Python", "Java", "C"],
  },
  {
    title: "Web Development",
    emoji: "</>",
    skills: ["HTML5", "CSS3", "React", "Responsive Design"],
  },
  {
    title: "Backend & APIs",
    emoji: "⚙",
    skills: ["Node.js", "RESTful APIs", "Debugging", "Error Handling"],
  },
  {
    title: "Database",
    emoji: "🗄",
    skills: ["MongoDB", "SQL"],
  },
  {
    title: "Tools & DevOps",
    emoji: "🛠",
    skills: ["VS Code", "Git", "GitHub", "Root Cause Analysis"],
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="py-20 relative border-t border-border/50 overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-screen-xl mx-auto px-4 md:px-5 relative z-10">
        {/* Header */}
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
            — About Me
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Who I Am &{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(100deg, #3B82F6, #818CF8)" }}
            >
              What I Do
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
              <p>
                I'm an <span className="text-foreground font-semibold">Aspiring Full-Stack Developer</span> pursuing
                B.E. in Electronics & Telecommunication Engineering at Shramsadhana Bombay Trust COE, Jalgaon.
              </p>
              <p>
                Skilled in HTML, CSS, JavaScript, React, Python, Java and C with strong troubleshooting and
                debugging abilities. I have hands-on experience resolving application, API, and database errors
                across real-world projects.
              </p>
              <p>
                I bring <span className="text-foreground font-medium">analytical thinking</span> and a
                <span className="text-foreground font-medium"> focus on system reliability</span> — gained through
                industrial training at Dhoot Automotive and Hitachi Astemo. I believe great software is about
                writing code that is maintainable, testable, and scales alongside business needs.
              </p>
            </div>

            {/* Profile stats */}
            <div className="grid grid-cols-3 gap-4 mt-2">
              {[
                { value: "2", label: "Live Projects" },
                { value: "2", label: "Internships" },
                { value: "8+", label: "Technologies" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-card border border-border rounded-xl p-4 text-center hover:border-primary/40 transition-colors"
                >
                  <div
                    className="text-2xl font-bold text-primary"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{label}</div>
                </div>
              ))}
            </div>

            {/* Profile tag */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
              <p
                className="text-sm text-primary font-medium"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                $ profile.json
              </p>
              <div className="mt-3 space-y-1.5 text-sm text-muted-foreground font-mono text-xs">
                <p><span className="text-blue-300">"name"</span>: <span className="text-green-300">"Ashwini Sonwane"</span>,</p>
                <p><span className="text-blue-300">"location"</span>: <span className="text-green-300">"Jalgaon, India"</span>,</p>
                <p><span className="text-blue-300">"role"</span>: <span className="text-green-300">"Full-Stack Developer"</span>,</p>
                <p><span className="text-blue-300">"status"</span>: <span className="text-emerald-400">"open to opportunities"</span></p>
              </div>
            </div>
          </motion.div>

          {/* Right: Tech Stack */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {techCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="group bg-card border border-border rounded-xl p-5 hover:border-primary/40 hover:bg-primary/3 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-primary text-xs font-bold"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {category.emoji}
                  </span>
                  <h3 className="text-sm font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium bg-background border border-border text-muted-foreground px-3 py-1.5 rounded-lg group-hover:border-primary/30 group-hover:text-foreground transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
