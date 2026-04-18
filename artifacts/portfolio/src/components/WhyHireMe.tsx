import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Code, Layers, Zap, BrainCircuit, Rocket } from "lucide-react";

const qualities = [
  { icon: BrainCircuit, text: "Strong problem-solving mindset with full-stack expertise" },
  { icon: Layers, text: "Clean code → Scalable architecture → Production deployment" },
  { icon: Zap, text: "Focus on real-world performance and user experience" },
  { icon: Code, text: "AI + Modern tooling integration mindset" },
  { icon: Rocket, text: "End-to-end project delivery experience" }
];

export default function WhyHireMe() {
  return (
    <section id="skills" className="py-20 bg-background relative border-t border-border/50">
      <div className="max-w-screen-xl mx-auto px-4 md:px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Why Hire Me</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Feature Boxes */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="group bg-card border border-border p-8 rounded-2xl hover:border-primary/50 hover:bg-primary/5 transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Clean Code First</h3>
              <p className="text-muted-foreground leading-relaxed">
                I write maintainable, well-documented code that scales. I prioritize readable logic, modular components, and comprehensive type safety to ensure long-term project health and easier team collaboration.
              </p>
            </div>

            <div className="group bg-card border border-border p-8 rounded-2xl hover:border-primary/50 hover:bg-primary/5 transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Full-Stack Ownership</h3>
              <p className="text-muted-foreground leading-relaxed">
                From database schema design and API architecture to UI polish and state management, I handle the complete stack. This holistic view allows me to build features faster with fewer integration bugs.
              </p>
            </div>
          </motion.div>

          {/* Right: Checklist */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card/50 border border-border rounded-2xl p-8 lg:p-10 relative overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
            
            <h3 className="text-xl font-semibold mb-8 text-foreground flex items-center gap-2">
              <span className="text-primary font-mono">{">"}</span> The Value I Bring
            </h3>
            
            <div className="flex flex-col gap-6 relative z-10">
              {qualities.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-foreground/90 font-medium">{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
